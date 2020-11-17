<template>
<div class="commentsArea">
  <div class="commentHeader">
    <div class="commenttitle">短评</div>
    <div class="AllComments">全部12345条<p class="iconfont comment-back-icon">&#xe79f;</p></div>
  </div>
  <div class="commentList">
    <ul class="comments">
      <li class="comment" v-for="(item, index) of comments" :key="item.id">
        <div class="commentUserInfo">
          <img class="commentUserInfoImg" :src="item.img" alt="">
          <p class="commentUserInfoName">{{item.name}}</p>
          <p class="commentUserInfoTime">{{item.time}}</p>
        </div>
        <div class="commentDetail fold" ref="isFold">{{item.commentDetail}}</div>
        <div class="show" @click="handleFold(index)" v-show="item.fold">展开</div>
        <div class="show" @click="handleFold(index)" v-show="!item.fold">收起</div>
      </li>
    </ul>
  </div>
  <div class="lookmore">查看全部短评</div>
</div>
</template>

<script>
export default {
  name: 'DetailComment',
  props: {
    comments: Array
  },
  data () {
    return {
      foldBool: true
    }
  },
  methods: {
    handleFold (index) {
      this.foldBool = !this.foldBool
      const el = this.$refs.isFold[index]
      if (el.getAttribute('class').includes('fold')) {
        el.setAttribute('class', 'commentDetail open')
      } else {
        el.setAttribute('class', 'commentDetail fold')
      }
      this.comments[index].fold = !this.comments[index].fold
    }
  }
}
</script>

<style lang="stylus">
*
  font-family: pingfang SC
.commentsArea
  margin: 0 25px
  background-color: #f1f2f6
  // height: 500px
  border-radius: 7px
  padding: 15px
  margin-bottom: 50px
  .commentHeader
    height: 30px
    position: relative
    .commenttitle
      float: left
      font-size: 16px
      font-weight: 600
    .AllComments
      float: right
      font-size: 13px
      .comment-back-icon
        float: right
        margin-left: 5px
  .commentList
    position: relative
    .comment
      margin-top: 25px
      margin-bottom: 10px
      padding-bottom: 10px
      border-bottom 1px solid #bdc3c7
      .commentUserInfo
        // position: absolute
        width: 100%
        display: grid
        grid-template-areas: "img name" "img time"
        grid-template-columns: 50px 1fr
        grid-template-rows: 1fr 1fr
        .commentUserInfoImg
          grid-area: img
          height: 34px
          width: 34px
          border-radius: 50%
        .commentUserInfoName
          grid-area: name
          // position: absolute
          font-size: 16px
          font-weight: 600
        .commentUserInfoTime
          grid-area: time
          // position: absolute
          margin-top: 5px
          font-size: 12px
    .commentDetail
      // position: relative
      margin-top: 20px
      font-size: 14px
      font-weight: 600
      line-height: 19px
      box-sizing: border-box
      // height: 60px
      display: -webkit-box
      overflow: hidden
      -webkit-box-orient: vertical
    .commentDetail.fold
      -webkit-line-clamp: 4
    .commentDetail.open
      -webkit-line-clamp: 100
    .show
      margin-top: 3px
      margin-left: 87%
  .lookmore
    line-height: 25px
    font-weight: 600
</style>
