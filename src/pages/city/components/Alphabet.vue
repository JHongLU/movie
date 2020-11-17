<template>
  <ul class="a-list">
    <li class="a-item"
    v-for="item of letters"
    :key="item"
    :ref="item"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    @click="handleLetterClick"
    >
    {{item}}</li>
  </ul>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchstatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs.A[0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (const i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchstatus = true
    },
    handleTouchMove (e) {
      if (this.touchstatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 93
          const index = Math.floor((touchY - this.startY) / 19)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 5)
      }
    },
    handleTouchEnd () {
      this.touchstatus = false
    }
  }
}
</script>
<style lang="stylus" scoped>
.a-list
  position: absolute
  right: 0
  top: 1.86rem
  bottom: 0
  width: .4rem
  display: flex
  flex-direction: column
  justify-content: center
  text-align: center
  .a-item
    line-height: .38rem
    color: #f1c40f
</style>
