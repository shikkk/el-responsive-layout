<template>
  <div class="finance-content">
    <h2 >金融解决方案</h2>
    <div class="background">
      <h3>产品背景</h3>
      <h4>基于金融业务推出的风控解决方案</h4>
      <p>风控是整个金融业务的核心环节，对系统的稳定性、运行速度、灵活性有很高的要求，我们与金融团队沟通并确认需求后，为其推出的整套风控
解决方案，经过严格的审批流程验证、模型测试和数据校验，充分的保证了金融策略以及风控系统的完整性和安全性。</p>
    </div>
    <div class="function">
      <h3>产品功能</h3>
      <el-row type="flex" class="row-bg cards-div" justify="space-around">
        <el-col :span="6" class="cards-box">
          <el-card :body-style="{ padding: '15px 20px',position: 'relative' }" class="card" shadow="hover">
            <div class="function-card">
              <h4 class="blue">用户特征获取</h4>
              <ul>
                <li>设备特征</li>
                <li>进件特征</li>
              </ul>
              <em class="garden">1</em>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6" class="cards-box">
          <el-card :body-style="{ padding: '15px 20px',position: 'relative' }" class="card" shadow="hover">
            <div class="function-card">
              <h4 class="blue">风控核心类型</h4>
              <ul>
                <li>支持多类型&规则计算</li>
                <li>支持模型数配置</li>
                <li>进行多模型串行运算</li>
              </ul>
              <em class="garden">2</em>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6" class="cards-box">
          <el-card :body-style="{ padding: '15px 20px',position: 'relative' }" class="card" shadow="hover">
            <div class="function-card">
              <h4 class="blue">信贷评级</h4>
              <ul>
                <li>信贷政策针对不同客群灵活配置</li>
                <li>根据业务配置信用分、风险权重、概率限制等</li>
              </ul>
              <em class="garden">3</em>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="advantage">
      <h3>我们的优势</h3>
      <el-row >
        <el-col  :sm="20" :xs="24" v-for="(item,index) in advantage" :key="index">
          <el-row class="cards">
            <el-col :span="6" class="text-center">
              <img :src="item.img"/>
              <span>{{item.tit}}</span>
            </el-col>
            <el-col :span="18">
              <p v-html="item.con"></p>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="access">
      <h3>接入我们</h3>
      <el-steps class="hidden-xs-only">
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
            img: 'static/image/finance1.png',
            tit: '快速安装接入',
            con: '服务器对外部网络完全隔离，仅支持内部网络访问<br>服务器采用负载均衡设计，可实现自动转移错误，支持水平扩展',
          },
          {
            img: 'static/image/finance2.png',
            tit: '数据安全无忧',
            con: '支持大量特征数据的实时运算，响应速度快，性能优异',
          },
          {
            img: 'static/image/finance3.png',
            tit: '多维数据管理',
            con: '针对金融业务政策变化大的特点，支持模型、规则的灵活配置，更加贴合业务场景',
          }
        ]
      }
    }
  }
</script>

<style  lang="less">
  .finance-content{
    margin-left: -1px;
    .background{
      margin-bottom:64px;
      h4{
        margin: 32px 0 16px 0;
      }
      p{
        color: #7b8799;
      }
    }
    .function{
      h3{
        margin: 20px 0 40px 0;
        font-size: 22px;
      }
      .function-card{
        h4{
          font-size: 18px;
          margin-left: 10px;
        }
       ul{
         margin-top: 24px;
         li{
           color: #979797;
           line-height: 24px;
           list-style: disc;
           margin-left: 10px;
         }
       }
        .garden{
          display: inline-block;
          list-style: none;
          width: 40px;height: 40px;
          border-radius: 50%;
          background: #eff5fd;
          text-align: center;
          line-height: 40px;
          position: absolute;
          color: #409EFF;
          font-size: 20px;
          left: -20px;top: -20px;
        }
      }
      .el-card{
        overflow: inherit;
        min-height: 180px;
      }
      @media (min-width:1024px) and (max-width:1140px) {
        .el-card{
          min-height: 200px;
        }
      }
    }
    .advantage{
      h3{
        margin-bottom: 32px;
      }
      .cards{
        margin-bottom: 22px;
        padding: 15px 0 25px 0;
        background: #FBFCFD;
        span{
          margin-top: 11px;
          display: block;
        }
        p{
          margin: 40px 0 0 30px;
        }
      }
    }
    .access{
      h3{
        margin: 65px 0 40px 0;
        font-size: 22px;
      }
    }
    @media (max-width: 768px){
      .cards-div{
        display: block;
      }
      .cards-box{
        float: none;
        width: 80%;
        margin: 0 auto 30px;
      }
      .advantage{
        .cards p{
          margin: 20px 0 0 20px;
        }
      }
    }
  }

</style>
