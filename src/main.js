import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import globalFunc from "@/functions/globalFunc"

Vue.config.productionTip = false

Vue.prototype.$window = window
Vue.prototype.$globalFunc = globalFunc

new Vue({
  router,
  store,
  created() {},
  render: h => h(App)
}).$mount('#app')
