<template>
  <div class="p-lg appli-container">
    <sub-header :list="subNavList"></sub-header>
    <div class="page-container relative bg-white m-t-md">
      <ul class="person-container">
        <li class="clear m-b-lg">
          <div class="pull-left person-name">用户编码:</div>
          <div class="pull-left text-dark">admin</div>
        </li>
        <li class="clear m-b-lg">
          <div class="pull-left person-name">用户登录名:</div>
          <div class="pull-left text-dark">admin</div>
        </li>
        <li class="clear m-b-lg">
          <div class="pull-left person-name">所属角色:</div>
          <div class="pull-left text-dark">系统管理员</div>
        </li>
        <li class="clear m-b-lg">
          <div class="pull-left person-name">出生日期:</div>
          <div class="pull-left text-dark">
            <el-date-picker
              v-model="birthday"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </div>
        </li>
        <li class="clear m-b-lg">
          <div class="pull-left person-name">固定电话:</div>
          <div class="pull-left text-dark">
            <el-input style="width: 90px;"></el-input>
            -
            <el-input style="width: 320px;"></el-input>
          </div>
        </li>
        <li class="clear m-b-lg">
          <div class="pull-left person-name">电子邮件:</div>
          <div class="pull-left text-dark person-ipt"><el-input placeholder="请输入内容"></el-input></div>
        </li>
        <li class="clear m-b-lg">
          <div class="pull-left person-name">住址邮编:</div>
          <div class="pull-left text-dark person-ipt"><el-input placeholder="请输入内容"></el-input></div>
        </li>
        <li class="clear m-b-lg">
          <div class="pull-left person-name">用户姓名:</div>
          <div class="pull-left text-dark person-ipt"><el-input placeholder="请输入内容"></el-input></div>
        </li>
        <li class="clear m-b-lg">
          <div class="pull-left person-name">性别:</div>
          <div class="pull-left text-dark person-ipt">
            <el-radio v-model="sex" label="1">男</el-radio>
            <el-radio v-model="sex" label="2">女</el-radio>
          </div>
        </li>
        <li class="clear m-b-lg">
          <div class="pull-left person-name">所属域:</div>
          <div class="pull-left text-dark"><el-input placeholder="请输入内容"></el-input></div>
        </li>
        <li class="clear m-b-lg">
          <div class="pull-left person-name">手机号码:</div>
          <div class="pull-left text-dark person-ipt"><el-input placeholder="请输入内容"></el-input></div>
        </li>
        <li class="clear m-b-lg">
          <div class="pull-left person-name">住址:</div>
          <div class="pull-left text-dark person-ipt"><el-input placeholder="请输入内容"></el-input></div>
        </li>
        
      </ul>
      <div class="company-btns text-center">
        <button class="m-r-md text-white bg-blue1">保存</button>
        <button class="text-white bg-bl person-iptue1">取消</button>
      </div>
      <div class="person-avatar-container text-center">
        
        <el-upload
          action="http://localhost:8080/v1/common/upload"
          :data="{token: $bus.token}"
          :headers="header"
          :limit="1"
          :file-list="avatar"
          :on-success="handleChange"
          list-type="text">
          <div class="person-avatar"><img src="" alt="" class="appbind-uploadimg" width="100%" height="100%"></div>
          <div class="text-muted text-md m-t-sm">图片大小不能超过200kb</div>
          <a href="javascript:;" class="edit-avatar">修改头像</a>
        </el-upload>
        
      </div>
    </div>
  </div>
</template>
<script>
  import SubHeader from '../common/subheader'
  import api from '@/api'
  export default {
    data: () => ({
      input: '',
      companyDate: '',
      birthday: '',
      sex: null,
      avatar: [],
      avatarUrl: '',
      header: {ContentType: 'application/x-www-form-urlencoded'},
      subNavList: {
        parentNode: {
          name: '系统设置',
          router: {
            name: 'home'
          }
        },
        childNode: {
          name: '个人资料',
          desc: '页面功能性描述，简要解释该模块做什么用的',
          router: {
            name: 'setting_person'
          }
        }
      }
    }),
    components: {
      SubHeader
    },
    methods: {
      handleChange (respones, file, fileList) {
        this.avatar = fileList.slice(-3)
        // this.avatarUrl = respones.data.url
      }
    },
    created () {
    },
    watch: {
    }
  }
</script>
<style>
  .person-container {
    padding-left: 268px;
  }
  .page-container {
    padding-top: 60px;
    padding-bottom: 30px;
  }
  .company-btns > button {
    padding: 12px 24px;
    font-size: 16px;
    border-radius: 5px;
  }
  .person-name {
    min-width: 85px;
    text-align: right;
    font-size: 16px;
    color: #767575;
    margin-right: 20px;
  }
  .person-container > li > div {
    height: 40px;
    line-height: 40px;
  }
  .person-avatar-container {
    position: absolute;
    top: 60px;
    left: 70px;
  }
  .person-avatar {
    width: 128px;
    height: 185px;
    border: 1px solid #000;
    padding: 8px;
    margin: 0 auto;
  }
  .edit-avatar {
    color: #169BD5;
    font-size: 16px;
    text-decoration: underline;
    margin-top: 26px;
    display: inline-block;
  }
  .person-ipt {
    width: 100%;
    max-width: 424px;
  }
</style>

