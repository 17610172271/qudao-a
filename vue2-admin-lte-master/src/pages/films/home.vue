<template>
  <div class="p-lg appli-container">
    <sub-header :list="subNavList"></sub-header>
    <div class="page-container">
      <div class="page-toolbar clear">
        <div class="pull-left toolbar-candle">
          <div class="pull-left m-r-sm app-search relative"><i class="fa fa-search"></i><input type="search" placeholder="请输入应用名称" @keyup="getList" v-model="searchName"></div>
          <div class="pull-left m-r-sm" style="width:120px;">
            <el-select v-model="type" clearable placeholder="按类型">
              <el-option
                v-for="item in iptList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="pull-left m-r-sm" style="width:120px;">
            <el-select v-model="area" clearable placeholder="按地区">
              <el-option
                v-for="item in iptList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="pull-left m-r-sm" style="width:120px;">
            <el-select v-model="years" clearable placeholder="按年份">
              <el-option
                v-for="item in iptList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="pull-left m-r-sm" style="width:120px;">
            <el-select v-model="status" clearable placeholder="全部状态">
              <el-option
                v-for="item in iptList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="pull-right clear">
          <div class="pull-left m-r-sm"><select-checkbox :list="iptList" v-model="selectVal" style="width: 60px;"></select-checkbox></i></div>
          <div class="pull-left btn app-page" @click="delPage"><i class="fa fa-chevron-left"></i></div>
          <div class="pull-left btn app-page app-page-right" @click="addPage"><i class="fa fa-chevron-right"></i></div>
        </div>
      </div>
      <div class="app-content-container">
        <ul>
          <li class="col-lg-1 col-md-1 col-sm-1 col-xs-1 app-first-item text-center">ID</li>
          <li class="col-lg-1 col-md-1 col-sm-1 col-xs-1 app-name text-center">电影名称</li>
          <li class="col-lg-1 col-md-1 col-sm-1 col-xs-1 app-type text-center">海报</li>
          <li class="col-lg-1 col-md-1 col-sm-1 col-xs-1 app-status text-center">类型</li>
          <li class="col-lg-1 col-md-1 col-sm-1 col-xs-1 app-time text-center">首映时间</li>
          <li class="col-lg-1 col-md-1 col-sm-1 col-xs-1 app-remark text-center">所属地区</li>
          <li class="col-lg-1 col-md-1 col-sm-1 col-xs-1 app-candle text-center">支持语言</li>
          <li class="col-lg-1 col-md-1 col-sm-1 col-xs-1 app-candle text-center">电影时长</li>
          <li class="col-lg-1 col-md-1 col-sm-1 col-xs-1 app-candle text-center">状态</li>
          <li class="col-lg-1 col-md-1 col-sm-1 col-xs-1 app-candle text-center">导演</li>
          <li class="col-lg-2 col-md-2 col-sm-2 col-xs-2 app-candle text-center">主演</li>
        </ul>
        <ul v-for="item in data.rows">
          <li class="col-lg-1 col-lg-1 col-sm-1 col-xs-1 app-first-item text-center">{{item.id}}</li>
          <li class="col-lg-1 col-md-1 col-sm-1 col-xs-1 app-name text-center">{{item.title}}</li>
          <li class="col-lg-1 col-md-1 col-sm-1 col-xs-1 app-type text-center"></li>
          <li class="col-lg-1 col-md-1 col-sm-1 col-xs-1 app-status text-center">{{item.class}}</li>
          <li class="col-lg-1 col-md-1 col-sm-1 col-xs-1 app-time text-center">{{item.release_date}}</li>
          <li class="col-lg-1 col-md-1 col-sm-1 col-xs-1 app-remark text-center">{{item.zone}}</li>
          <li class="col-lg-1 col-md-1 col-sm-1 col-xs-1 app-candle text-center">汉语,英语</li>
          <li class="col-lg-1 col-md-1 col-sm-1 col-xs-1 app-candle text-center"></li>
          <li class="col-lg-1 col-md-1 col-sm-1 col-xs-1 app-candle text-center">{{item.status}}</li>
          <li class="col-lg-1 col-md-1 col-sm-1 col-xs-1 app-candle text-center">{{item.director}}</li>
          <li class="col-lg-2 col-md-2 col-sm-2 col-xs-2 app-candle text-center">{{item.actor}}</li>
        </ul>
      </div>
      <div class="footer clear m-t-md" v-if="data">
        <div class="pull-left news-record text-lg">
          显示{{offset + 1}}到{{offset + data.rows.length}}条消息，共<span class="text-blue">{{data.total}}</span>条记录
        </div>
        <div class="pull-right">
          <el-pagination
            background
            layout="prev, pager, next"
            :current-page.sync="page"
            :page-count="pages">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import SubHeader from '../common/subheader'
  import Selection from '@/components/Select'
  import SelectCheckbox from '@/components/SelectCheckbox'
  import api from '@/api'
  import format from '@/tools/format'
  export default {
    data: () => ({
      data: '',
      status: '',
      selectVal: [],
      selectedGroup: [],
      selectAll: false,
      calendarVal: '',
      searchName: null,
      type: null,
      area: null,
      years: null,
      status: null,
      calendarVal: null,
      iptList: [
        {label: '待审核', value: 1},
        {label: '已通过', value: 2},
        {label: '未通过', value: 3}
      ],
      subNavList: {
        parentNode: {
          name: '首页',
          router: {
            name: 'home'
          }
        },
        childNode: {
          name: '电影列表',
          desc: '页面功能性描述，简要解释该模块做什么用的',
          router: {
            name: 'films'
          }
        }
      },
      limit: 10,
      page: 1
    }),
    components: {
      SubHeader,
      Selection,
      SelectCheckbox
    },
    computed: {
      pages () {
        return this.data ? Math.ceil(this.data.total / this.limit) : 1
      },
      offset () {
        return (this.page - 1) * this.limit
      }
    },
    methods: {
      getList () {
        this.$http.get(api.films.list, {
          params: {
            offset: this.offset,
            limit: this.limit,
            token: this.$bus.token,
            title: this.title,
            class: this.class,
            zone: this.zone,
            release_data: this.release_data,
            status: this.status
          }
        }).then(res => {
          if (res.data.code === 1) {
            this.data = res.data.data
            // this.iptList = res.data.data.audit_status_options
          } else {
            this.data.rows = []
          }
        })
      },
      addPage () {
        if (this.page < this.pages) this.page += 1
      },
      delPage () {
        if (this.page > 1) this.page -= 1
      },
      format: format
    },
    created () {
      this.page = this.$route.query.page ? parseInt(this.$route.query.page) : 1
      this.getList()
    },
    watch: {
      selectVal (val) {
        console.log(val, 'aavvv')
      },
      selectedGroup (val) {
        if (val.length === this.data.rows.length) {
          this.selectAll = true
        }
      },
      selectAll (val) {
        if (val) {
          this.selectedGroup = []
          this.data.rows.map(val => {
            this.selectedGroup.push(val.id)
          })
        } else {
          this.selectedGroup = []
        }
      },
      calendarVal (val) {
        console.log(val)
      },
      page (val) {
        this.$router.replace({name: 'films', query: {page: val}})
        this.getList()
      },
      calendarVal (val) {
        this.getList()
      },
      status (val) {
        console.log(val)
        // this.getList()
      }
    }
  }
