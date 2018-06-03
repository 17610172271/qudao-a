module.exports = [
  {
    type: 'item',
    isHeader: true,
    name: 'MAIN NAVIGATION'
  },
  {
    type: 'item',
    icon: 'fa fa-home',
    name: '首页',
    router: {
      name: 'home'
    }
  },
  {
    type: 'tree',
    icon: 'fa fa-file-text-o',
    name: '应用绑定',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '应用管理',
        router: {
          name: 'application_list'
        }
      }
    ]
  },
  {
    type: 'tree',
    icon: 'fa fa-user-o',
    name: '财务管理',
    // badge: {
    //   type: 'Number',
    //   data: 4
    // },
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '收入统计',
        router: {
          name: 'financial_income'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '订单统计',
        router: {
          name: 'financial_order'
        }
      }
    ]
  },
  {
    type: 'tree',
    icon: 'fa fa-bar-chart',
    name: '系统文档',
    // badge: {
    //   type: 'Number',
    //   data: 4
    // },
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'android',
        router: {
          name: 'doc_android'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'IOS调用说明',
        router: {
          name: 'doc_ios'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'SDK下载',
        router: {
          name: 'doc_sdk'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '系统文档',
        router: {
          name: 'doc_system'
        }
      }
    ]
  },
  {
    type: 'item',
    icon: 'fa fa-home',
    name: '影片库（代理商）',
    router: {
      name: 'films'
    }
  },
  {
    type: 'tree',
    icon: 'fa fa-cog',
    name: '系统设置',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '公司信息（代理商）',
        router: {
          name: 'setting_company'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '我的消息',
        router: {
          name: 'setting_news'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '个人资料',
        router: {
          name: 'setting_person'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '意见反馈',
        router: {
          name: 'setting_suggest'
        }
      }
    ]
  }
]
