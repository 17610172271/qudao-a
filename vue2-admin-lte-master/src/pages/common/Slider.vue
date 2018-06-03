<template>
  <aside id="slider" class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="~admin-lte/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>{{ currentUser.name }}</p>
          <a href="#"><i class="fa fa-circle" :style="`color:${currentUser.state.color}`"></i> {{ currentUser.state.name }}</a>
        </div>
      </div>
      <!-- search form -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
          <span class="input-group-btn">
            <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
            </button>
          </span>
        </div>
      </form>
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul data-widget="tree" class="sidebar-menu">
        <va-slide-item
          v-for="(item,index) in slideMenuItems"
          :data="item"
          :key="index"
          :type="item.type"
          :isHeader="item.isHeader"
          :icon="item.icon"
          :name="item.name"
          :badge="item.badge"
          :items="item.items"
          :router="item.router"
          :link="item.link"
        >
        </va-slide-item>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'
import VASlideItem from '../../components/VASlideItem'

export default {
  name: 'va-slider',
  props: {
    slideMenuItems: {
      type: Array,
      default: []
    }
  },
  created () {

  },
  computed: {
    ...mapGetters([
      'currentUser'
    ])
  },
  components: {
    'va-slide-item': VASlideItem
  }
}
</script>
<style>
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
    .main-sidebar {
      padding-top: 80px;
    }
/*    .main-sidebar .user-panel {
      padding: 22px 20px 15px;
    }*/
    .user-panel>.image>img {
      max-width: 70px;
    }
    .user-panel>.info {
      left: 80px;
      padding-top: 20px;
    }
    .sidebar-menu>li {
      font-size: 18px;
    }
    .sidebar-menu>li>a {
      padding: 15px 5px 15px 15px;
    }
    .treeview-menu>li>a {
      font-size: 18px;
    }
  }
</style>
