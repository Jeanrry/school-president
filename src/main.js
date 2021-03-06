import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './vuex/store'
import './theme/index.css'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import UglyUI from 'ugly-ui-vue'

// 设置title
import VueWeChatTitle from 'vue-wechat-title'

// import './assets/icon/iconfont.css'

// uglyui
import UglyComponent from './components/UglyComponent'

Vue.use(UglyComponent)

Vue.use(ElementUI)
Vue.use(UglyUI)
Vue.use(VueWeChatTitle)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
