
  <template>
  <div>
    <div>
      <div id='inputboxWrapper' class="container-top">
        <div class='container-info'>{{headerText}}</div>
        <div class="container-input">
          <span v-for="(item,index) in inputList" :class="{focus:index === currentIndex}" @click='onInputBoxInput(index)' v-if='lastInputDisplay(index)'>{{item.text}}</span>
        </div>
        <div slot></div>
        <div class="container-save-button">
          <span id="btnSave" class="btnbind" :class="{active:isSaveButtonActive}">{{saveButtonText}}</span>
        </div>
        <div class="container-switch-button" @click='onSwitchButtonClick'>
          &nbsp;&nbsp;{{switchText}}
        </div>
      </div>
      <span class='bar_bindcarnum'></span>
    </div>
    <transition name="van-slide-bottom">
      <div id="keyboardWrapper" v-show='keyboardDisplay'>
        <div v-for="(row,index) in currentKeyboard" :class="_prefix('row')">
          <span v-for="col in row" :class="getColClass(col)" @click="onKeyBoardClick(col)">{{col === DELETE? "":col }}</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { keyboard, disableKeyBoard, CAR_NUMBER_TYPES, DELETE, CONFIRMED, inputList } from './config.js';
import { note } from '@/common/log';
export default {
  props: {
    saveButtonText: {
      type: String,
      default: '保存'
    },
    headerText: {
      type: String,
      default: '请输入您的车牌'
    },
    switchTextArr: {
      type: Array,
      default() {
        return ['切换为新能源绿车牌', '点击切换为普通蓝牌车'];
      }
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentIndex: 0,
      carNumerType: CAR_NUMBER_TYPES.NORMAL,
      DELETE,
      CONFIRMED,
      inputList,
      keyboardDisplay: true
    };
  },
  computed: {
    switchText() {
      const switchTextIndex = this.carNumerType === CAR_NUMBER_TYPES.NEWPOWER ? 1 : 0;
      return this.switchTextArr[switchTextIndex];
    },
    currentKeyboard() {
      return keyboard[this.currentIndex && 1];
    },
    disableRule() {
      return disableKeyBoard[this.currentIndex];
    },
    currentMaxInputLength() {
      return this.carNumerType === CAR_NUMBER_TYPES.NORMAL ? 7 : 8;
    },
    isSaveButtonActive() {
      return this.currentCarNumber.length === this.currentMaxInputLength;
    },
    currentCarNumber: {
      set(carNumber) {
        const strArr = [...carNumber];
        this.carNumerType = strArr.length === 7 ? CAR_NUMBER_TYPES.NORMAL : CAR_NUMBER_TYPES.NEWPOWER;
        strArr.forEach((item, index) => {
          this.inputList[index] = item;
        });
      },
      get() {
        return this.inputList.reduce((next, item, index) => {
          if (index >= this.currentMaxInputLength) return next;
          return next + item.text;
        }, '');
      }
    }
  },
  methods: {
    onInputBoxInput(index) {
      this.keyboardDisplay = true;
      this.currentIndex = index;
    },
    onSwitchButtonClick() {
      let oldMaxInputLength;
      const { NORMAL, NEWPOWER } = CAR_NUMBER_TYPES;
      if (this.carNumerType === NORMAL) {
        this.carNumerType = NEWPOWER;
        oldMaxInputLength = 7;
      } else {
        this.carNumerType = NORMAL;
        oldMaxInputLength = 8;
      }
      this.currentIndex =
        this.currentIndex === oldMaxInputLength - 1 ? this.currentMaxInputLength - 1 : this.currentIndex;
    },
    lastInputDisplay(index) {
      if (index !== this.inputList.length - 1) return true;
      return this.carNumerType === CAR_NUMBER_TYPES.NEWPOWER;
    },
    _prefix(str) {
      return ` keyboard-${str} `;
    },
    getColClass(col) {
      let className = this._prefix('item');
      if (col === this.DELETE) {
        return className + this._prefix(this.DELETE);
      }
      if (col === '') {
        return className + this._prefix('placeholder');
      }
      if (this.disableRule.includes(col)) {
        return className + this._prefix('disable');
      }
      return className;
    },
    clickDeleteKey() {
      this.inputList[this.currentIndex].text = '';
      if (this.currentIndex === 0) return;
      this.currentIndex--;
    },
    nextKey() {
      this.currentIndex =
        this.currentIndex === this.currentMaxInputLength - 1 ? this.currentIndex : ++this.currentIndex;
    },
    onKeyBoardClick(item) {
      if (item === '') {
        return note('点击的是空白键');
      }
      if (item === CONFIRMED) {
        this.keyboardDisplay = false;
        return note('点击的是', CONFIRMED);
      }
      if (item === DELETE) {
        this.clickDeleteKey();
        return note('点击的是', DELETE);
      }
      if (this.disableRule.includes(item)) {
        return note('点击的是禁用键');
      }
      this.inputList[this.currentIndex].text = item;
      this.nextKey();
    },
    onSaveButtonClick() {
      note('点击的是 确定按钮');
      this.$emit('saveButtonClick', this.isSaveButtonActive);
    }
  }
};
</script>

<style lang="stylus" src='./index.styl'></style>
