// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './lib/css'
import './lib/script'
import './lib/global'

import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import router from './router'
import EventBus from './lib/eventBus.js'
import axios from 'axios'
import echarts from 'echarts'

import 'element-ui/lib/theme-chalk/index.css'
import './css/ionicons.min.css?v=2.0.1'
import './css/font-awesome.min.css?v=2.0.1'
import './css/style.css?v=2.0.1'

// axios.defaults.headers.post['content-Type'] = 'appliction/x-www-form-urlencoded'
// axios.interceptors.request.use(
//   config => {
//     config.headers.ContentType = 'application/x-www-form-urlencoded'
//     return config
//   },
//   err => {
//     return Promise.reject(err)
//   }
// )

Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
Vue.prototype.$bus = EventBus
Vue.prototype.$http = axios
Vue.prototype.$bus.token = window.localStorage.getItem('Auth') || ''
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  template: '<App/>',
  components: {
    App
  }
})
