// all api
export const BASE_URL = '/v1'

// 通用api
export const common = {
  province: '/v1/common/getProvince',
  city: '/v1/common/getCity',
  area: '/v1/common/getArea',
  upload: '/v1/common/upload',
  codeGet: '/v1/captcha/get', // 图片验证码获取
  codeCheck: '/v1/captcha/check', // 图片验证
  telCodeSend: '/v1/sms/send', // 手机验证码发送
  telCodeCheck: '/v1/sms/check' // 手机验证码效验
}
// 用户功能相关
export const user = {
  isUsername: '/v1/validate/check_username_available', // 检查用户名是否存在
  isTel: '/v1/validate/check_mobile_available', // 检查手机是否存在
  register: '/v1/user/register', // 用户注册
  login: '/v1/user/login', // 用户登录
  logout: '/v1/user/logout', // 退出登录
  findPsd: '/v1/user/lostpwd' // 找回密码
}
// 应用管理
export const application = {
  options: '/v1/app/industry_options', // 行业选项
  bind: '/v1/application/bind', // 绑定应用
  list: '/v1/application/list', // 应用列表
  detail: '/v1/application/details', // 应用详情
  edit: '/v1/app/edit', // 编辑
  del: '/v1/application/del', // 删除
  infoOptions: 'v1/application/information_options', // 匹配信息选项
  industryOptions: '/v1/application/industry_options' // 行业信息选项
}

// 影片库
export const films = {
  list: '/v1/film/list' // 电影列表
}

// 系统文档
export const doc = {
  andriod: '/v1/document/androidApi', // 安卓/ios调用说明
  systemDoc: '/v1/document/system_doc', // 系统文档
  systemDocDownload: '/v1/document/system_doc_download', // 系统文档下载
  sdkList: '/v1/sdk/sdk_list', // sdk列表
  sdkDownload: '/v1/sdk/sdk_download' // sdk下载
}

// 系统设置
  export const setting = {
    newsList: 'v1/setting/my_message', //消息列表
    readed: '/v1/setting/message_edit', // 消息标为已读
    delNews: '/v1/setting/message_del', // 删除消息
    personInfo: '/v1/setting/personal_data', //个人资料
    personEdit: '/v1/setting/personal_save', // 个人资料保存&修改密码
    suggest: '/v1/setting/feedback', // 意见反馈
    notice: '/v1/setting/notice', // 系统公告
    noticed: '/v1/setting/notice_edit', // 系统公告标为已读
    delNotice: '/v1/setting/notice_del', // 删除系统公告
    companySetting: '/v1/setting/company', // 公司信息设置
  }

// 账户
export const account = {
  login: 'account/login'
}

export default {
  BASE_URL,
  common,
  account,
  user,
  application,
  doc,
  films,
  setting
}
