<template>
<div>
  <detail-header></detail-header>
  <detail-banner></detail-banner>
  <film-title></film-title>
  <detail-star></detail-star>
  <detail-comment :comments="comments"></detail-comment>
</div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './compontents/Banner'
import DetailHeader from './compontents/Header'
import DetailStar from './compontents/Star'
import FilmTitle from './compontents/Filmtitle'
import DetailComment from './compontents/Comment'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailStar,
    FilmTitle,
    DetailComment
  },
  data () {
    return {
      comments: []
    }
  },
  methods: {
    getCommentInfo () {
      axios.get('comments.json')
        .then(res => {
          console.log(res)
          res = res.data
          if (res.ret && res.data) {
            this.comments = res.data.comment
          }
        })
    }
  },
  mounted () {
    this.getCommentInfo()
  }
}
</script>

<style lang="stylus">

</style>
