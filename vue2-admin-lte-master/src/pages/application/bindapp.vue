<template>
	<div class="p-lg appli-container">
    <sub-header :list="subNavList"></sub-header>
    <div class="appbind-container m-t-md">
      <div class="col-lg-7 col-md-7 p-r-lg">
        <div class="bg-white">
          <div class="border-t p-t-md p-l-md p-b-sm text-xlg border-b">基本信息</div>
          <div class="appbind-basicinfo p-lg">
            <div class="app-type clear">
              <span class="col-lg-2 col-md-3 col-sm-2 col-xs-3 p-n"><span class="text-red text-sm fa fa-asterisk"></span> 应用类别:</span>
              <div class="col-lg-10 col-md-9 col-sm-10 col-xs-9">
                <el-radio v-model="appType" :label="1">APP应用</el-radio>
                <el-radio v-model="appType" :label="2">WEB网站</el-radio>
              </div>
            </div>
            <div class="m-b-md clear">
              <span class="text-lg col-lg-2 col-md-3 col-sm-2 col-xs-3"><span class="text-red text-sm fa fa-asterisk"></span> 网站域名:</span>
              <div class="col-lg-10 col-md-9 col-sm-10 col-xs-9"><el-input placeholder="请输入网站域名" v-model="appUrl" class="inline"></el-input></div>
            </div>
            <div class="m-b-md clear">
              <span class="text-lg col-lg-2 col-md-3 col-sm-2 col-xs-3"><span class="text-red text-sm fa fa-asterisk"></span> 网站名称:</span>
              <div class="col-lg-10 col-md-9 col-sm-10 col-xs-9"><el-input placeholder="请输入网站名称" v-model="appName" class="inline"></el-input></div>
            </div>
            <div class="m-b-md clear">
              <span class="text-lg col-lg-2 col-md-3 col-sm-2 col-xs-3"><span class="text-red text-sm fa fa-asterisk"></span> 应用行业:</span>
              <div class="col-lg-10 col-md-9 col-sm-10 col-xs-9">
                <el-select v-model="appIndustry" placeholder="请选择">
                  <el-option
                    v-for="(item, index) in industryOptions"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="m-b-md clear">
              <span class="text-lg col-lg-2 col-md-3 col-sm-2 col-xs-3"><span class="text-red text-sm fa fa-asterisk"></span> 应用简介:</span>
              <div class="col-lg-10 col-md-9 col-sm-10 col-xs-9">
                <el-input placeholder="请输入应用介绍" v-model="appIntroduce" class="inline" type="textarea" rows="4"></el-input>
              </div>
            </div>
            <div class="m-b-md clear">
              <span class="text-lg col-lg-2 col-md-3 col-sm-2 col-xs-3 p-n">年龄分布:</span>
              <div class="p-l-15 p-r-15 col-lg-10 col-md-9 col-sm-10 col-xs-9 p-n">
                <div class="clear p-12 border">
                  <div class="col-lg-2 col-md-3 col-sm-2 col-xs-3 p-n"><el-checkbox v-model="checked1">全选</el-checkbox></div>
                  <div class="col-lg-10 col-md-9 col-sm-10 col-xs-9">
                    <el-checkbox-group v-model="checkList1">
                      <el-checkbox :label="item" v-for="item in years"></el-checkbox>
                    </el-checkbox-group>
                  </div>
                </div>
              </div>
            </div>
            <div class="m-b-md clear">
              <span class="text-lg col-lg-2 col-md-3 col-sm-2 col-xs-3 p-n">教育背景:</span>
              <div class="p-l-15 p-r-15 col-lg-10 col-md-9 col-sm-10 col-xs-9 p-n">
                <div class="clear p-12 border">
                  <div class="col-lg-2 col-md-3 col-sm-2 col-xs-3 p-n"><el-checkbox v-model="checked2">全选</el-checkbox></div>
                  <div class="col-lg-10 col-md-9 col-sm-10 col-xs-9">
                    <el-checkbox-group v-model="checkList2">
                      <el-checkbox :label="item" v-for="item in education"></el-checkbox>
                    </el-checkbox-group>
                  </div>
                </div>
              </div>
            </div>
            <div class="m-b-md clear">
              <span class="text-lg col-lg-2 col-md-3 col-sm-2 col-xs-3 p-n">职业分布:</span>
              <div class="p-l-15 p-r-15 col-lg-10 col-md-9 col-sm-10 col-xs-9 p-n">
                <div class="clear p-12 border">
                  <div class="col-lg-2 col-md-3 col-sm-2 col-xs-3 p-n"><el-checkbox v-model="checked3">全选</el-checkbox></div>
                  <div class="col-lg-10 col-md-9 col-sm-10 col-xs-9">
                    <el-checkbox-group v-model="checkList3">
                      <el-checkbox :label="item" v-for="item in career"></el-checkbox>
                    </el-checkbox-group>
                  </div>
                </div>
              </div>
            </div>
            <div class="m-b-lg clear">
              <span class="text-lg col-lg-2 col-md-3 col-sm-2 col-xs-3 p-n">兴趣分布:</span>
              <div class="p-l-15 p-r-15 col-lg-10 col-md-9 col-sm-10 col-xs-9 p-n">
                <div class="clear p-12 border">
                  <div class="col-lg-2 col-md-3 col-sm-2 col-xs-3 p-n"><el-checkbox v-model="checked4">全选</el-checkbox></div>
                  <div class="col-lg-10 col-md-9 col-sm-10 col-xs-9">
                    <el-checkbox-group v-model="checkList4">
                      <el-checkbox :label="item" v-for="item in interest"></el-checkbox>
                    </el-checkbox-group>
                  </div>
                </div>
              </div>
            </div>
            <div class="appbind-submit-container text-center hidden-xs hidden-sm">
              <button class="m-r-md bg-blue1 btn text-white" @click="submit">保存</button>
              <button class="bg-gray btn text-white" @click="goBack">取消</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-5 col-md-5 p-n">
        <div class="border-t bg-white m-b-lg">
          <div class="border-t p-t-md p-l-md p-b-sm text-xlg border-b">网站 logo</div>
          <div class="appbind-right-item">
            <div class="appbind-right-item-img col-lg-4 col-md-4 col-sm-4 col-xs-4" v-if="logo.length>0"><img :src="logo[0].url" alt="" class="appbind-uploadimg"></div>
            <div class="appbind-right-item-upload col-lg-8 col-md-8 col-sm-8 col-xs-8">
              <div class="appbind-img-upload p-l-sm over-omit">
                {{logo[0]?logo[0].name:''}}
                <el-upload
                  action="http://localhost:8080/v1/common/upload"
                  :data="{token: $bus.token}"
                  :headers="header"
                  :limit="1"
                  :file-list="logo"
                  :on-success="handleChange"
                  list-type="text">
                  <span class="text-white">上传文件</span>
                </el-upload>
              </div>
              <div class="appbind-upload-tips">请上传大小不能高于1M的图片，并保持该宽高比大于118px*168px，分辨率最低为72dpi以上的图片</div>
            </div>
          </div>
        </div>
        <div class="border-t bg-white m-b-lg">
          <div class="border-t p-t-md p-l-md p-b-sm text-xlg border-b">版权证明</div>
          <div class="appbind-right-item">
            <div class="appbind-right-item-img col-lg-4 col-md-4 col-sm-4 col-xs-4" v-if="copyright.length>0"><img :src="copyright[0].url" alt="" class="appbind-uploadimg"></div>
            <div class="appbind-right-item-upload col-lg-8 col-md-8 col-sm-8 col-xs-8">
              <div class="appbind-img-upload p-l-sm over-omit">
                {{copyright[0]?copyright[0].name:''}}
                <el-upload
                  action="http://localhost:8080/v1/common/upload"
                  :data="{token: $bus.token}"
                  :headers="header"
                  :limit="1"
                  :file-list="copyright"
                  :on-success="handleChange1"
                  list-type="text">
                  <span class="text-white">上传文件</span>
                </el-upload>
              </div>
              <div class="appbind-upload-tips">请上传大小不能高于1M的图片，并保持该宽高比大于118px*168px，分辨率最低为72dpi以上的图片</div>
            </div>
          </div>
        </div>
        <div class="border-t bg-white m-b-lg">
          <div class="border-t p-t-md p-l-md p-b-sm text-xlg border-b">性别分布</div>
          <div class="appbind-right-item appbind-sex-item">
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 sex-ratio-btn text-center">
              <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <div class="sex-btn-top" @click="sexAdd"><i class="fa fa-chevron-up"></i></div>
                <div class="sex-btn-bottom" @click="sexReduce"><i class="fa fa-chevron-down"></i></div>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">{{sexRatio}}%</div>
            </div>
            <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 sex-text">男</div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><el-slider v-model="sexRatio"></el-slider></div>
            <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 sex-text">女</div>
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 sex-ratio-btn text-center">
              <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">{{100-sexRatio}}%</div>
              <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <div class="sex-btn-top" @click="sexReduce"><i class="fa fa-chevron-up"></i></div>
                <div class="sex-btn-bottom" @click="sexAdd"><i class="fa fa-chevron-down"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="appbind-submit-container text-center hidden-md hidden-lg p-b-lg">
        <button class="m-r-md bg-blue1 btn text-white" @click="submit">保存</button>
        <button class="bg-gray btn text-white" @click="goBack">取消</button>
      </div>
    </div>
  </div>
