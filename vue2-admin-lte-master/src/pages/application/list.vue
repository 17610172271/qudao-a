<template>
	<div class="p-lg appli-container">
		<sub-header :list="subNavList"></sub-header>
		<div class="page-container">
			<div class="page-toolbar clear">
				<div class="pull-left toolbar-candle">
					<router-link :to="{name: 'application_bindapp'}" class="app-add btn bg-blue1 text-white"><i class="fa fa-plus-square"></i>添加</router-link>
					<!-- <div class="app-del btn bg-red1 text-white"><i class="fa fa-minus-square"></i>删除</div> -->
					<div class="app-refresh btn bg-gray1" @click="getList"><i class="fa fa-refresh"></i></div>
				</div>
				<div class="pull-right clear">
					<div class="pull-left m-r-sm app-search relative"><i class="fa fa-search"></i><input type="search" placeholder="请输入应用名称" @keyup="getList" v-model="searchName"></div>
					<div class="pull-left m-r-sm">
            <el-select v-model="status" clearable placeholder="全部状态" style="width:120px;">
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
				      v-model="calendarVal"
				      type="date"
				      class="app-title-calendar"
				      value-format="yyyy-MM-dd"
				      placeholder="选择日期">
				    </el-date-picker>
					</div>
					<div class="pull-left m-r-sm"><select-checkbox :list="showList" v-model="selectVal" style="width: 60px;"></select-checkbox></i></div>
					<div class="pull-left btn app-page" @click="delPage"><i class="fa fa-chevron-left"></i></div>
					<div class="pull-left btn app-page app-page-right" @click="addPage"><i class="fa fa-chevron-right"></i></div>
				</div>
			</div>
			<div class="app-content-container">
				<ul>
					<li class="col-lg-1 col-md-1 col-sm-1 col-xs-1 clear app-first-item" v-if="selectVal.indexOf('ID')!=-1"><div class="pull-left"><input type="checkbox" v-model="selectAll"></div><div class="pull-left">ID</div></li>
					<li class="col-lg-2 col-md-2 col-sm-2 col-xs-2 app-name text-center" v-if="selectVal.indexOf('应用名称')!=-1">应用名称</li>
					<li class="col-lg-1 col-md-1 col-sm-1 col-xs-1 app-type text-center" v-if="selectVal.indexOf('应用类别')!=-1">应用类别</li>
					<li class="col-lg-1 col-md-1 col-sm-1 col-xs-1 app-status text-center" v-if="selectVal.indexOf('状态')!=-1">状态</li>
					<li class="col-lg-2 col-md-2 col-sm-2 col-xs-2 app-time text-center" v-if="selectVal.indexOf('绑定时间')!=-1">绑定时间</li>
					<li class="col-lg-3 col-md-3 col-sm-3 col-xs-3 app-remark p-o-sm" v-if="selectVal.indexOf('备注')!=-1">备注</li>
					<li class="col-lg-2 col-md-2 col-sm-2 col-xs-2 app-candle text-center" v-if="selectVal.indexOf('操作')!=-1">操作</li>
				</ul>
				<ul v-for="item in data.rows">
					<li class="col-lg-1 col-lg-1 col-sm-1 col-xs-1 clear app-first-item" v-if="selectVal.indexOf('ID')!=-1"><div class="pull-left"><input type="checkbox" v-model="selectedGroup" :value="item.id"></div><div class="pull-left">{{item.id}}</div></li>
					<li class="col-lg-2 col-md-2 col-sm-2 col-xs-2 app-name text-center" v-if="selectVal.indexOf('应用名称')!=-1">{{item.webname}}</li>
					<li class="col-lg-1 col-md-1 col-sm-1 col-xs-1 app-type text-center" v-if="selectVal.indexOf('应用类别')!=-1">{{item.apptype}}</li>
					<li class="col-lg-1 col-md-1 col-sm-1 col-xs-1 app-status text-center" :class="{'text-orange': item.audit_status=='未审核', 'text-green': item.audit_status=='已通过', 'text-red': item.audit_status=='未通过'}" v-if="selectVal.indexOf('状态')!=-1">{{item.audit_status}}</li>
					<li class="col-lg-2 col-md-2 col-sm-2 col-xs-2 app-time text-center" v-if="selectVal.indexOf('绑定时间')!=-1">{{format(item.bindtime)}}</li>
					<li class="col-lg-3 col-md-3 col-sm-3 col-xs-3 app-remark p-o-sm" v-if="selectVal.indexOf('备注')!=-1">{{item.audit_desc}}</li>
					<li class="col-lg-2 col-md-2 col-sm-2 col-xs-2 app-candle text-center" v-if="selectVal.indexOf('操作')!=-1">
						<i class="fa fa-edit btn"></i>
						<!-- <i class="fa fa-trash-o btn"></i> -->
						<i class="fa fa-search-plus btn"></i>
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
      status: '',
      selectVal: ['ID', '应用名称', '应用类别', '状态', '绑定时间', '备注', '操作'],
      selectedGroup: [],
      selectAll: false,
      calendarVal: '',
      searchName: null,
      status: null,
      calendarVal: null,
      iptList: [
				{name: '待审核', id: 1},
				{name: '已通过', id: 2},
				{name: '未通过', id: 3}
      ],
      showList: ['ID', '应用名称', '应用类别', '状态', '绑定时间', '备注', '操作'],
      subNavList: {
        parentNode: {
          name: '应用管理',
          router: {
            name: 'application_list'
          }
        },
        childNode: {
          name: '应用列表',
          desc: '页面功能性描述，简要解释该模块做什么用的',
          router: {
            name: 'application_list'
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
    		this.$http.get(api.application.list, {
	    		params: {
	    			offset: this.offset,
	    			limit: this.limit,
	    			token: this.$bus.token,
            webname: this.searchName,
            audit_status: this.status ? this.status : null,
            bind_time: this.calendarVal
	    		}
	    	}).then(res => {
	    		if (res.data.code === 1) {
            this.data = res.data.data
            this.iptList = res.data.data.audit_status_options
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
  /*flex*/
  .app-content-container > ul {
    display: flex;
  }
  .app-content-container > ul > li {
    flex-grow: 1;
  }
  /*flex结束*/
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
