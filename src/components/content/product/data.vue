<template>
  <div class="data-content">
    <h2 >数据系统</h2>
    <div class="background">
      <h3>产品背景</h3>
      <h4>DataX支持自定义报表，可根据需求快速产出报表，让你的数据应付自如~</h4>
      <div class="cards-box">
        <el-row  :gutter="40" class="row-bg" >
          <el-col  :sm="8" :xs="24" class="m-mb20">
            <el-card class="box-card" shadow="hover">
              <img src="../../../../static/image/data-icon1.png"/>
              <h5 class="blue">无报表时代</h5>
              <p>从数据抽取、制作报表、分析结果全部人工实现</p>
              <ul>
                <li>准确度低</li>
                <li>效率低</li>
                <li>工作繁琐</li>
              </ul>
            </el-card>
          </el-col>
          <el-col  :sm="8" :xs="24" class="m-mb20">
            <el-card class="box-card" shadow="hover">
              <img src="../../../../static/image/data-icon2.png"/>
              <h5 class="blue">传统报表时代</h5>
              <p>业务提需求，平台部门做报表</p>
              <ul>
                <li>需求沟通时间长</li>
                <li>开发成本高</li>
                <li>实现周期长</li>
              </ul>
            </el-card>
          </el-col>
          <el-col  :sm="8" :xs="24" class="m-mb20">
            <el-card class="box-card" shadow="hover">
              <img src="../../../../static/image/data-icon3.png"/>
              <h5 class="blue">自定义报表时代</h5>
              <p>DataX自助式报表系统</p>
              <ul>
                <li>效率高</li>
                <li>个性化定制</li>
                <li>覆盖广</li>
              </ul>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <p class="introduce">在面临业务需求增多、数据获取多样、开发成本高的压力下，我们推出DataX自定义报表系统。</p>
    </div>
    <div class="goods">
      <h3>产品优势</h3>
      <ul>
        <li >
          <strong >效率高：</strong>
          半小时出报表，快速获取数据&分析的结果
        </li>
        <li>
          <strong>易操作：</strong>
          自定义报表系统，拖拽式操作，半小时快速出报表。
         </li>
        <li>
          <strong>样式多：</strong>
          交叉表、柱状图、地图、漏斗图等多种图表样式，让你的报表随你所想
        </li>
        <li>
          <strong>个性化定制：</strong>
          Dashbroad、报表、交互分析等多种数据需求，均可满足
        </li>
        <li>
          <strong>数据源覆盖广：</strong>
          ES、MYSQL等，支持多种数据存储，报表的展示在几秒内
        </li>
      </ul>
    </div>
    <div class="access">
      <h3>使用方法</h3>
      <h4>如何使用DataX</h4>
      <el-steps class="hidden-xs-only">
        <el-step title="添加数据源" description=""></el-step>
        <el-step title="抽取数据集" description=""></el-step>
        <el-step title="生成图表" description=""></el-step>
        <el-step title="组合报表" description=""></el-step>
        <el-step title="报表展示" description=""></el-step>
      </el-steps>
      <div style="height: 400px;margin-bottom: 40px" class="hidden-sm-and-up">
        <el-steps direction="vertical">
          <el-step title="添加数据源"></el-step>
          <el-step title="抽取数据集"></el-step>
          <el-step title="生成图表"></el-step>
          <el-step title="组合报表"></el-step>
          <el-step title="报表展示"></el-step>
        </el-steps>
      </div>
      <div style="padding-top: 32px">
        <video controls
               class="video"
               x5-video-player-type="h5"
               x5-video-player-fullscreen="true"
               x5-video-orientation="portraint"
               poster="/static/image/video.jpg"
        >
          <source src="static/video/DataxoOperate2.mp4" type="video/mp4">
          您的浏览器不支持 HTML5 video 标签。
        </video>
      </div>
      <div class="download">
        <a href="static/file/datax操作文档.pdf">
          <i class="el-icon-download"></i>
          操作文档下载
        </a>
      </div>
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
  .data-content{
    margin-left: -1px;
    .background{
      margin-bottom:64px;
      h4{
        margin: 30px 0 32px 0;
      }
      .cards-box{
        margin: 10px 0 18px 0;
        .box-card{
          background: #fbfcfd;
          h5{
            font-size: 18px;
            margin: 18px 0;
          }
          p{
            color: #333333;
            min-height: 45px;
          }
          ul{
            margin-top: 10px;
          }
          li{
            color: #979797;
            line-height: 28px;
          }

        }
      }
    }
    .goods{
      ul{
        margin-bottom: 50px;
        margin-top: 30px;
        padding-left: 0;
        li{
          font-size: 14px;
          margin-bottom: 10px;
          color: #979797;
        }
        li strong{
          font-weight: 400;
          color: #5e6d82;
        }
      }
    }
    .access{
      h4{
        font-size: 18px;
        margin: 32px 0 16px 0;
      }
      h3{
        margin: 65px 0 40px 0;
        font-size: 22px;
      }
      .download{
        margin-top: 50px;
      }
      .video{
        width: 550px;
      }
      @media (max-width: 768px){
        .video{
          width: 100%;
        }
      }
    }
  }

</style>
