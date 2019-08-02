<template>
  <div class="game-content">
    <h2 >游戏解决方案</h2>
    <div class="background">
      <h3>产品背景</h3>
      <p class="introduce">游戏是我们公司发展的重要业务，对创新性、趣味性、时效性有很高的要求，我们通过为他们提供账户、支付、数据服务，使游戏开发者更专注于游戏开发。</p>
    </div>
    <div class="advantage">
      <h3>我们的优势</h3>
      <el-row :gutter="64">
        <el-col :sm="7" :xs="22" v-for="(item,index) in advantage" :key="index">
          <el-card :body-style="{ padding: '0px 0px 25px 0px' }" class="card" shadow="never">
            <div class="text-center">
              <img :src="item.img">
              <h4>{{item.tit}}</h4>
              <span>{{item.con}}</span>
            </div>
          </el-card>
          <ul class="hidden-sm-and-up" style="margin-top: 20px">
            <li >
              <strong >{{item.tit}}：</strong>
              {{item.info}}
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <ul class="hidden-xs-only">
      <li >
        <strong >快速安装接入：</strong>
        客户端安装便捷，SDK一键出包，后台简便部署，快速高效解决游戏接入和部署问题
      </li>
      <li>
        <strong>数据安全无忧：</strong>
        无第三方介入用户登录、支付流程、用户运营数据传输皆在公司内部更安全
       </li>
      <li>
        <strong>多维数据管理：</strong>
        强大的后台管理系统，多游戏管理，参数维护，数据统计分析，让游戏运营轻松可靠
      </li>
    </ul>
    <div class="Packing">
      <h3>包含产品</h3>
      <el-row :gutter="10">
        <el-col :sm="8"  :xs="24" v-for="(item,index) in Packing" class="m-cards" :key="index">
          <el-card :body-style="{ padding: '15px 20px',height: '140px',position: 'relative' }" class="card" shadow="never">
            <div class="pack-card">
              <h4 class="text-center">{{item.tit}}</h4>
              <p class="text-left">{{item.con}}</p>
              <a @click="goPage(item.href)">{{item.btn}}</a>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="access">
      <h3>接入我们</h3>
      <el-steps class="hidden-xs-only" >
        <el-step title="确定合作意向" description=""></el-step>
        <el-step title="联系我们，沟通功能需求" description=""></el-step>
        <el-step title="开发完成，联调测试" description=""></el-step>
        <el-step title="产品交接培训" description=""></el-step>
      </el-steps>
      <div style="height: 300px;margin-bottom: 40px" class="hidden-sm-and-up">
        <el-steps direction="vertical">
          <el-step title="确定合作意向"></el-step>
          <el-step title="联系我们，沟通功能需求"></el-step>
          <el-step title="开发完成，联调测试"></el-step>
          <el-step title="产品交接培训"></el-step>
        </el-steps>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          value2: 0,
          advantage: [
            {
              img: 'static/image/game1.png',
              tit: '快速安装接入',
              con: 'quickly',
              info:'客户端安装便捷，SDK一键出包，后台简便部署，快速高效解决游戏接入和部署问题'
            },
            {
              img: 'static/image/game2.png',
              tit: '数据安全无忧',
              con: 'security',
              info:'无第三方介入用户登录、支付流程、用户运营数据传输皆在公司内部更安全'
            },
            {
              img: 'static/image/game3.png',
              tit: '多维数据管理',
              con: 'dimensional analysis',
              info:'强大的后台管理系统，多游戏管理，参数维护，数据统计分析，让游戏运营轻松可靠'
            }
          ],
          Packing: [
            {
              tit: '用户管理',
              con: '用户自建平台，满足个性化定制需求',
              btn:'敬请期待',
              href:''
            },
            {
              tit: '支付体系',
              con: '公司内部的支付流程，数据传播更安全，沟通无障碍',
              btn:'了解更多>',
              href:'payment'
            },
            {
              tit: '数据平台',
              con: '强大的后台管理功能，多游戏管理，参数维护，数据统计分析，财务报表，让游戏运营轻松可靠',
              btn:'了解更多>',
              href:'dataSystem'
            }
          ]
        }
      },
      methods: {
        goPage(id){
            if(id){
              this.$router.push({
                path:'/product',
                query: {
                  id: id
                }
              });
            }
          }
      }
    }
</script>

<style scoped lang="less">
 .game-content{
   margin-left: -1px;
   .background{
     margin-bottom:64px;
     p{
       color: #7b8799;
     }
   }
   .advantage{
     margin-bottom:70px;
     .el-card{
       border:0;
     }
     .card{
       background: #fbfcfd;
       text-align: center;
       margin-top: 20px;
       img{
         margin: 40px auto 25px;
         width: 80px;
         height: 80px;
       }
       h4{
         color: #1f2d3d;
         font-weight: 400;
         margin: 0;
       }
       span{
         font-size: 14px;
         color: #99a9bf;
       }
     }
   }
   ul{
     margin-bottom: 50px;
     padding-left: 0;
     li{
       font-size: 14px;
       margin-bottom: 10px;
       color: #99a9bf;
     }
     li strong{
       font-weight: 400;
       color: #5e6d82;
     }
   }
   .Packing{
     h3{
       margin: 20px 0 40px 0;
       font-size: 22px;
     }
     .pack-card{
       h4{
         font-size: 18px;
       }
        p{
          color: #b7c1d2;
        }
        a{
          color:#409EFF;
          position: absolute;
          left: 20px;
          bottom: 15px;
        }
     }
   }
   .access{
     h3{
       margin: 65px 0 40px 0;
       font-size: 22px;
     }
   }
 }

</style>
