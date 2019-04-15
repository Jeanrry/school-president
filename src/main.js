import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './vuex/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 设置title
import VueWeChatTitle from 'vue-wechat-title'

Vue.use(ElementUI)
Vue.use(VueWeChatTitle)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
