<template>
<div>
  <div class="search">
    <input v-model="keyword" type="text" class="search-input" placeholder="输入城市或拼音">
  </div>
  <div class="search-content" ref="search" v-show="keyword">
    <ul>
      <li class="search-item" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
      <li class="search-item" v-show="hasNoData">没有匹配项</li>
    </ul>
  </div>
</div>
</template>
<script>
import BScroll from '@better-scroll/core'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  updated () {
    this.scroll = new BScroll(this.$refs.search)
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (const i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 5)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .search
    box-sizing: border-box
    height: 1rem
    background: #fff
    padding: .2rem .3rem
    .search-input
      box-sizing: border-box
      width: 100%
      height: .60rem
      border-radius: 5px
      padding: 0 .1rem
      text-align: center
      background-color: #d9d9d9
    .search-input::-webkit-input-placeholder
        color: #353535
  .search-content
    position: absolute
    z-index: 1
    top: 1.86rem
    left: 0
    right: 0
    bottom: 0
    background: rgba(255,255,255,.6)
    backdrop-filter: blur(4px)
    .search-item
      line-height: .62rem
      color: #666
      padding-left: .2rem
      background: rgba(255,255,255,.5)
</style>
