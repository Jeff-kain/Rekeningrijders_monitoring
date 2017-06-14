<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    min-height: 100%;
  }
  
  .layout-menu {
    height: 60px;
  }
  
  .layout-logo {
    width: 200px;
    height: 35px;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  
  .layout-user {
    width: 300px;
    margin: auto;
    text-align: right;
    float: right;
  }
  
  .layout-nav {
    margin: 0 auto;
    margin-left: 10%;
  }
  
  .layout-assistant {
    width: 300px;
    margin: 0 auto;
    height: inherit;
  }
  
  .layout-breadcrumb {
    padding: 10px 15px 0;
  }
  
  .layout-content {
    margin: 15px;
    overflow: hidden;
    border-radius: 4px;
    max-height: 85vh;
  }
  
  .layout-content-main {
    padding: 10px;
  }
  
  .layout-copy {
    text-align: center;
    color: #9ea7b4;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 5vh;
    width: 100%;
    overflow: hidden;
  }
  
  .profile-img-card {
    width: 12px;
    height: 12px;
    margin: 0 auto 10px;
    display: block;
  }
  
  #menu-icon {
    display: hidden;
    width: 40px;
    height: 40px;
    background: url(../assets/menu-icon.svg) center;
    float: right;
    margin: 10px;
  }
  
  a:hover#menu-icon {
    background-color: #444;
    border-radius: 4px 4px 0 0;
  }
  
  .layout-menu-left-logo {
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto 10px;
    display: block;
  }
  /*
  @media only screen and (max-width: 768px) {
    /* For mobile phones: 
    #menu-icon {
      display: inline-block;
    }
    .layout-menu ul,
    .layout-menu:active ul {
      display: none;
      position: absolute;
      z-index: 99999 !important;
      height: 50%;
      margin-top: 60px;
    }
    .layout-menu li {
      text-align: center;
      width: 100%;
      padding: 10px 0;
      margin: 0;
    }
    .layout-menu:hover ul {
      display: block;
    }
  }*/
</style>
<template>
  <div class="layout">
    <div class="layout-menu ivu-menu-dark">
      <Menu mode="horizontal" theme="dark" active-name="1">
        <div class="layout-logo">
          <img class="layout-menu-left-logo" src="../assets/germany-flag.png" />
        </div>
      </Menu>
    </div>
    <div class="layout-breadcrumb">
      <Breadcrumb>
        <Breadcrumb-item v-for="crumb in crumbs" :key="crumb">{{crumb}}</Breadcrumb-item>
      </Breadcrumb>
    </div>
    <div class="layout-content">
          <dashboard></dashboard> 

      <router-view> </router-view>
       <div class="layout-copy">
      2016-2017 &copy; Fontys ICT S61TA
    </div>
  </div>
  </div>
</template>
<script>
  import charts from './charts/uptime.js' 
  import dashboard from './dashboard'

  export default {

    name: 'test',
    components: {
      charts, dashboard
    },
    data() {
      return {
        msg: 'Axios test'
      }
    },
    mounted() {
    },
    methods: {
    },
    computed: {
      crumbs() {
        var crumbCollection = [];
        let parents = this.$route.meta.parent;
        for (var i = 0; i < parents.length; i++) {
          var matched = this.$router.match(parents[i]);
          if (matched.meta.breadcrumb != this.$route.meta.breadcrumb) {
            crumbCollection.push(matched.meta.breadcrumb);
          }
        }
        crumbCollection.push(this.$route.meta.breadcrumb);
        return crumbCollection;
      }
    }
  }

</script>