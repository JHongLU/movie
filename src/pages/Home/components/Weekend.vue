<template>
  <div>
    <div class="week-title">推荐</div>
    <ul>
      <li class="week-item border-bottom" v-for="item of picList" :key='item.id'>
        <img class="week-item-img" :src="item.imgUrl" alt="">
        <p class="week-info-title">{{item.infoTitle}}</p>
        <p class="week-info-content">{{item.infoContent}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      picList: [{
        id: '0001',
        imgUrl: 'http://img31.mtime.cn/pi/2016/07/23/132142.47915000_1000X1000.jpg',
        infoTitle: '神奇女侠',
        infoContent: 'XXXXXXXXXXXXXXXX'
      }, {
        id: '0002',
        imgUrl: 'http://img21.mtime.cn/pi/2012/05/27/114830.58828365_1000X1000.jpg',
        infoTitle: '蝙蝠侠·黑暗骑士崛起',
        infoContent: 'XXXXXXXXXXXXXXXX'
      }, {
        id: '0003',
        imgUrl: 'http://img31.mtime.cn/pi/2013/05/10/143700.17728944_1000X1000.jpg',
        infoTitle: '超人·钢铁之躯',
        infoContent: 'XXXXXXXXXXXXXXXX'
      }]
    }
  }
}
</script>
<style lang="stylus">
.week-title
  height: 0.6rem
  line-height: 0.6rem
  background: #eee
  padding-left .3rem
  font-size: 3.5vw
.week-item
  height:60vw
  display: grid
  grid-template-columns: 1fr
  grid-template-rows: 40vw 10vw 10vw
  padding: .5rem
  padding-bottom: 0
  .week-item-img
    object-fit: cover
    box-sizing: border-box
    width: 100%
    height: 100%
    border-radius: 10px
  .week-info-title
  .week-info-content
    line-height: 10vw
    padding-left .2rem
    font-size: 3.6vw
</style>
