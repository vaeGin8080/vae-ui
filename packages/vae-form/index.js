import vaeForm from "./vae-form.vue";

const install = function(Vue) {
  Vue.component(vaeForm.name, vaeForm);
};

export default {
  install,
};
