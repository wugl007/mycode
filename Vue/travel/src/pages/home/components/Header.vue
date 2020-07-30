<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon ">&#xe743;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe67e;</span>
      输入城市/景点/游玩主题</div>
    <router-link to="/city">
    <div class="header-right">
      {{city}}
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>//添加scoped关键字，规避组件之间的影响
/*1rem = html font-size = 50px 这里设置的font-size=50px*/
@import '~styles/variables.styl'
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size:.8rem
    .header-input
      flex:1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color:#ccc
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -.04rem
        font-size:.24rem
</style>
