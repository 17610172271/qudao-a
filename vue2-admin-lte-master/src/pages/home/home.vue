<template>
  <div class="animated fadeIn">
    <div class="home-content">
      <div class="home-status-item-container">
        <h3>平台状态<span class="text-lg">整体盈利及订单会员量统计</span></h3>
        <div class="home-status-item container-fluid">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 m-t-md p-o-sm ">
              <div class="bg-blue1">
                <div class="home-item-container bg-status-blue">
                  <div class="home-item-top border-bottom-blue relative">
                    <div class=" home-item-top-left relative">
                      <i class="fa fa-viacoin home-viacoin2 home-icon-lg"></i>
                    </div>
                    <a href="javascript:;" class="pull-left home-item-top-right relative border-left-blue">
                      查看详情<i class="fa fa-chevron-circle-right"></i>
                    </a>
                  </div>
                  <div class="home-item-bottom text-white">
                    <div class="home-item-title text-xxlg">营业额</div>
                    <div class="home-item-num m-t-12">16.88 <span class="text-xxxlg">万</span> </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 m-t-md p-o-sm">
              <div class="bg-green1">
                <div class="home-item-container bg-status-green">
                  <div class="home-item-top border-bottom-green relative">
                    <div class="relative home-item-top-left relative">
                      <i class="fa fa-money home-viacoin1 home-icon-lg"></i>
                    </div>
                    <a href="javascript:;" class="pull-left home-item-top-right relative border-left-green">
                      查看详情<i class="fa fa-chevron-circle-right"></i>
                    </a>
                  </div>
                  <div class="home-item-bottom text-white">
                    <div class="home-item-title text-xxlg">净收入</div>
                    <div class="home-item-num m-t-12">6935.00 <span class="text-xxxlg">元</span> </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 m-t-md p-o-sm">
              <div class="bg-yellow1">
                <div class="home-item-container bg-status-yellow">
                  <div class="home-item-top clear border-bottom-yellow">
                    <div class="relative home-item-top-left relative">
                      <i class="fa fa-cart-arrow-down home-viacoin home-icon-lg"></i>
                    </div>
                    <a href="javascript:;" class="pull-left home-item-top-right relative border-left-yellow">
                      查看详情<i class="fa fa-chevron-circle-right"></i>
                    </a>
                  </div>
                  <div class="home-item-bottom text-white">
                    <div class="home-item-title text-xxlg">订单</div>
                    <div class="home-item-num m-t-12">17636 <span class="text-xxxlg">单</span> </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 m-t-md p-o-sm">
              <div class="bg-orange1">
                <div class="home-item-container bg-status-orange">
                  <div class="home-item-top clear border-bottom-orange">
                    <div class="relative home-item-top-left relative">
                      <i class="fa fa-user-o home-viacoin2 home-icon-lg"></i>
                    </div>
                    <a href="javascript:;" class="pull-left home-item-top-right relative border-left-orange">
                      查看详情<i class="fa fa-chevron-circle-right"></i>
                    </a>
                  </div>
                  <div class="home-item-bottom text-white">
                    <div class="home-item-title text-xxlg">会员</div>
                    <div class="home-item-num m-t-12">25666 <span class="text-xxxlg">人</span> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home-status-item-container m-t-lg today-data">
        <h3>今日数据<span class="text-lg">当日运营统计</span></h3>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 relative m-t-md data-col-item">
              <div class="home-data-item">
                <div class="absolute-0 home-dataitem-left bg-blue1"><i class="fa fa-viacoin text-data-item text-white"></i></div>
                <div class="text-lg hidden-xs">营业额</div>
                <div class="today-data-num hidden-xs">6.66万</div>
                <div class="today-data-xs hidden-lg hidden-md hidden-sm">营业额<span><span class="text-blue text-lg m-r-sm">6.66</span>万</span></div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 relative m-t-md data-col-item">
              <div class="home-data-item">
                <div class="absolute-0 home-dataitem-left bg-green1"><i class="fa fa-edit text-data-item text-white"></i></div>
                <div class="text-lg hidden-xs">净收入</div>
                <div class="today-data-num hidden-xs">1666.00元</div>
                <div class="today-data-xs hidden-lg hidden-md hidden-sm">净收入<span><span class="text-green text-lg m-r-sm">1666.00</span>元</span></div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 relative m-t-md data-col-item">
              <div class="home-data-item">
                <div class="absolute-0 home-dataitem-left bg-yellow1"><i class="fa fa-wpforms text-data-item text-white"></i></div>
                <div class="text-lg hidden-xs">订单</div>
                <div class="today-data-num hidden-xs">1366单</div>
                <div class="today-data-xs hidden-lg hidden-md hidden-sm">订单<span><span class="text-yellow text-lg m-r-sm">1366</span>单</span></div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 relative m-t-md data-col-item">
              <div class="home-data-item">
                <div class="absolute-0 home-dataitem-left bg-orange1"><i class="fa fa-user-plus data-icon-size text-data-item text-white"></i></div>
                <div class="text-lg hidden-xs">新增会员</div>
                <div class="today-data-num hidden-xs">1266人</div>
                <div class="today-data-xs hidden-lg hidden-md hidden-sm">新增会员<span><span class="text-orange text-lg m-r-sm">1266</span>人</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home-chart m-t-lg bg-white">
        <div class="home-chart-title clear">
          <div class="pull-left text-xxlg p-l-lg today-chart-title"><span class="fa fa-calendar-check-o m-r-15"></span>每日数据统计</div>
          <ul class="pull-right clear text-xlg show-days hidden-xs">
            <li class="pull-left p-o-md cursor-p" :class="{'chart-selected': !$route.query.chartData || $route.query.chartData==7}" @click="changeChartsData(7)">最近7天</li>
            <li class="pull-left p-o-md cursor-p" :class="{'chart-selected': $route.query.chartData==15}" @click="changeChartsData(15)">最近15天</li>
            <li class="pull-left p-o-md cursor-p b-r-n" :class="{'chart-selected': $route.query.chartData==30}" @click="changeChartsData(30)">最近30天</li>
          </ul>
          <ul class="pull-right clear text-xlg show-days hidden-sm hidden-md hidden-lg">
            <li class="pull-left p-o-md cursor-p" :class="{'chart-selected': !$route.query.chartData || $route.query.chartData==7}" @click="changeChartsData(7)">7天</li>
            <li class="pull-left p-o-md cursor-p" :class="{'chart-selected': $route.query.chartData==15}" @click="changeChartsData(15)">15天</li>
            <li class="pull-left p-o-md cursor-p b-r-n" :class="{'chart-selected': $route.query.chartData==30}" @click="changeChartsData(30)">30天</li>
          </ul>
        </div>
        <div id="homeChart" class="chart-container"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    name: 'dashboard',
    data () {
      return {
      }
    },
    methods: {
      changeChartsData (id) {
        this.$router.replace({name: 'home', query: {chartData: id}})
      },
      drawLine () {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('homeChart'))
        // 绘制图表
        myChart.setOption({
          tooltip: {trigger: 'axis'},
          legend: {
            data: ['每日营业额(元)', '每日净收入(元)', '每日订单量(个)'],
            x: 'center',
            y: 'bottom'
          },
          grid: {
            left: '2%', // 图表距边框的距离
            right: '4%',
            bottom: '20%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['5/01', '5/02', '5/03', '5/04', '5/05', '5/06', '5/07']
          },
          yAxis: {},
          series: [{
            name: '每日营业额(元)',
            color: ['#fcd683'],
            type: 'line',
            smooth: true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [5, 20, 36, 60, 10, 20, 75]
          },
          {
            name: '每日净收入(元)',
            color: ['#9fc7f3'],
            type: 'line',
            smooth: true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [65, 12, 36, 18, 12, 0, 45]
          },
          {
            name: '每日订单量(个)',
            color: ['#32af7f'],
            type: 'line',
            smooth: true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [31, 70, 40, 10, 60, 20, 25]
          }]
        })
        myChart.resize()
      }
    },
    mounted () {
      this.drawLine()
      console.log(this.$bus.Auth)
    }
  }