</script>
<style>
  .appli-container {
    min-width: 910px;
  }
  .page-container {
    margin-top: 24px;
    background-color: #fff;
    padding: 35px 25px;
  }
  .toolbar-candle i {
    margin-right: 4px;
    color: #fff;
    font-size: 18px;
    vertical-align: -1px;
  }
  .toolbar-candle .fa-refresh {
    margin-right: 0;
  }
  .app-search {
    width: 188px;
    height: 38px;
  }
  .app-search input {
    width: 100%;
    height: 100%;
    border: 1px solid #e8e8e8;
    padding: 10px 30px 10px 10px;
    border-radius: 2px;
  }
  .app-search i {
    position: absolute;
    right: 8px;
    top: 10px;
    font-size: 18px;
    color: #6C6C6C;
  }
  .app-calendar {
    background-color: #f4f4f4;
    border: 1px solid #DDDDDD;
    border-radius: 2px;
    font-size: 16px;
    overflow: hidden;
  }
  .app-page {
    background-color: #f4f4f4;
    border: 1px solid #ddd;
    border-radius: 2px;
    font-size: 16px;
  }
  .app-page:first-child {
    border-right: none;
  }
  .app-page:last-child {
    border-left: none;
  }
  .app-page-right {
    background-color: #28aafe;
    color: #fff;
  }
  .app-content-container {
    border: 1px solid #EAEAEA;
    margin-top: 20px;
  }
  .app-content-container > ul {
    border-bottom: 1px solid #EAEAEA;
    height: 70px;
    line-height: 70px;
  }
  .app-content-container > ul:first-child {
    height: 50px;
    line-height: 50px;
  }
  .app-content-container > ul:last-child {
    border: none;
  }
  .app-content-container > ul > li {
    border-right: 1px solid #EAEAEA;
    height: 100%;
    padding: 0;
    overflow: hidden;
  }
  .app-content-container > ul > li:last-child {
    border: none;
  }
  .app-first-item > div {
    width: 50%;
    text-align: center;
  }
  .app-first-item input {
    width: 18px;
    height: 18px;
    vertical-align: -4px;
  }
  .app-first-item > div:first-child {
    border-right: 1px solid #eaeaea;
  }
  .app-candle i {
    font-size: 20px;
  }
  .app-candle i:hover {
    color: #3691F5;
  }
  .app-remark.p-o-sm {
    padding-left: 10px;
    padding-right: 10px;
  }
  .app-title-calendar {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
  .news-record {
    line-height: 31px;
  }
</style>
