// 获取packages下所有vue文件
const requireComponent = require.context("../packages", true, /\.vue$/);
var moudle = {};
const install = function(Vue) {
  // 判断是否安装
  if (install.installed) return;
  // 获取文件name
  requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName);
    var componentName = componentConfig.default.name;
    moudle[componentName] = componentConfig.default;
    // 遍历注册全局组件
    Vue.component(componentName, componentConfig.default || componentConfig);
  });
};
// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  ...moudle,
};
// import vaeButton from "./vae-button";

// // 存储组件列表
// const components = [vaeButton];

// // 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
// const install = function(Vue) {
//   // 遍历注册全局组件
//   components.forEach(component => {
//     Vue.component(component.name, component);
//   });
// };

// // 判断是否是直接引入文件
// if (typeof window !== "undefined" && window.Vue) {
//   install(window.Vue);
// }
// export default {
//   // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
//   install,
//   vaeButton
// };
