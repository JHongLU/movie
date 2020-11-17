<template>
<div class="StarContent">
  <div class="startitle">Actors</div>
  <div class="starinfos" ref="scrollWrapper">
    <div class="wrapper-content">
      <div class="starinfo" v-for="item of starinfo" :key="item.id">
        <img class="starImg" :src="item.image" alt="">
        <div class="name">
          <div class="cn">{{item.CNname}}</div>
          <div class="en">{{item.ENname}}</div>
          <div class="roles">{{item.Roles}}</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  name: 'DetailStar',
  data () {
    return {
      starinfo: [{
        id: 1,
        image: 'http://img5.mtime.cn/ph/2020/03/16/161500.25123920_290X440X4.jpg',
        CNname: '克里斯托弗·诺兰',
        ENname: 'Christopher Nolan',
        Roles: '导演'
      }, {
        id: 2,
        image: 'http://img5.mtime.cn/ph/2020/09/06/120825.97113756_290X440X4.jpg',
        CNname: '约翰·大卫·华盛顿',
        ENname: 'John David Washington',
        Roles: '饰 男主人公'
      }, {
        id: 3,
        image: 'http://img5.mtime.cn/ph/2020/09/05/175043.77184868_290X440X4.jpg',
        CNname: '罗伯特·帕丁森',
        ENname: 'Robert Pattinson',
        Roles: '饰 尼尔 Neil'
      }, {
        id: 4,
        image: 'http://img31.mtime.cn/ph/2014/03/14/153559.77544956_290X440X4.jpg',
        CNname: '伊丽莎白·德比齐',
        ENname: 'Elizabeth Debicki',
        Roles: '饰 凯特 Kat'
      }, {
        id: 5,
        image: 'http://img31.mtime.cn/ph/2015/02/28/102059.28429350_290X440X4.jpg',
        CNname: '肯尼思·布拉纳',
        ENname: 'Kenneth Branagh',
        Roles: '饰 安德烈·塞特 Andrei Sator'
      }, {
        id: 6,
        image: 'http://img31.mtime.cn/ph/2016/09/03/193437.51247152_290X440X4.jpg',
        CNname: '迈克尔·凯恩',
        ENname: 'Michael Caine',
        Roles: '饰 迈克尔公爵 Michael Crosby'
      }]
    }
  },
  mounted () {
    this.initScroll()
    console.log(this.scroll)
  },
  methods: {
    initScroll () {
      this.scroll = new BScroll(this.$refs.scrollWrapper, {
        scrollX: true,
        eventPassthrough: 'vertical',
        disableMouse: false,
        disableTouch: false
      })
    }
  }
}
</script>

<style lang="stylus">
.StarContent
  position: relative
  top: -4vw
  .startitle
    margin-left: 20px
    margin-top: 50px
    font-size: 25px
  .starinfos
    touch-action: pan-y
    position: relative
    margin-top: 12px
    white-space: nowrap
    .wrapper-content
      display: inline-block
      .starinfo
        display: inline-block
        margin: 15px
        width: 1.9rem
        .starImg
          border-radius: 9px
          width: 1.9rem
          height: 2.7rem
          object-fit: cover
          box-shadow 4px 4px 8px #999
        .name
          font-size: 15px
          margin-top: 20px
          white-space:nowrap
          overflow:hidden
          text-overflow:ellipsis
          .cn
            font-weight: 600
            white-space:nowrap
            overflow:hidden
            text-overflow:ellipsis
          .en
            font-size: 12px
            margin-top: 8px
            white-space:nowrap
            overflow:hidden
            text-overflow:ellipsis
          .roles
            font-size: 12px
            margin-top: 8px
            white-space:nowrap
            overflow:hidden
            text-overflow:ellipsis
</style>
