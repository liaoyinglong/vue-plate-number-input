<template>
  <div id="app">
    <plateNumberInput v-model="carnum"></plateNumberInput>
    {{carnum}}
  </div>
</template>

<script>
import plateNumberInput from './components/plate-number-input/index';

export default {
  name: 'app',
  components: {
    plateNumberInput
  },
  data() {
    return {
      carnum: ''
    };
  }
};
</script>
