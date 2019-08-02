<template>
  <div class="payment-content">
    <h2 >支付系统</h2>
    <div class="background">
      <h3>产品背景</h3>
      <p class="introduce">支付是商业变现必不可少的环节。支付SDK是针对支付功能推出的集成SDK，开发者不需要自己搭建支付模块，写冗长代码，接入聚合SDK
就可拥有各渠道支付功能。</p>
    </div>
    <div class="trait">
      <h3>产品特点</h3>
      <ul>
        <li class="trait-tit">分别支持Android、IOS系统</li>
        <li style="margin: 20px 0 62px 0">
          <el-row type="flex" class="row-bg">
            <el-col  :sm="7" :xs="10">
              <el-card class="box-card" shadow="hover" :body-style="{ padding: '10px 0'}">
                  <img src="../../../../static/image/ios.png">
                  <span>IOS</span>
              </el-card>
            </el-col>
            <el-col  style="margin-left: 30px" :sm="7" :xs="10">
              <el-card class="box-card" shadow="hover" :body-style="{ padding: '10px 0'}">
                <img src="../../../../static/image/Android.png">
                <span>Android</span>
              </el-card>
            </el-col>
          </el-row>
        </li>
        <li class="trait-tit">集成Google play In-app Billing、IOS In-App Purchase、微信、支付宝等多种支付渠道</li>
        <li class="pay">
          <el-row  class="row-bg">
          <el-col :sm="6" :xs="12">
            <img src="../../../../static/image/billing-icon.png">
            <span>In-app Billing</span>
          </el-col>
          <el-col :sm="6" :xs="12">
            <img src="../../../../static/image/ios-icon.png" style="height: 38px;width: 32px;margin-top: -3px">
            <span>In-app Purchase</span>
            </el-col>
          <el-col :sm="6" :xs="12" class="m-mtb20">
            <img src="../../../../static/image/weixin-icon.png" style="height: 32px;width: 36px;">
            <span>WeChat Pay</span>
          </el-col>
          <el-col :sm="6" :xs="12" class="m-mtb20">
            <img src="../../../../static/image/ali-icon.png" style="height: 34px;width: 34px;margin-top: -1px">
            <span>AliPay</span>
          </el-col>
         </el-row>
        </li>
        <li class="trait-tit" >无需开发，直接接入</li>
        <li class="gray" style="margin: 20px 0 62px 0">公司内部聚合支付，在保障您数据安全的基础上，简化接入流程，给您带来简单便捷的接入体验</li>
        <li class="trait-tit">简洁而强大的订单管理系统</li>
        <li class="gray"  style="margin: 20px 0 62px 0">通过后台可实时查询订单详情、支付状态，可查询多方交易数据，统一管理账务数据，可多维度分析业务运营情况</li>
      </ul>
       
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value2: 0,

      }
    }
  }
</script>

<style  lang="less">
  .payment-content{
    margin-left: -1px;
    .background{
      margin-bottom:64px;
      h4{
        margin: 32px 0 16px 0;
      }
    }
    .trait{
      h3{
        margin: 20px 0 40px 0;
        font-size: 22px;
      }
      ul{
       .trait-tit{
         list-style: disc;
         margin-left: 15px;
         color: #414d5a;
        }
        .pay {
          margin: 30px 0 62px 0;
          line-height: 39px;
          span{
            margin-left: 5px;
          }
        }
        .box-card{
          img{
            margin-left: 20px;
          }
          span{
            display: inline-block;
            width: 84px;
            font-size: 22px;
            margin-left: 25px;
            vertical-align: middle;
          }
        }
        @media (max-width: 768px){
          .box-card{
            img{
              margin-left: 10px;
            }
          }
        }
      }
    }
  }

</style>
