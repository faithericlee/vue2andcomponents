import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import 'normalize.css/normalize.css'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'
import '@/components/SvgIcon/index.js'

Vue.config.productionTip = false

//全局注册使用mavonEditor
Vue.use(mavonEditor)
// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
