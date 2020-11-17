<template>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icons">
          <div class="icon" v-for="item of page" :key="item.id">
            <div class="iconfonts">
              <div class="iconfont filmicons" :style="item.imgbg">{{item.imgUrl}}</div>
            </div>
            <p class="iconfont-text">{{item.desc}}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>

</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus">
  .icons
    display: grid
    grid-template-columns: repeat(4, 1fr)
    grid-template-rows: 25vw 25vw
    .icon
      width: 100%
      height: 100%
      position: relative
      display: grid
      grid-template-columns: 1fr
      grid-template-rows: 3fr 1fr
      .iconfont-text
        position: absolute
        bottom: 0
        left: 0
        right: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        font-size: .33rem
        color: #333
        font-weight: 600
      .iconfonts
        margin: 10px 30px 0 30px
        display: flex
        justify-content: center
        align-items: center
        .filmicons
          font-size: 9vw
</style>
