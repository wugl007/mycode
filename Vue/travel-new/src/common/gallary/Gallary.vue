<template>
<div class="container"  @click="handleGallaryClick">
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide
        v-for="(item, index) of imgs"
        :key="index"  >
        <img class="gallary-img" :src="item" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction', // 分式显示
        observeParents: true, // 父级发生变化时自动刷新
        observer: true // 发生变化时自动刷新
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container // 这里需要去掉overflow：hidden 让绝对定位的页码显示出来
    overflow: inherit
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
      height: 0
      width: 100%
      padding-bottom: 100%
      .gallary-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>
