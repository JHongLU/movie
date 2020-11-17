<template>
    <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-icons :list="iconList"></home-icons>
      <home-recommend></home-recommend>
      <home-weekend></home-weekend>
    </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastCity: '',
      iconList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('index.json?city=' + this.city)
        .then(res => {
          res = res.data
          if (res.ret && res.data) {
            this.iconList = res.data.iconList
          }
        })
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>
<style lang="stylus">

</style>
