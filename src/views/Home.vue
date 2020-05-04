<template>
  <div class="wrapper">
      <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
        <!-- slides -->
        <swiper-slide class="page1"></swiper-slide>
        <swiper-slide class="page2"></swiper-slide>
      </swiper>
      <div class="logo"><img src="../assets/images/logo.png" alt="logo"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {
      keyword: '',
      swiperOption: {
        direction: 'vertical',
        // 滑动速度
        speed: 500
      }
    }
  }
}
</script>
<style lang="scss">
.wrapper,.swiper-container{
  width: 100% !important;
  height: 100% !important;
  padding-bottom: 0 !important;
  background: #fff !important;
}
.wrapper >>> .swiper-pagination-bullet-active{
  background: #fff !important;
}
.wrapper{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 26.6666667%;
    background:#ccc;
    .swiper-item{
        width: 100%;
        .swiper-img{
          width: 100%;
        }
    }
}
.swiper-slide{
  background: url('../assets/images/p1/bg.jpg') center no-repeat;
  background-size: 100% 100%;
}
.logo{
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 12;
}
.logo img{
  width: 257px;
  height: 53px;
}
</style>
