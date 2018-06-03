import Vue from 'vue'
import Router from 'vue-router'
// import bus from '../lib/eventBus.js'
Vue.use(Router)
const rs = path => {
  return resolve => require(['@/pages/' + path], resolve)
}
const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: rs('home/index'),
      children: [
        {
          path: '/',
          name: 'home',
          meta: {requreAuth: true},
          component: rs('home/home')
        },
        {
          path: '/application',
          component: rs('application/index'),
          meta: {requreAuth: true},
          children: [
            {
              path: 'list',
              name: 'application_list',
              component: rs('application/list')
            },
            {
              path: 'bindapp',
              name: 'application_bindapp',
              component: rs('application/bindapp')
            }
          ]
        },
        {
          path: '/financial',
          component: rs('financial/index'),
          meta: {requreAuth: true},
          children: [
            {
              path: 'income',
              name: 'financial_income',
              component: rs('financial/income')
            },
            {
              path: 'order',
              name: 'financial_order',
              component: rs('financial/order')
            }
          ]
        },
        {
          path: '/doc',
          component: rs('doc/index'),
          meta: {requreAuth: true},
          children: [
            {
              path: 'android',
              name: 'doc_android',
              component: rs('doc/android')
            },
            {
              path: 'ios',
              name: 'doc_ios',
              component: rs('doc/ios')
            },
            {
              path: 'sdk',
              name: 'doc_sdk',
              component: rs('doc/sdk')
            },
            {
              path: 'system',
              name: 'doc_system',
              component: rs('doc/system')
            }
          ]
        },
        {
          path: '/films',
          name: 'films',
          meta: {requreAuth: true},
          component: rs('films/home')
        },
        {
          path: '/setting',
          component: rs('setting/index'),
          meta: {requreAuth: true},
          children: [
            {
              path: 'suggest',
              name: 'setting_suggest',
              component: rs('setting/suggest')
            },
            {
              path: 'news',
              name: 'setting_news',
              component: rs('setting/news')
            },
            {
              path: 'company',
              name: 'setting_company',
              component: rs('setting/company')
            },
            {
              path: 'person',
              name: 'setting_person',
              component: rs('setting/person')
            }
          ]
        },
        {
          path: '/login',
          name: 'login',
          component: rs('common/login')
        }
      ]
    }
  ],
  linkActiveClass: 'active'
})
router.beforeEach((to, from, next) => {
  // 判断去往的页面是否需要登录
  if (to.matched.some(record => record.meta.requreAuth) && !window.localStorage.getItem('Auth')) {
    next({
      path: '/login',
      query: { from: to.fullPath }
    })
  } else {
    next()
  }
})
export default router
