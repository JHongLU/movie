<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-warpper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-warpper"
            v-for="item of hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title list-title">{{key}}</div>
        <div class="item-list">
          <div class="item"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  updated () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
    })
  },
  activated () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
    })
    console.log('act')
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
}
</script>

<style lang="stylus" scoped>
.list
  position: absolute
  top: 1.86rem
  left:0
  right: 0
  bottom: 0
  overflow: hidden
  .title
    line-height: .44rem
    background: #eeeeee
    padding-left: .2rem
  .list-title
    margin-top: .1rem
    color: #f1c40f
  .button-list
    padding: .2rem .4rem .2rem .2rem
    overflow: hidden
    .button-warpper
      float: left
      width:33.33%
      .button
        border: 1px solid #f1c40f
        text-align: center
        padding: .15rem .1rem
        margin: .1rem
        border-radius: 5px
        font-size: 12px
  .item-list
    .item
      line-height: .64rem
      color: #666
      padding-left: .2rem
      border-bottom 1px solid #ccc
    .item:last-of-type
      border-bottom: none
</style>
