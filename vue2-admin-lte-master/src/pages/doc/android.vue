<template>
	<div class="android-container">
    <div class="android-header text-xxxlg text-black p-v-md">android_API调用说明</div>
    <div class="android-content-container m-t-lg">
      <div class="sdk-api">
        <h3 class="text-xxlg">1.SDK API调用说明</h3>
        <p class="text-md m-b-lg">除注销和获取应用好友API没有UI交互外，调用一下SDK提供的API后，会弹出相应的界面，以完成后续的操作。</p>
        <h5 class="text-xlg">1.1登录/效验登陆态</h5>
        <p class="text-md">通过调用Tencent类的login函数发起登录/效验登录态</p>
        <p class="text-md">该API具有两个作用:</p>
        <p class="text-md">(1)如果开发者没有调用mTencent实例的setOpenId、setAccessToken API，则该API执行正常的登录操作；</p>
        <p class="text-md">(2)如果开发者先调用mTencent实例的setOpenId、setAccessToken API，则该API执行效验登录态的操作。如果登录态有效，则返回成功给应用，如果登录态失效，则会进入自动进入登录流程，将最新的登录态数据返回给应用。</p>
        <p class="text-md m-t-lg m-b-lg">建议开发者在每次应用启动时调用一次该API（先调用setOpenId、setAccessToken），以确保每次打开应用时用户都是有登录态的。</p>
        <p class="text-md m-b-md">调用登录API的示例代码如下：</p>
        <div class="p-md code-container m-b-lg">
          <img src="../../../static/img/code1.png" alt="">
        </div>
        <p class="text-md m-b-md">调用登录API的参数说明如下：</p>
        <div class="container code-container1">
          <div class="row">
            <div class="col-lg-2">参数</div>
            <div class="col-lg-10">说明</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import api from '@/api'
  export default {
    data: () => ({
      data: ''
    }),
    methods: {
      getData () {
        this.$http.get(api.doc.andriod, {
          params: {
            token: this.$bus.token,
            doc_name: ' ios_SDK_V3.2.2 完整包'
          }
        }).then(res => {
          console.log(res)
        })
      }
    },
    created () {
      this.getData()
    }
  }
</script>
<style>
  .android-container {
    padding: 10px 32px;
    color: #000;
  }
  .android-header {
    border-bottom: 1px solid #ddd;
  }
  .code-container1 {
    border: 1px solid #cecfcf;
    background-color: #f5f6f7;
  }
  .code-container1 > .row {
    border-bottom: 1px solid #cecfcf;
    height: 30px;
    line-height: 29px;
  }
  .code-container1 > .row:last-child {
    border: none;
  }
  .code-container1 > .row > .col-lg-2 {
    border-right: 1px solid #cecfcf;
  }
</style>
