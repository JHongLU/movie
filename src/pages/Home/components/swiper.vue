<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide class="swiper-imgs" v-for="item of swiperList" :key="item.id">
        <img  class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true,
        spaceBetween: 20,
        autoplay: 4000
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img5.mtime.cn/pi/2020/08/26/162307.58573548_1000X1000.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img5.mtime.cn/pi/2019/03/24/094909.60000890_1000X1000.jpg'
      }, {
        id: '0003',
        imgUrl: 'http://img5.mtime.cn/pi/2020/08/07/113701.30780349_1000X1000.jpg'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #f1c40f
  .wrapper
    margin-top: 1.4rem
    width: 100%
    height: 41.86vw
    background-attachment: #eee
    .swiper-imgs
      display: flex
      justify-content : center
      align-items: center
      .swiper-img
        height: 42vw
        object-fit: cover
        width: 93%
        border-radius: 10px
</style>
