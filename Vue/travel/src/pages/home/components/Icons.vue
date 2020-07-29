<template>
    <div class="icons">
      <swiper>
        <swiper-slide v-for="(page,index) of pages" :key="index">
          <div class="icon"
          v-for="item of page"
          :key="item.id">
            <div class="icon-img">
              <img class="icon-img-content" :src="item.imgUrl"/>
            </div>
              <p class="icon-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'Icons',
  data () {
    return {
      iconList: [
        {id: '001', imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png', desc: '热门景点'},
        {id: '002', imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png', desc: '热门景点'},
        {id: '003', imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png', desc: '热门景点'},
        {id: '004', imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png', desc: '热门景点'},
        {id: '005', imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png', desc: '热门景点'},
        {id: '006', imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png', desc: '热门景点'},
        {id: '007', imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png', desc: '热门景点'},
        {id: '008', imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png', desc: '热门景点'},
        {id: '009', imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png', desc: '热门景点'}
      ]
    }
  },
  computed: {
    pages () {
      // 创建分页 多页拖动
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/variables"
  @import "~styles/mixins"
  .icons >>> .swiper-container  // 使用穿透的方式，使得.swiper-container类作用在icons上，与icons同级，从而使得.swiper-container（自带了overflow:hidden属性）高度为incons高度 保障滑动的块包裹整个区域
    height: 0
    padding-bottom: 50%
  .icons
      margin-top: .1rem
   .icon
     position: relative
     overflow: hidden
     float: left
     width: 25%
     height: 0
     padding-bottom: 25%
     .icon-img
       position: absolute
       top: 0
       left: 0
       right: 0
       bottom: .44rem
       box-sizing: border-box
       padding: .1rem
       .icon-img-content
         display: block
         margin: 0 auto
         height: 100%
     .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: .44rem
      line-height: .44rem
      text-align: center
      color: $darkTextColor
      ellipsis()
</style>