</script>

<style scoped>
  .chart-container {
    height: 300px;
  }
  .home-container {
    height: 100%;
  }
  .home-content {
    padding: 30px;
    padding-right: 20px;
  }
  .home-content h3 {
    font-size: 22px;
    color: #434343;
    margin: 0;
  }
  .home-content h3 > span {
    color: #666;
    margin-left: 8px;
  }
  .home-status-item {
    margin: 0;
    padding-left: 5px;
  }
  .home-data-item {
    height: 112px;
    min-height: 60px;
    padding: 20px 10px 20px 127px;
    background-color: #fff;
    box-shadow: 1px 0px 1px rgba(187,187,187,0.75);
    border-radius: 2px;

  }
  .home-data-item:last-child {
    margin-right: 0;
  }
  .home-dataitem-left {
    width: 112px;
    height: 112px;
    /*position: relative;*/
    /*min-height: 60px;*/
    /*text-align: center;*/
    /*line-height: 112px;*/
    /*background-color: #1295e9;*/
  }
  .home-dataitem-left i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .today-data-num {
    font-size: 25px;
    margin-top: 14px;
    font-family: Arial;
    color: #333;
  }
  .data-col-item {
    padding-right: 20px;
    padding-left: 10px;
  }
  .text-data-item {
    font-size: 47px;
  }
  .home-chart-title {
    height: 60px;
    line-height: 60px;
  }
  .home-chart-title .fa-calendar-check-o {
    vertical-align: 2px;
  }
  .home-chart {
    height: 400px;
  }
  .home-chart-title {
    border: 1px solid #ddd;
  }
  .chart-selected {
    border: 1px solid #ddd;
    border-top: 3px solid #3691F5;
    border-bottom: 1px solid #fff;
    background-color: #fff;
    margin-top: -4px;
  }
  .home-chart-title .b-r-n {
    border-right: none;
  }
  .data-icon-size {
    font-size: 44px;
  }
  .today-data-xs {
    font-size: 14px;
  }
  .today-data-xs > span {
    font-size: 14px;
    float: right;
  }
  @media (max-width: 768px) {
    .chart-container {
      height: 240px;
    }
    .home-chart {
      height: 330px;
    }
    .home-content {
      padding: 15px;
    }
    .home-content h3 {
      font-size: 16px;
    }
    .home-content h3 > span {
      font-size: 12px;
    }
    .home-content .today-data h3 {
      margin-bottom: 20px;
    }
    .data-col-item {
      padding-right: 5px;
    }
    .home-status-item .p-o-sm {
      padding-left: 5px;
      padding-right: 5px;
    }
    .navbar-nav {
      padding-right: 0;
    }
    .home-item-top {
      height: 34px;
      line-height: 34px;
    }
    .home-item-top-right {
      height: 34px;
      line-height: 34px;
      font-size: 14px;
    }
    .home-item-bottom {
      height: 60px;
      padding: 8px 15px;
      min-height: 60px;
    }
    .home-item-title {
      font-size: 14px;
    }
    .home-viacoin2 {
      font-size: 17px;
    }
    .home-viacoin1 {
      font-size: 18px;
    }
    .home-viacoin {
      font-size: 20px;
    }
    .home-status-item-container .home-icon-lg {
      left: 15px;
      transform: translate(0, -50%);
    }
    .home-item-num {
      margin-top: 0px;
      font-size: 20px;
    }
    .home-item-num > span {
      font-size: 14px;
    }
    .today-chart-title {
      padding-left: 0;
      font-size: 14px;
    }
    .show-days li {
      padding-left: 10px;
      padding-right: 10px;
      font-size: 12px;
    }
    .today-chart-title .fa-calendar-check-o {
      margin-left: 5px;
      margin-right: 5px;
    }
    .home-item-top {
      padding-right: 104px;
    }
    .home-item-top-right {
      width: 104px;
    }
    .home-data-item {
      height: 60px;
      min-height: 60px;
      padding: 20px 20px 20px 75px;
    }
    .home-dataitem-left {
      width: 60px;
      height: 60px;
    }
    .text-data-item {
      font-size: 24px;
    }
    .data-col-item {
      margin-top: 0;
    }
  }
  @media (min-width: 768px) and (max-width: 1500px) {
    /*平台状态调整*/
    .home-item-top {
      height: 48px;
      line-height: 48px;
    }
    .home-item-top-right {
      height: 48px;
      line-height: 48px;
      font-size: 14px;
    }
    .home-item-bottom {
      height: 100px;
    }
    .home-item-title {
      font-size: 16px;
      height: 17px;
    }
    .home-item-num {
      margin-top: 10px;
      font-size: 29px;
    }
    .home-item-num span {
      font-size: 18px;
    }
    /*今日数据*/
    .home-data-item {
      height: 80px;
      padding: 14px 0 0 80px;
    }
    .home-dataitem-left {
      width: 80px;
      height: 80px;
      line-height: 80px;
    }
    .today-data-num {
      font-size: 20px;
      margin-top: 6px;
    }
    /*平台状态icon字号*/
    .home-viacoin2 {
      font-size: 28px;
    }
    .home-viacoin1 {
      font-size: 30px;
    }
    .home-viacoin {
      font-size: 33px;
    }
    .text-data-item {
      font-size: 34px;
    }
    .data-icon-size {
      font-size: 32px;
    }
    .home-status-item-container .home-icon-lg {
      left: 26px;
      transform: translate(0, -50%);
    }
  }
  @media (min-width: 1500px) {
    /*平台状态调整*/
    .home-status-item-container .home-icon-lg {
      left: 37px;
      transform: translate(0, -50%);
    }
  }
</style>
