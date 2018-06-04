<template>
  <div class="p-lg appli-container">
    <sub-header :list="subNavList"></sub-header>
    <div class="page-container bg-white m-t-md p-md news-tab relative">
      <div class="news-toolbar clear">
        <el-button type="danger" class="pull-left" @click="delNews(selectGroup)">删除</el-button>
        <el-button type="primary" class="pull-left m-r-sm" @click="markReaded">标记已读</el-button>
        <div class="pull-left m-r-sm app-search relative"><i class="fa fa-search"></i><input type="search" placeholder="请输入应用名称" @keyup="getList" v-model="searchName"></div>
        <div class="pull-left m-r-sm">
          <el-select v-model="message_status" clearable placeholder="全部状态" style="width:120px;">
            <el-option
              v-for="item in iptList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </div>
        <div class="pull-left m-r-sm btn app-calendar relative">
          <i class="fa fa-calendar"></i>
          <el-date-picker
            v-model="receive_date"
            type="date"
            class="app-title-calendar"
            value-format="yyyy-MM-dd"
            placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="pull-left btn app-page" @click="delPage"><i class="fa fa-chevron-left"></i></div>
        <div class="pull-left btn app-page app-page-right" @click="addPage"><i class="fa fa-chevron-right"></i></div>
      </div>
      <el-tabs v-model="tabVal" type="card">
        <el-tab-pane label="消息通知" name="news">
          <div class="container-fluid">
            <ul class="row news-title">
              <li class="col-lg-1 text-left news-checkbox"><input type="checkbox" v-model="selectAll">全选</li>
              <li class="col-lg-7 text-center">标题</li>
              <li class="col-lg-2 text-center">时间</li>
              <li class="col-lg-2 text-center">操作</li>
            </ul>
            <ul class="row news-list" v-for="item in data.rows">
              <li class="col-lg-1 text-left news-checkbox"><input type="checkbox" v-model="selectGroup" :value="item.id"></li>
              <li class="col-lg-7 over-omit p-l-lg">{{item.title}}</li>
              <li class="col-lg-2 text-center news-time over-hidden">{{format(item.update_time)}}</li>
              <li class="col-lg-2 text-center"><i class="fa fa-trash-o btn text-xxlg" @click="delNews([item.id])"></i></li>
            </ul>
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
        </el-tab-pane>
        <el-tab-pane label="系统公告" name="notice"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
  import SubHeader from '../common/subheader'
  import format from '@/tools/format'
  import api from '@/api'
  export default {
    data: () => ({
      data: '',
      tabVal: 'news',
      page: 1,
      searchName: null,
      message_status: null,
      receive_date: null,
      limit: 3,
      selectGroup: [],
      selectAll: false,
      iptList: [
        {name: '已读', id: 1},
        {name: '未读', id: 2}
      ],
      subNavList: {
        parentNode: {
          name: '系统设置',
          router: {
            name: 'home'
          }
        },
        childNode: {
          name: '我的消息',
          desc: '页面功能性描述，简要解释该模块做什么用的',
          router: {
            name: 'setting_news'
          }
        }
      }
    }),
    components: {
      SubHeader
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
      format: format,
      getList () {
        this.$http.get(api.setting.newsList, {
          params: {
            offset: this.offset,
            limit: this.limit,
            message_status: this.message_status,
            receive_date: this.receive_date,
            searchName: this.searchName,
            token: this.$bus.token
          }
        }).then(res => {
          if (res.data.code === 1) {
            this.data = res.data.data
          }
        })
      },
      delNews(id) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.post(api.setting.delNews, {
            ids: id,
            token: this.$bus.token
          }).then(res => {
            if (res.data.code === 1) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
              this.getList()
            }
          })
        }).catch(() => {
          console.log('取消删除')
        })
      },
      markReaded () {
        this.$http.post(api.setting.readed, {
          token: this.$bus.token,
          ids: this.selectGroup
        }).then(res => {
          if (res.data.code === 1) {
            this.$message({
              type: 'success',
              message: '已标记为已读!'
            })
          }
        })
      },
      delPage () {
        if (this.page > 1) this.page -= 1
      },
      addPage () {
        if (this.page < this.pages) this.page += 1
      }
    },
    created () {
      this.getList()
    },
    watch: {
      selectGroup (val) {
        console.log(val)
      },
      receive_date (val) {
        this.getList()
      },
      message_status (val) {
        this.getList()
      },
      page (val) {
        this.$router.replace({name: 'setting_news', query: {page: val}})
        this.getList()
      },
      selectAll (val) {
        if (val) {
          this.selectGroup = []
          this.data.rows.map(val =>　{
            this.selectGroup.push(val.id)
          })
        } else {
          this.selectGroup = []
        }
      }
    }
  }
</script>
<style scoped>
  .page-container {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .news-toolbar {
    position: absolute;
    right: 20px;
    top: 26px;
    height: 40px;
    line-height: 40px;
    z-index: 8;
  }
  .news-tab .el-tabs__header {
    margin: 0;
  }
  .news-tab .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
    background-color: #f5f5f5;
    border-bottom-color: #f5f5f5;
  }
  .news-title {
    background-color: #F5F5F5;
  }
  .news-title > li {
    height: 52px;
    line-height: 52px;
    color: #37444E;
    font-size: 16px;
    border-bottom: 2px solid #EAEAEA;
  }
  .news-list > li {
    height: 68px;
    line-height: 68px;
    color: #545454;
    font-size: 16px;
    border-bottom: 1px solid #EAEAEA;
  }
  .app-calendar {
    background-color: #f4f4f4;
    border: 1px solid #DDDDDD;
    border-radius: 2px;
    font-size: 16px;
    overflow: hidden;
  }
  .app-title-calendar {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
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
  .news-checkbox > input {
    width: 14px;
    height: 14px;
    vertical-align: -2px;
  }
</style>

