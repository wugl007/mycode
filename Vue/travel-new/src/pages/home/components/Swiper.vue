<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwipe">
      <swiper-slide v-for= "item of list" :key="item.id" >
        <img
          class="swiper-img"
          :src="item.imgUrl"
        />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        // pagination 是生成轮播图的小按钮
        pagination: '.swiper-pagination',
        loop: true // 控制轮播图循环切换
      }
    }
  },
  computed: {
    showSwipe () {
      return this.list.length // 增加一个挂载判断，先接受数据再挂载dom，解决轮播呈现在最后一张的bug
    }
  }
}
</script>

<style lang="stylus" scoped>
  // 穿透类显示
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background-color: #ccc;

  .swiper-img {
    width: 100%;
  }
}
</style>
