<template>
  <div>
    <div class="title">推荐</div>
    <ul>
      <router-link
        to="/detail"
        tag="li"
        class="item border-bottom"
        v-for="item of recommendList"
        :key='item.id'
      >
        <p class="info-title">{{item.infoTitle}}</p>
        <p class="info-content">{{item.infoContent}}</p>
        <img class="item-img" :src="item.imgUrl" alt="">
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img5.mtime.cn/pi/2020/08/26/110208.47581761_1000X1000.jpg',
        infoTitle: '信条（TENET）',
        infoContent: '点击查看详情'
      }, {
        id: '0002',
        imgUrl: 'http://img5.mtime.cn/pi/2020/04/09/155032.64545025_1000X1000.jpg',
        infoTitle: '1917',
        infoContent: 'XXXXXXXXXXXXXXXX'
      }, {
        id: '0003',
        imgUrl: 'http://img5.mtime.cn/pi/2019/04/08/141058.48905124_1000X1000.jpg',
        infoTitle: '寄生虫（Parasite）',
        infoContent: 'XXXXXXXXXXXXXXXX'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
.title
  margin-top: .2rem
  line-height: .6rem
  padding-left: .3rem
  background: #eee
  font-size: 3.5vw
.item
  padding-left: .1rem
  margin-top: .3rem
  margin-bottom: .3rem
  height: 2.3rem
  display: grid
  grid-template-areas: "img title" "img content"
  grid-template-rows: 1fr 1fr
  grid-template-columns: 1.92rem 1fr
  font-size: 12px
  .item-img
    grid-area: img
    height: 100%
    width: 100%
    object-fit: contain
  .info-title
    grid-area: title
    line-height: 1.15rem
    padding-left .2rem
    font-size: 3.9vw
    font-weight: 600
  .info-content
    grid-area: content
    color: #ccc
    padding-left: .2rem
    font-size: 3vw
</style>
