<template xmlns="http://www.w3.org/1999/html">
  <div class="SDK-content">
    <h2 >大数据SDK</h2>
    <div class="background">
      <h3>产品背景</h3>
      <p class="introduce">随着数据时代的到来，数据将在各个方面扮演越来越重要的角色。公司开展多项数据业务，同时不同业务也开始越来越多的使用数据建模进行推广运营，数据价值越来越被看中。收集整合用户数据的大数据SDK应运而生，通过公司各产品积极支持， 客户端通过大数据SDK收集、上报数据，由大数据团队接收处理并管理数据，共同为公司各业务线提供丰富有价值的数据。</p>
    </div>
    <div class="data-sources">
      <h3>数据来源及内容</h3>
      <p class="introduce">大数据SDK通过集成到公司内各产品收集用户数据，输出维度主要有以下：</p>
      <el-row style="margin-top: 40px" :gutter="20">
        <el-col :sm="12" :xs="24" class="m-mb20">
          <el-card class="box-card" shadow="hover">
            <el-row>
              <el-col :span="12">
                <h4 class="circle-dot">用户属性</h4>
                <div class="text-center">
                  <img src="../../../../static/image/sdk-icon1.png"/>
                  <p>硬件信息</p>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="text-center" style="margin-top: 30px">
                  <img src="../../../../static/image/sdk-icon2.png"/>
                  <p>地理信息信息</p>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :sm="12" :xs="24">
          <el-card class="box-card" shadow="hover">
            <el-row>
              <el-col :span="12">
                <h4 class="circle-dot">用户行为</h4>
                <div class="text-center">
                  <img src="../../../../static/image/sdk-icon3.png"/>
                  <p>系统行为</p>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="text-center" style="margin-top: 30px">
                  <img src="../../../../static/image/sdk-icon4.png"/>
                  <p>第三方应用行为</p>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="apply">
      <h3>大数据应用</h3>
      <p class="introduce">大数据SDK将收集到的用户数据，处理整合输出到公司内部各数据业务及其他产品线。目前向Libra，智库等数据业务；金融业务建模；广告用户标签及产品推广中用户挖掘等需求提供数据。</p>
      <el-row style="margin-top: 45px" class="hidden-xs-only">
        <el-col  :sm="2" :xs="4" class="front">
          <div style="margin-top: 10px">获取<br>数据</div>
          <img src="../../../../static/image/arrow.png">
          <div class="">业务<br>输出</div>
        </el-col>
        <el-col  :sm="22" :xs="20">
          <div class="bg-purple">大数据SDK</div>
          <el-row :gutter="20" style="margin-top: 45px">
            <el-col  :sm="6" :xs="20" class="m-mb20">
              <el-card class="box-card" shadow="hover">
                <h4 class="circle-dot">数据业务</h4>
                <p>Libra 平台<br>智能数据平台</p>
              </el-card>
            </el-col>
            <el-col :sm="6" :xs="20" class="m-mb20">
              <el-card class="box-card" shadow="hover">
                <h4 class="circle-dot">金融业务</h4>
                <p>数据建模</p>
              </el-card>
            </el-col>
            <el-col :sm="6" :xs="20" class="m-mb20">
              <el-card class="box-card" shadow="hover">
                <h4 class="circle-dot">广告业务</h4>
                <p>用户标签</p>
              </el-card>
            </el-col>
            <el-col :sm="6" :xs="20" class="m-mb20">
              <el-card class="box-card" shadow="hover">
                <h4 class="circle-dot">产品推广</h4>
                <p>潜在用户挖掘</p>
              </el-card>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row style="margin-top: 45px" class="hidden-sm-and-up">
        <el-col  :xs="24" class="front">
          <el-col :xs="8">
            获取数据
          </el-col>
          <el-col :xs="6">
            <div style="height: 40px;">
              <img src="../../../../static/image/arrow.png"  class="arrow">
            </div>
          </el-col>
          <el-col :xs="10" class="text-left">
            业务输出
          </el-col>
        </el-col>
        <el-col  :xs="24">
          <el-row>
            <el-col :xs="6">
              <div class="m-bg-purple">大<br>数<br>据<br>S<br>D<br>K</div>
            </el-col>
            <el-col :xs="16">
              <el-row style="margin-left: 30px">
                <el-col  :sm="12" :xs="24" class="m-mb20">
                  <el-card class="box-card" shadow="hover">
                    <h4 class="circle-dot">数据业务</h4>
                    <p>Libra 平台<br>智能数据平台</p>
                  </el-card>
                </el-col>
                <el-col :sm="12" :xs="24" class="m-mb20">
                  <el-card class="box-card" shadow="hover">
                    <h4 class="circle-dot">金融业务</h4>
                    <p>数据建模</p>
                  </el-card>
                </el-col>
                <el-col :sm="12" :xs="24" class="m-mb20">
                  <el-card class="box-card" shadow="hover">
                    <h4 class="circle-dot">广告业务</h4>
                    <p>用户标签</p>
                  </el-card>
                </el-col>
                <el-col :sm="12" :xs="24" class="m-mb20">
                  <el-card class="box-card" shadow="hover">
                    <h4 class="circle-dot">产品推广</h4>
                    <p>潜在用户挖掘</p>
                  </el-card>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value2: 0
      }
    }
  }
</script>

<style  lang="less">
  .SDK-content{
    margin-left: -1px;
    .background{
      margin-bottom:64px;
      h4{
        margin: 32px 0 16px 0;
      }
    }
    .data-sources{
      .box-card{
        background: #fbfcfd;
        h4{
          margin-left: 20%;
        }
        img{
          margin-top: 38px;
        }
        p{
          font-size: 18px;
          margin-top: 10px;
          color: #7b8799;
        }

      }
    }
    .apply{
      .front{
        text-align: center;
        img{
          margin: 9px 0 16px 0;
        }
        .arrow{
          transform:rotate(270deg);margin-top: -16px;
          margin-left: -20px;
        }
        div{
          font-size: 16px;
          color: #7b8799;
        }
      }
      .bg-purple{
        padding: 20px 0;
        background: #ebeef5;
        border-radius: 4px;
        font-size: 18px;
        text-align: center;
      }
      .box-card{
        background: #fbfcfd;
        p{
          font-size: 18px;
          color: #979797;
          min-height: 58px;
          margin: 10px 0 0 20px;
        }
      }
      @media (max-width: 768px){
        .m-bg-purple{
          width: 70%;
          margin-left: 20px;
          padding-top: 180px;
          height:340px ;
          background: #ebeef5;
          border-radius: 4px;
          font-size: 18px;
          text-align: center;
        }
        .data-sources{
          .box-card{
            h4{
              margin-left: 10%;
            }
          }
        }
        .box-card p{
          min-height: auto;
        }
      }
    }
    @media (max-width: 768px){
      .data-sources{
        .box-card{
          h4{
            margin-left: 10%;
          }
        }
      }
    }
  }

</style>
