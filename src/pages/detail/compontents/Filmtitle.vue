<template>
<div class="titlearea">
  <div class="title">
    <div class="filmtitle">信条</div>
    <div class="Efilmtitle">TENET</div>
  </div>
  <div class="summaryarea">
    <div class="summarytitle">剧情简介</div>
    <div class="summary">
      世界存亡危在旦夕，“信条”一词是惟一的线索与武器。主人公穿梭于全球各地，开展特工活动，
      力求揭示“信条”之谜，并完成一项超越了真实时间的神秘任务。这项任务并非时间之旅，而是【时空逆转】。
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'FilmTitle'
}
</script>

<style lang="stylus">
.titlearea
  position: relative
  background-color: #fff
  top: 3.5vw
  border-top: 2px #fff solid
  border-top-right-radius: .8rem
  border-top-left-radius: .8rem
  font-family: pingfang SC
  .title
    padding: 0 20px
    margin-top: 30px
    .filmtitle
      font-size: 35px
      font-weight: 1000
    .Efilmtitle
      font-size: 17px
      margin-top: 10px
  .summaryarea
    padding: 30px 20px
    .summarytitle
      font-size: 20px
      font-weight: 600
    .summary
      font-size: 14px
      margin-top: 15px
      text-indent: 30px
      line-height: 20px
</style>
