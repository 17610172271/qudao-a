<template>
  <div class="p-lg appli-container">
    <sub-header :list="subNavList"></sub-header>
    <div class="page-container">
      <div class="page-toolbar clear">
        <div class="pull-left toolbar-candle">
          <div class="app-del btn bg-red1 text-white"><i class="fa fa-minus-square"></i>删除</div>
          <div class="app-refresh btn bg-gray1" @click="getList"><i class="fa fa-refresh"></i></div>
        </div>
        <div class="pull-right clear">
          <div class="pull-left m-r-sm app-search relative"><i class="fa fa-search"></i><input type="search" placeholder="请输入应用名称" @keyup="getList" v-model="searchName"></div>
          <div class="pull-left m-r-sm relative">
            <el-date-picker
              v-model="calendarVal"
              type="date"
              style="width: 140px;"
              value-format="yyyy-MM-dd"
              placeholder="上传时间">
            </el-date-picker>
          </div>
          <div class="pull-left m-r-sm"><select-checkbox :list="iptList" v-model="selectVal" style="width: 60px;"></select-checkbox></i></div>
          <div class="pull-left btn app-page" @click="delPage"><i class="fa fa-chevron-left"></i></div>
          <div class="pull-left btn app-page app-page-right" @click="addPage"><i class="fa fa-chevron-right"></i></div>
        </div>
      </div>
      <div class="app-content-container">
        <ul>
          <li class="col-lg-1 col-md-1 col-sm-1 col-xs-1 clear app-first-item text-center">序号</li>
          <li class="col-lg-1 col-md-1 col-sm-1 col-xs-1 app-name text-center">文档类型</li>
          <li class="col-lg-2 col-md-2 col-sm-2 col-xs-2 app-type text-center">文档名称</li>
          <li class="col-lg-1 col-md-1 col-sm-1 col-xs-1 app-status text-center">上传人</li>
          <li class="col-lg-2 col-md-2 col-sm-2 col-xs-2 app-time text-center">上传时间</li>
          <li class="col-lg-2 col-md-2 col-sm-2 col-xs-2 app-remark text-center">备注</li>
          <li class="col-lg-3 col-md-3 col-sm-3 col-xs-3 app-candle text-center">操作</li>
        </ul>
        <ul v-for="item in data.rows">
          <li class="col-lg-1 col-lg-1 col-sm-1 col-xs-1 clear app-first-item text-center">{{item.id}}</li>
          <li class="col-lg-1 col-md-1 col-sm-1 col-xs-1 app-name text-center">{{item.doc_type}}</li>
          <li class="col-lg-2 col-md-2 col-sm-2 col-xs-2 app-type text-center">{{item.doc_name}}</li>
          <li class="col-lg-1 col-md-1 col-sm-1 col-xs-1 app-status text-center">{{item.nickname}}</li>
          <li class="col-lg-2 col-md-2 col-sm-2 col-xs-2 app-time text-center">{{format(item.upload_time)}}</li>
          <li class="col-lg-2 col-md-2 col-sm-2 col-xs-2 app-remark text-center">{{item.doc_desc}}</li>
          <li class="col-lg-3 col-md-3 col-sm-3 col-xs-3 app-candle text-center">
            <a href="javascript:;">编辑</a>
            <a href="javascript:;">下载</a>
            <a href="javascript:;">重命名</a>
            <a href="javascript:;">详情</a>
          </li>
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
      iptList: [
        {name: '待审核', id: 1},
        {name: '已通过', id: 2},
        {name: '未通过', id: 3}
      ],
      subNavList: {
        parentNode: {
          name: '系统文档',
          router: {
            name: 'doc_android'
          }
        },
        childNode: {
          name: '系统文档',
          desc: '页面功能性描述，简要解释该模块做什么用的',
          router: {
            name: 'doc_system'
          }
        }
      },
      limit: 10,
      doc_name: '',
      upload_time: '',
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
        this.$http.get(api.doc.systemDoc, {
          params: {
            offset: this.offset,
            limit: this.limit,
            token: this.$bus.token,
            upload_time: this.upload_time,
            doc_name: this.doc_name
          }
        }).then(res => {
          if (res.data.code === 1) {
            this.data = res.data.data
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
        this.$router.replace({name: 'application_list', query: {page: val}})
        this.getList()
      },
      calendarVal (val) {
        this.getList()
      },
      status (val) {
        console.log(val)
        this.getList()
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