</template>
<script>
  import SubHeader from '../common/subheader'
  import api from '@/api'
  export default {
    data: () => ({
      appType: null,
      appUrl: 'http://',
      appName: '',
      appIndustry: '',
      appIntroduce: '',
      checked1: false,
      checkList1: [],
      checked2: false,
      checkList2: [],
      checked3: false,
      checkList3: [],
      checked4: false,
      checkList4: [],
      fileList: [],
      sexRatio: 50,
      years: [],
      education: [],
      career: [],
      interest: [],
      logo: [],
      copyright: [],
      header: {ContentType: 'application/x-www-form-urlencoded'},
      subNavList: {
        parentNode: {
          name: '应用管理',
          router: {
            name: 'application_list'
          }
        },
        childNode: {
          name: '应用绑定',
          desc: '页面功能性描述，简要解释该模块做什么用的',
          router: {
            name: 'application_bindapp'
          }
        }
      },
      industryOptions: []
    }),
    computed: {
      womanRatio () {
        return 100 - this.sexRatio
      }
    },
    components: {
      SubHeader
    },
    methods: {
      getData () {
        this.$http.get(api.application.infoOptions, {
          params: {
            token: this.$bus.token
          }
        }).then(res => {
          this.years = res.data.data.years
          this.education = res.data.data.education
          this.career = res.data.data.career
          this.interest = res.data.data.interest
        })
        this.$http.get(api.application.industryOptions, {
          params: {
            token: this.$bus.token
          }
        }).then(res => {
          this.industryOptions = res.data.data
        })
      },
      submit () {
        this.$http.post(api.application.bind + '?token=' + this.$bus.token, {
          apptype: this.appType,
          weburl: this.appUrl,
          webname: this.appName,
          industry: this.appIndustry,
          weblogo: this.logoUrl,
          appdesc: this.appIntroduce,
          is_agree: 1,
          certificate: this.copyrightUrl,
          years: this.checkList1.length > 0 ? this.checkList1 : null,
          education: this.checkList2.length > 0 ? this.checkList2 : null,
          career: this.checkList3.length > 0 ? this.checkList3 : null,
          interest: this.checkList4.length > 0 ? this.checkList4 : null,
          man: this.sexRatio,
          woman: this.womanRatio
        }).then(res => {
          if (res.data.code === 1) {
            this.$router.push({name: 'application_list'})
          }
        })
      },
      goBack () {
        this.$router.go(-1)
      },
      handleChange (respones, file, fileList) {
        this.logo = fileList.slice(-3)
        this.logoUrl = respones.data.url
      },
      handleChange1 (respones,file, fileList) {
        this.copyright = fileList.slice(-3)
        this.copyrightUrl = respones.data.url
      },
      sexAdd () {
        if (this.sexRatio < 100) this.sexRatio += 1
      },
      sexReduce () {
        if (this.sexRatio) this.sexRatio -= 1
      }
    },
    created () {
      this.getData()
    },
    watch: {
      womanRatio (val) {
      },
      checked1 (val) {
        if (val) {
          this.checkList1 = this.years
        } else {
          this.checkList1 = []
        }
      },
      checked2 (val) {
        if (val) {
          this.checkList2 = this.education
        } else {
          this.checkList2 = []
        }
      },
      checked3 (val) {
        if (val) {
          this.checkList3 = this.career
        } else {
          this.checkList3 = []
        }
      },
      checked4 (val) {
        if (val) {
          this.checkList4 = this.interest
        } else {
          this.checkList4 = []
        }
      }
    }
  }
