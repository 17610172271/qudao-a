<template>
  <header class="main-header">
    <!-- Logo -->
    <a href="index2.html" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini">SL</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>渠道合作管理平台</b></span>
    </a>

    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <router-link :to="{name: 'home'}" class="link-home-icon"><span class="fa fa-home fa-lg" style="color: #fff;"></span></router-link>
      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav p-r-md">
          <li class="dropdown top-nav-username"><a href="javascript:;">欢迎您,李奎111 !</a></li>
          <!-- Notifications: style can be found in dropdown.less -->
          <li class="dropdown notifications-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-bell-o"></i>
              <span class="label label-warning">{{ unreadNotificationsCount }}</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">You have {{ unreadNotificationsCount }} notifications</li>
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                  <li>
                    <a href="#">
                      <i class="fa fa-users text-aqua"></i> 5 new members joined today
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-warning text-yellow"></i> Very long description here that may not fit into the
                      page and may cause design problems
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-users text-red"></i> 5 new members joined
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-shopping-cart text-green"></i> 25 sales made
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-user text-red"></i> You changed your username
                    </a>
                  </li>
                </ul>
              </li>
              <li class="footer"><a href="#">View all</a></li>
            </ul>
          </li>
          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="~admin-lte/dist/img/user2-160x160.jpg" class="user-image" alt="User Image">
              <i class="fa fa-chevron-down"></i>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <img src="~admin-lte/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">

                <p>
                  {{ currentUser.name }} - {{ currentUser.position }}
                  <small>{{ currentUser.createdAt }}</small>
                </p>
              </li>
              <!-- Menu Body -->
              <li class="user-body">
                <row>
                  <div class="col-xs-4 text-center">
                    <a href="#">Followers</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Sales</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Friends</a>
                  </div>
                </row>
                <!-- /.row -->
              </li>
              <!-- Menu Footer-->
              <li class="user-footer">
                <div class="pull-left">
                  <a href="#" class="btn btn-default btn-flat">Profile</a>
                </div>
                <div class="pull-right">
                  <a href="#" class="btn btn-default btn-flat" @click="signOut">Sign out</a>
                </div>
              </li>
            </ul>
          </li>
          <!-- Control Sidebar Toggle Button -->
<!--           <li>
            <a href="#" data-toggle="control-sidebar"><i class="fa fa-chevron-down"></i></a>
          </li> -->
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'va-navibar',
  computed: {
    ...mapGetters([
      'unreadMessagesCount',
      'unreadNotificationsCount',
      'remainTasksCount',
      'currentUser'
    ])
  },
  methods: {
    signOut () {
      window.localStorage.removeItem('Auth')
      this.$router.replace({name: 'login'})
    }
  }
}

</script>
<style>
  .link-home-icon {
    color: #fff;
    padding: 15px;
    float: left;
  }
  .link-home-icom:hover {
    background-color: #357ca5;
  }
  .skin-blue .main-header .navbar .link-home-icom {
    color: #fff;
  }
  @media (max-width: 768px) {
    .navbar-nav {
      padding-right: 0;
    }
    .navbar-nav .nav>li>a {
      padding: 10px 5px;
    }
  }
  @media (min-width: 768px) and (max-width: 1500px) {

  }
  @media (min-width: 1500px) {
    .main-header .logo {
      height: 80px;
      line-height: 80px;
      font-size: 28px;
    }
    .navbar.navbar-static-top > a {
      padding: 30px 18px;
    }
    .navbar.navbar-static-top .sidebar-toggle {
      padding: 22px 18px;
    }
    .navbar.navbar-static-top > a:before {
      font-size: 26px;
    }
    .navbar.navbar-static-top > a > span {
      font-size: 26px;
    }
    .nav.navbar-nav > li > a {
      padding: 30px 8px;
    }
    .main-header .navbar .nav>li>a>.label {
      top: 25px;
      right: 2px;
    }
    .top-nav-username {
      font-size: 18px;
    }
    .notifications-menu > a >i {
      font-size: 20px;
    }
    .navbar-nav>.user-menu .user-image {
      width: 36px;
      height: 36px;
    }
    .main-header .navbar .user-menu > a {
      padding: 22px 8px;
      height: 80px;
    }
    .main-header .navbar .user-menu > a > i {
      vertical-align: -8px;
    }
  }
</style>
