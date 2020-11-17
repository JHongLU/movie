<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe679;</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
.header
  position: relative
  height: .86rem
  line-height: .86rem
  text-align: center
  background-color: #fff
  color: #000
  .header-back
    position: absolute
    color: #f1c40f
    left: 10px
    top: 0
</style>
