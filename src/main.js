import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Element from 'element-ui';

import './styles/element-variables.scss' //modify lib element ui
import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import './styles/index.scss' // global css

import '@/icons' // icon

Vue.config.productionTip = false
Vue.use(Element, { size: 'small', zIndex: 3000 });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


