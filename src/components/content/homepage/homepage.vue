<template>
  <div class="index-con">
    <div class="banner hidden-sm-and-down" >
      <el-carousel :interval="3000" type="card" height="400px">
        <el-carousel-item v-for="(item,index) in banner" :key="index">
          <a :href="item.login_href" target="_blank" @click="listen(item.web)">
            <img :src="item.m_img">
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="m-banner hidden-md-and-up" >
      <swipe loop style="width: 100%" :autoplayTime="3000">
        <swipe-item v-for="(n,index) in banner" :key="index">
          <a  @click="listen(n.web)">
            <img :src="n.m_img" style="width: 100%">
          </a>
        </swipe-item>
      </swipe>
    </div>
    <div class="container solution">
      <!--<h2 class="title text-center">产品解决方案</h2>-->
      <h3 class="text-center">将我们的数据及开发能力，赋能到公司更多产品及业务线，提供整套数据解决方案</h3>
      <el-row type="flex" class="row-bg" justify="space-around" style="margin-top: 55px">
        <el-col :span="11" class="sports solution-box" >
          <el-card class="box-card" shadow="always" :body-style="{ padding: '0px'}">
            <dl @click="goSolutionPage('game')">
              <dt>游戏解决方案</dt>
              <dd>为游戏开发者提供数据、账号、支付等一站式解决方案，使游戏开发者专注于游戏开发</dd>
            </dl>
          </el-card>
        </el-col>
        <el-col :span="11" class="sports solution-box" >
          <el-card class="box-card" shadow="always" :body-style="{ padding: '0px'}">
          <dl @click="goSolutionPage('finance')" >
            <dt>金融解决方案</dt>
            <dd>为金融业务量身定制的风控系统，具备安全稳定、敏捷高效、高弹性、高可用的特性</dd>
          </dl>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="container product">
      <h2 class="title text-center">我们的产品</h2>
      <el-row :gutter="20">
        <el-col :span="6" v-for="(item,index) in product" class="product-box" :key="index">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <div class="text-center card">
              <img :src="item.img">
              <h3>{{item.tit}}</h3>
              <p>{{item.con}}</p>
              <a  @click="goProductPage(item.href)" :class="[item.href == 'accountNum'?'bg-gray':'']">{{item.btn}}</a>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homepage',
  data () {
    return {
      value2: 0,
      banner:[{
          web:'CMBI',
          img:'/static/image/banner01.jpg',
          m_img:'/static/image/banner1.jpg',
      },
        {
          web:'CPBI',
          img:'/static/image/banner02.jpg',
          m_img:'/static/image/banner2.jpg',
        },
        {
          web:'DATAX',
          img:'/static/image/banner03.jpg',
          m_img:'/static/image/banner3.jpg',
        }
      ],
      product: [
        {
          img: 'static/image/index01.png',
          tit: '支付系统',
          con: '高度集成多家主流支付渠道，一键接入，简单快捷',
          btn: '查看详情',
          href: 'payment',
        },
        {
          img: 'static/image/index02.png',
          tit: '数据系统',
          con: '可视化自定义数据平台，数据运营尽在掌握',
          btn: '查看详情',
          href: 'dataSystem'
        },
        {
          img: 'static/image/index03.png',
          tit: '大数据SDK',
          con: '收集全面的用户数据，深度把握用户行为，为分析用户提供有效数据',
          btn: '查看详情',
          href: 'dataSDK'
        },
        {
          img: 'static/image/index04.png',
          tit: '帐号系统',
          con: '敬请期待……',
          btn: '查看详情',
          href: 'accountNum'
        }
      ]
    }
  },
  methods: {
    goProductPage(id){
        if(id!=='accountNum'){
          this.$router.push({
            path:'/product',
            query: {
              id: id
            }
          });
        }
    },
    goSolutionPage(page){
      this.$router.push({
        path:'/solution',
        query: {
          page: page
        }
      })
    },
    listen(web){
        _hmt.push(['_trackEvent', 'banner-login', 'click', web])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
  .index-con {
    .banner{
      max-width: 1370px;margin: 0 auto;
    }
    .el-carousel {
      margin-top: 40px;
    }
    .el-carousel__indicators--outside{
      margin-top: 20px;
      .el-carousel__button{
        height: 4px;
      }
    }
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
    }
    .el-carousel__item img {
      width: 100%;
      background: #ffffff;
    }
    .el-carousel__arrow {
      height: 50px;
      width: 50px;
    }
    .solution {
      padding: 80px 0;
      dl{
        padding: 43px 33px 60px 76px
      }
      dt {
        color: #009ef6;
        font-size: 22px;
        margin-bottom: 28px;
      }
      dd {
        color: #959595;
        font-size: 18px;
        line-height: 30px;
      }
      > h3 {
        color: #888;
      }

    }

    .title {
      font-size: 40px;
    }
    .product {
      padding-top: 4px;
    }
    .product-box {
      margin-top: 28px;
      position: relative;
      bottom: 0;
      transition: all .3s ease-in-out;
    }
    .card {
      height: 362px;
      width: 100%;
      position: relative;
      h3 {
        font-size: 18px;
      }
      img {
        height: 100px;
        width: 100px;
        margin: 54px 0 30px 0;
      }
      p {
        margin-top: 15px;
        font-size: 14px;
        color: #99a9bf;
        padding: 0 25px;
        line-height: 20px;
      }
      a {
        height: 52px;
        line-height: 52px;
        font-size: 14px;
        color: #409eff;
        text-align: center;
        border: 0;
        border-top: 1px solid #eaeefb;
        padding: 0;
        position: absolute;
        bottom: 0;
        left: 0;
        cursor: pointer;
        width: 100%;
        background-color: #fff;
        border-radius: 0 0 5px 5px;
        transition: all .3s;
        text-decoration: none;
        display: block;
      }
    }
    .product-box:hover {
      bottom: 6px;
      box-shadow: 0 6px 18px 0 rgba(232, 237, 250, .5)
    }
    .card a:hover {
      color: #fff;
      background: #409eff
    }
    .card .bg-gray:hover {
      background: #ffffff;
      color: #409eff;
    }
    @media (max-width: 768px){
      .banner{
        /*display: none;*/
      }
      .solution{
        padding: 30px 0 80px 0;
        h3{
          text-align: left;
          padding: 0 20px;
          font-size: 20px;
        }
      }
      .product-box {
        width: 80%;
        float: none;
        margin: 0 auto 20px;
      }
      .el-row--flex{
        display: block;
      }
      .solution-box {
        width: 80%;
        float: none;
        margin: 0 auto 20px;
        dl{
          padding: 30px;
        }
      }
    }
  }
</style>
