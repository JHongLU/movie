<template>
<div class="banner">
  <div class="bannerImg">
    <div class="bg"></div>
    <img class="flimimg" src="http://img5.mtime.cn/pi/2020/05/22/092751.16493176_1000X1000.jpg" alt="">
  </div>
</div>
</template>

<script>
export default {
  name: 'DetailBanner',
  data () {
    return {
      url: 'http://img5.mtime.cn/pi/2020/05/22/092751.16493176_1000X1000.jpg'
    }
  },
  methods: {
    getImg (url) {
      console.log(url)
      if (url !== undefined) {
        return url[0].replace(/http\w{0,1}:\/\/p/g, 'http://images.weserv.nl/?url=p')
      }
    }
  }
}
</script>

<style lang="stylus">
.banner
  position: relative
  .bannerImg
    display: flex
    justify-content: center
    align-items: center
    width: 100%
    height: 6rem
    .bg
      float: left
      width: 100%
      height: 130%
      background-image: url('http://img5.mtime.cn/pi/2020/05/22/092751.16493176_1000X1000.jpg')
      background-position: center
      background-size: cover
      -webkit-filter: blur(15px);
      -moz-filter: blur(15px);
      -o-filter: blur(15px);
      -ms-filter: blur(15px);
      filter: blur(18px);
    .flimimg
      position: absolute
      top: 1.5rem
      width: 80%
      border-radius: 8px
      // box-shadow: 8px 8px 5px #aaa
  .title
    margin-top: 10px
    display: flex
    justify-content: center
    font-size: 30px
    font-family: PingFangSC-Regular, sans-serif
    font-weight:600
    .title-1
      margin: 0 10px
    .title-2
      margin: 0 10px
  .Etitle
    margin-top: 10px
    display: flex
    justify-content: center
</style>
