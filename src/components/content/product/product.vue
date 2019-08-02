<template>
  <div class="solution-page container">
    <el-row :gutter="20">
      <el-col :span="6" class="m-el-menu">
        <el-menu class="side-nav"
                 :default-active="activeIndex"
                 :active-text-color="activeColor"
                 @select="handleSelect"
        >
          <el-menu-item index="payment">
            <span slot="title" class="nav-item">支付系统</span>
          </el-menu-item>
          <el-menu-item index="dataSystem">
            <span slot="title" class="nav-item">数据系统</span>
          </el-menu-item>
          <el-menu-item index="dataSDK">
            <span slot="title" class="nav-item">大数据SDK</span>
          </el-menu-item>
          <!--<el-menu-item index="accountNum" disabled>-->
            <!--<span slot="title" class="nav-item">账号系统</span>-->
          <!--</el-menu-item>-->
        </el-menu>
      </el-col>
      <el-col :span="18" class="m-el-page">
        <component :is="currentView"></component>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import payment from './payment'
  import dataSystem from './data'
  import dataSDK from './dataSDK'
  import accountNum from './accountNum'
  export default {
    name: 'product',
    data() {
      return {
        activeIndex: 'payment',
        activeColor:'#409EFF',
        currentView:''
      }
    },
    components: {
      payment,
      dataSystem,
      dataSDK,
      accountNum
    },
    methods: {
      handleSelect(key) {
        _hmt.push(['_trackEvent', 'product-menu', 'click', key])
        this.currentView = key
      },
      goToPage(){
        window.scrollTo(0,0);
        var id = this.$route.query.id;
        if(id){
          this.currentView = id;
          this.activeIndex = id;
        }else {
          this.currentView = 'payment'
        }
      }
    },
    created(){
      this.goToPage()

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .solution-page{
    padding: 55px 0 95px;
    box-sizing: border-box;;
  }
  .side-nav {
    width: 100%;
    box-sizing: border-box;
    padding:0 30px;
    transition: opacity .3s;
    border-right: 0;
    .el-menu-item{
      height: 40px;
      padding: 0!important;
      background: #ffffff!important;
      border-right: 1px solid #e6e6e6;
    }
  }

  el-menu-item:hover{
    background: #ffffff!important;
  }
  .side-nav .nav-item {
    font-size: 16px;
    line-height: 40px;
    height: 100%;
    margin: 0;
    padding: 0;
    text-decoration: none;
    display: block;
    position: relative;
    font-weight: 700;
  }
  @media (max-width: 768px){
    .side-nav{
      padding:0 20px 40px;
      .el-menu-item{
        border-right: 0;
      }
    }
  }
</style>
