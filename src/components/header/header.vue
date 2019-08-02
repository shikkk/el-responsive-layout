<template>
  <div class="header">
    <div class="container">
      <Row>
        <Col span="12">
        <Menu mode="horizontal" :theme="theme1" active-name="1" @on-select="changePage">
          <MenuItem name="1">
            首页
          </MenuItem>
          <MenuItem name="2">
            解决方案
          </MenuItem>
          <MenuItem name="3">
            产品中心
          </MenuItem>
          <MenuItem name="4">
            联系我们
          </MenuItem>
        </Menu>
        </Col>
        <Col span="12">
        <div style="text-align: right">
          <Button type="ghost" shape="circle">CPBI 登录</Button>
          <Button type="ghost" shape="circle">CMBI 登录</Button>
          <Button type="primary" shape="circle">DATE 登录</Button>
        </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default{
  data(){
    return {
      theme1: 'light'
    }
  },
  methods: {
    changePage (name) {
      console.log(name)
      if(name == 1){
        this.$router.push('/')
      }
    }
  }
}
</script>

<style>
  .header{
    height: 80px;
    background: #FFFFFF;
  }
  .container{
    width: 1140px;
    padding: 0;
    margin: 0 auto;
    line-height: 80px;
  }
  .ivu-menu-horizontal{
    height: 80px;
    line-height: 80px;
  }
  .ivu-btn-circle{
    margin-right: 15px;
  }
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover{
    color: #2d8cf0;
    border-bottom: 2px solid transparent;
  }
  .ivu-menu-horizontal.ivu-menu-light:after{
    background: #FFFFFF;
  }
  .main-content{

  }
</style>
