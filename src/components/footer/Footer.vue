<template>
  <div class="footer">
    <!--v-if="hash!='/contactUs'"-->
      <div class="contact text-center">
        <div class="middle"><a @click="goContactPage">联系我们</a></div>
      </div>
      <div class="bottom">
        ©2018 石志凯 13664888971@163.com
      </div>
  </div>
</template>

<script>
export default{
  name: 'Footer',
  props:{
    hash:String
  },
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    goContactPage(){
      this.$router.push({path:'/contactUs'});
      window.scrollTo(0,0);
    }
  }
}
</script>

<style lang="less">
  .footer{
    background-color: #FFFFFF;
    width: 100%;
    margin-top: -202px;
    box-sizing: border-box;
    height: 202px;
    .middle{
      width: 100%;
      margin: 0 auto;
    }
  }
  .contact{
    width: 100%;
    background: linear-gradient(to right,#0ab8f0,#44d9e2,#7ffed8);
    height: 100px;
    line-height: 100px;
    a{
      display:inline-block;
      padding:0 100px;
      height: 50px;
      line-height: 50px;
      border-radius: 50px;
      text-align: center;
      font-size: 22px;
      color: #FFFFFF;
      background: rgba(255,255,255,0.2);
      text-decoration: none;
    }
    a:hover{
      background: rgba(245,245,245,0.5);
    }
  }
  .bottom{
    background: #f7fbfd;
    text-align: center;
    color: #ababab;
    height: 72px;
    padding-top: 32px;
  }
</style>