</script>
<style scoped>
  .appli-container {
    min-width: inherit;
  }
  .border-t {
    border-top: 4px solid #3691F5;
  }
  .border-b {
    border-bottom: 1px solid #EBEEF0;
  }
  .app-type {
    margin-bottom: 25px;
  }
  .el-input-group__prepend {
    background-color: #fff;
    color: #333;
    border: none;
    border-radius: 0;
    padding: 0;
  }
  .appbind-basicinfo > div >span {
    padding: 9px 0;
    white-space: nowrap;
  }
  .appbind-basicinfo .p-n {
    padding: 0;
  }
  .appbind-basicinfo .el-checkbox {
    margin-left: 0px;
    margin-right: 20px;
    min-width: 85px;
  }
  .appbind-basicinfo .p-l-15 {
    padding-left: 15px;
  }
  .p-12 {
    padding: 12px;
  }
  .appbind-basicinfo .p-r-15 {
    padding-right: 15px;
  }
  .appbind-submit-container .btn {
    padding: 13px 35px;
    font-size: 16px;
  }
  .appbind-right-item {
    padding: 24px;
    min-height: 220px;
  }
  .appbind-sex-item {
    min-height: 130px;
    padding: 45px 24px;
  }
  .appbind-right-item-img {
    border: 1px solid #ABABAB;
    padding: 5px;
  }
  .appbind-img-upload {
    width: 100%;
    height: 39px;
    line-height: 39px;
    border: 1px solid #3691F5;
    padding-right: 80px;
    position: relative;
  }
  .appbind-img-upload >div {
    height: 37px;
    width: 80px;
    line-height: 37px;
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 10px;
    background-color: #3691F5;
    color: #fff;
  }
  .appbind-upload-tips {
    margin-top: 40px;
    color: #999;
  }
  .sex-ratio-btn {
    height: 40px;
    padding: 0;
    border: 1px solid #D6D6D6;
  }
  .sex-ratio-btn > div{
    padding: 0;
  }
  .sex-ratio-btn > .col-lg-8 {
    height: 100%;
    line-height: 40px;
  }
  .sex-ratio-btn > .col-lg-4 > div {
    line-height: 19px;
    cursor: pointer;
    color: #fff;
    background-color: #3691F5;
  }
  .sex-ratio-btn > .col-lg-4 > div i {
    vertical-align: 1px;
  }
  .sex-btn-top {
    border-bottom: 1px solid #fff;
  }
  .sex-text {
    height: 40px;
    line-height: 40px;
    padding: 0;
    text-align: center;
  }
  .appbind-uploadimg {
    width: 100%;
  }
  @media (max-width: 800px) {
    .appli-container {
      padding: 5px;
    }
    .appbind-container > .p-r-lg {
      padding: 0;
    }
    .el-radio+.el-radio {
      margin-left: 10px;
    }
    .appbind-sex-item {
      padding: 45px 10px;
    }
  }
</style>
