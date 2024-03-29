import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.config.productionTip = false;
Vue.filter('capitalize', function (value) {

  if (!value) return;
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);

})

new Vue({
  vuetify,

  render: h => h(App),
}).$mount('#app')
