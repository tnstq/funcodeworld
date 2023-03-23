import Vue from 'vue'

import App from './App'
import store from './store'
import router from './router'

//引入饿了吗ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

//引入相关API请求接口
import API from '@/api'
//注册全局组件
// import CategorySelect from '@/components/CategorySelect';
// Vue.component(CategorySelect.name,CategorySelect);

//挂载到Vue原型上，任意组件都可以使用API接口
Vue.prototype.$API = API;
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
