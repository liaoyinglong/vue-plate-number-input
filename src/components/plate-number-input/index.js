import plateNumberInput from './index.vue';

const install = function(Vue, opts = {}) {
  Vue.component(plateNumberInput.name, plateNumberInput);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
};
