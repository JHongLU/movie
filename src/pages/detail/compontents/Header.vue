<template>
  <router-link to="/" tag="div" class="top">
    <div class="bg" v-show="!showlogo" :style="opacityStyle"></div>
    <div class="logo" v-show="showlogo" :style="turnopacityStyle">FLim</div>
    <div class="dot" v-show="showlogo" :style="turnopacityStyle">...</div>
    <div class="iconfont back-icon" v-show="!showlogo" :style="opacityStyle">&#xe679;</div>
    <div class="filmtitle" v-show="!showlogo" :style="opacityStyle">TENET</div>
  </router-link>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showlogo: true,
      opacityStyle: {
        opacity: 0
      },
      turnopacityStyle: {
        opacity: 1
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top === 0) {
        const opacity = 1
        this.turnopacityStyle = { opacity }
      }
      if (top > 0 && top < 50) {
        let opacity = 5 / top
        opacity = opacity < 0.02 ? 0 : opacity
        this.turnopacityStyle = { opacity }
        this.showlogo = true
      }
      if (top > 40) {
        let opacity = top / 100
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showlogo = false
      } else {
        this.showlogo = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
    this.showlogo = true
    this.turnopacityStyle.opacity = 1
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus">
.top
  position: fixed
  width: 100%
  height: 1.3rem
  z-index: 1
  background: rgba(255, 255, 255, 0)
  .bg
    position: absolute
    background: rgba(255, 255, 255, .8)
    width: 100%
    height: 100%
    backdrop-filter: blur(15px)
    -webkit-backdrop-filter: blur(15px);
    z-index: -1
  .logo
    position: absolute
    color: #000
    font-size: 25px
    font-weight: 700
    top: .4rem
    left: .8rem
    font-family: PingFangSC-Regular, sans-serif
  .dot
    position: absolute
    color: #000
    font-weight:600
    font-size: 10px
    bottom : .25rem
    left: .8rem
  .back-icon
    position: absolute
    color: #000
    font-weight:600
    font-size: 20px
    bottom : .4rem
    left: .8rem
  .filmtitle
    position: absolute
    left 50%
    margin-left: -30px
    bottom : .4rem
    font-size: 22px
    font-weight:800
</style>
