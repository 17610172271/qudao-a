<template>
  <div class="p-lg appli-container">
    <sub-header :list="subNavList"></sub-header>
    <div class="page-container">
      <div class="container-fluid company-infos">
        <div class="row">
          <div class="col-lg-6">
            <div class="row company-info-item m-b-md">
              <div class="col-lg-3 text-right">公司名称:</div>
              <div class="col-lg-9"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
            </div>
            <div class="row company-info-item m-b-md">
              <div class="col-lg-3 text-right">营业注册号:</div>
              <div class="col-lg-9"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
            </div>
            <div class="row company-info-item m-b-md">
              <div class="col-lg-3 text-right">营业执照:</div>
              <div class="col-lg-9"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
            </div>
            <div class="row company-info-item m-b-md">
              <div class="col-lg-3 text-right">法人:</div>
              <div class="col-lg-9"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
            </div>
            <div class="row company-info-item m-b-md">
              <div class="col-lg-3 text-right">组织机构代码:</div>
              <div class="col-lg-9"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
            </div>
            <div class="row company-info-item m-b-md">
              <div class="col-lg-3 text-right">公司类型:</div>
              <div class="col-lg-9"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
            </div>
            <div class="row company-info-item m-b-md">
              <div class="col-lg-3 text-right">注册地址:</div>
              <div class="col-lg-9"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
            </div>
            <div class="row company-info-item m-b-md">
              <div class="col-lg-3 text-right">营业地址:</div>
              <div class="col-lg-9"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
            </div>
            <div class="row company-info-item m-b-md">
              <div class="col-lg-3 text-right">收款人姓名:</div>
              <div class="col-lg-9"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
            </div>
            <div class="row company-info-item">
              <div class="col-lg-3 text-right">账号银行:</div>
              <div class="col-lg-9"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="row company-info-item m-b-md">
            </div>
            <div class="row company-info-item m-b-md">
              <div class="col-lg-3 text-right">联系人:</div>
              <div class="col-lg-9"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
            </div>
            <div class="row company-info-item m-b-md">
              <div class="col-lg-3 text-right">联系人电话:</div>
              <div class="col-lg-9"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
            </div>
            <div class="row company-info-item m-b-md">
              <div class="col-lg-3 text-right">公司固话:</div>
              <div class="col-lg-9"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
            </div>
            <div class="row company-info-item m-b-md">
              <div class="col-lg-3 text-right">纳税人识别号:</div>
              <div class="col-lg-9"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
            </div>
            <div class="row company-info-item m-b-md">
              <div class="col-lg-3 text-right">成立日期:</div>
              <div class="col-lg-9">
                <el-date-picker
                  v-model="companyDate"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </div>
            </div>
            <div class="row company-info-item m-b-md">
              <div class="col-lg-3 text-right">街道地址:</div>
              <div class="col-lg-9"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
            </div>
            <div class="row company-info-item m-b-md">
              <div class="col-lg-3 text-right">街道地址:</div>
              <div class="col-lg-9"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
            </div>
            <div class="row company-info-item m-b-md">
              <div class="col-lg-3 text-right">银行账号:</div>
              <div class="col-lg-9"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
            </div>
            <div class="row company-info-item">
              <div class="col-lg-3 text-right">开户行:</div>
              <div class="col-lg-9"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
            </div>
          </div>
        </div>
      </div>
      <div class="company-btns text-center">
        <button class="m-r-md text-white bg-blue1">保存</button>
        <button class="text-white bg-blue1">取消</button>
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
      subNavList: {
        parentNode: {
          name: '系统设置',
          router: {
            name: 'home'
          }
        },
        childNode: {
          name: '公司信息(代理商)',
          desc: '页面功能性描述，简要解释该模块做什么用的',
          router: {
            name: 'setting_company'
          }
        }
      }
    }),
    components: {
      SubHeader
    },
    created () {
    },
    watch: {
    }
  }
</script>
<style>
  .company-info-item {
    height: 40px;
    line-height: 40px;
  }
  .company-infos {
    margin-bottom: 80px;
  }
  .company-btns > button {
    padding: 12px 24px;
    font-size: 16px;
    border-radius: 5px;
  }
</style>

