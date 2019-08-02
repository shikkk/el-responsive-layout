<template>
  <div>
    <div class="container">
      <div class="contact-us text-center">
        <dl>
          <dt class="h2">联系我</dt>
          <dd>有任何使用和体验问题，请联系我们</dd>
        </dl>
       <dl >
            <dt class="h3" style="margin-right: 36px">邮箱联系</dt>
            <dd class="gray">13664888971@163.com</dd>
        </dl>
        <dl>
          <dt class="h3">部门地址</dt>
          <dd class="gray">部门地址：</dd>
        </dl>
        <div>
          <!-- <img src="../../../../static/image/address2.jpg" style="width: 100%"> -->
        </div>
      </div>
    </div>
    <div class="bottom-side">
      ©2018 石志凯 13664888971@163.com
  </div>
  </div>
</template>

<script>
export default {
  name: 'contactUs'
}
</script>

<style scoped lang="less">
  .contact-us{
    padding-top: 55px;
    .h2{
      font-size: 28px;
    }
    .h3{
      font-size: 22px;
    }
    dl{
      margin-bottom: 72px;
      dd{
        margin-top: 18px;
      }
      .weixin{
        display: inline-block;
        width: 162px;
        height: 162px;
      }

    }
    .mr32{
      margin-right: 32px;
    }
    .ml32{
      margin-left: 32px;
    }
  }
  .bottom-side{
    color: #ababab;
    margin-top: 100px;
    height: 68px;
    background: #f7fbfd;
    text-align: center;
    padding-top: 32px;
  }
  @media (max-width: 768px){
    .contact-us{
      .mr32,.ml32{
        margin-right: 0;
        margin-left: 0;
      }
      dl{
        text-align: center!important;
      }
      dt{
        margin-right: 0!important;
      }
    }
  }
</style>
