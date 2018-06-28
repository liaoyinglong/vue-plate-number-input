<template>
  <div id="app">
    <plateNumberInput v-model="carnum" @saveButtonClick='onSaveButtonClick'>
      slot 的内容 {{carnum}}
    </plateNumberInput>
  </div>
</template>

<script>
import plateNumberInput from "./components/plate-number-input/index.vue";

export default {
  name: "app",
  components: {
    plateNumberInput
  },
  data() {
    return {
      carnum: "粤B123452"
    };
  },
  methods: {
    onSaveButtonClick(isSaveButtonActive) {
      console.log(
        isSaveButtonActive ? "此时保存按钮可用" : "此时保存按钮不可用"
      );
    }
  }
};
</script>
