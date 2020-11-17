<template>
    <div class="header" ref="headerEl">
      <div class="bg"></div>
      <div class="header-left">
        <div class="iconfont back-icon">FLim</div>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe65c;</span>
        <input class="header-input-area" type="text" placeholder="搜索电影">
      </div>
      <router-link to="/city">
        <div class="header-right">
          {{this.city}}
          <span class="iconfont pull-down">&#xe79b;</span>
        </div>
      </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
  .header
    height: 1.2rem
    position: fixed
    z-index:2
    top: 0
    width: 100%
    display: flex
    line-height: 1rem
    background: rgba(255,255,255,.8)
    color: #000
    .bg
      position: absolute
      width: 100%
      height: 100%
      backdrop-filter: blur(15px)
      z-index: -1
    .header-left
      width: .64rem
      float: left
      .back-icon
        margin-left: 4vw
        height: 100%
        line-height: 1.2rem
        text-align: center
        font-size: .6rem
        font-weight: 600
    .header-input
      flex: 1
      background: #ecf0f1
      border-radius: .6rem
      height: .7rem
      line-height: .7rem
      margin-top: .3rem
      margin-bottom: .3rem
      margin-left: 1.7rem
      padding-left .2rem
      color: #000
      font-size:16px
      .header-input-area
        background: #ecf0f1
        width: 80%
        margin-left: 10px
    .header-right
      min-width: 1.2rem
      line-height:1.2rem
      float: right
      text-align: center
      color: #000
      font-size: .26rem
      .pull-down
        font-size: .05rem
        margin-left: -.05rem
        color: #f1c40f
</style>
