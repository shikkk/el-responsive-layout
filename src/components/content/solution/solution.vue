<template>
  <div class="solution-page container">
    <el-row :gutter="20">
      <el-col :span="6" class="m-el-menu">
        <el-menu class="side-nav"
          :default-active="activeIndex"
          :active-text-color="activeColor"
          @select="handleSelect"
        >
          <el-menu-item index="game">
            <span slot="title" class="nav-item">游戏解决方案</span>
          </el-menu-item>
          <el-menu-item index="finance">
            <span slot="title" class="nav-item">金融解决方案</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18" class="m-el-page">
        <component :is="currentView"></component>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import game from './game'
  import finance from './finance'
export default {
  name: 'solution',
  data() {
    return {
      activeIndex: 'game',
      activeColor:'#409EFF',
      currentView:''
    }
  },
  components: {
    game,
    finance
  },
  methods: {
    handleSelect(key) {
        this.currentView = key
      _hmt.push(['_trackEvent', 'solution-menu', 'click', key])
    },
    goToPage(){
      window.scrollTo(0,0);
      var page = this.$route.query.page;
      if(page){
        this.currentView = page;
        this.activeIndex = page;
      }else {
        this.currentView = 'game'
      }
    }
  },
  created(){
    this.goToPage()
  }
}
</script>

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
      border-right: 1px solid #e6e6e6;
    }
  }
  .el-menu-item{
    background: #ffffff!important;
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
    cursor: pointer;
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
