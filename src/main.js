import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = process.env.VUE_APP_PRODUCTION_TIP || false

new Vue({
  render: h => h(App),
}).$mount('#app')
