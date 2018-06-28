# 车牌输入键盘控件- vue 组件版本

## 在线预览

[在线 demo](https://liaoyinglong.github.io/vue-plate-number-input/dist/demo.html)

![](https://github.com/liaoyinglong/plate-number-input/raw/master/example/demo.gif)

## Quick Start

```html
 <div id="app">
    <plate-number-input  v-model="carnum" @saveButtonClick='onSaveButtonClick'>
      <div>
        slot的内容插入到这里
      </div>
    </plate-number-input>
  </div>
```

```js
export default {
  name: 'app',
  components: {
    plateNumberInput
  },
  data() {
    return {
      carnum: '粤B123452'
    };
  },
  methods: {
    onSaveButtonClick(isSaveButtonActive) {
      console.log(isSaveButtonActive ? '此时保存按钮可用' : '此时保存按钮不可用');
    }
  }
};
```

## Installation

### 从 GitHub 下载代码

```html
<script src="/path/to/plateNumberInput.js"></script>
```

### 用包管理工具

支持 [npm](https://www.npmjs.com)

#### NPM

```
  $ npm install vue-plate-number-input --save
```

### Module Loaders

支持 AMD, CommonJS 以及 ES module.

#### script 标签引入

`script` 标签引入，暴露在全局的变量是 `plateNumberInput`

#### ES6

```javascript
import PlateNumberInput from 'vue-plate-number-input';
```

## 浏览器支持

ie9+

## props

| 参数           |                     说明 |   类型   |                     默认值                     |
| -------------- | -----------------------: | :------: | :--------------------------------------------: |
| saveButtonText |         保存按钮展示文字 |  string  |                      保存                      |
| headerText     |             头部提示文字 |  string  |                 请输入您的车牌                 |
| switchTextArr  | 切换车牌按钮显示文字数组 | []string | ['切换为新能源绿车牌', '点击切换为普通蓝牌车'] |
| value          |                 当前车牌 |  string  |                       -                        |

## event

| 事件名称        |             说明 |  参数   | 参数说明                               |
| --------------- | ---------------: | :-----: | -------------------------------------- |
| saveButtonClick | 点击保存按钮回调 | Boolean | true:保存按钮高亮，false：置灰保存按钮 |

## LICENSE

MIT
