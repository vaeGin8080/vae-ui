import Vue from "vue";
import App from "./App.vue";

import vaeUI from "../packages";

Vue.config.productionTip = false;
Vue.use(vaeUI);
new Vue({
  render: h => h(App)
}).$mount("#app");
