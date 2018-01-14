<template>
  <div class="star">
    <div class="star-gray">
      <img src="./star-gray.svg" class="star-img" alt=""/>
    </div>
    <div class="star-color" :style="{width: rating / 5 * 100 + '%'}">
    <img src="./star-color.svg" class="star-img" alt=""/>
  </div>
  </div>
</template>

<script>
    export default{
        props:['rating']
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../util/util.styl'
  .star
    width 100%
    height 100%
    position relative
    .star-img
      widthAndHeight(112,20)
    .star-gray
      width 100%
      height 100%
    .star-color
      height 100%
      width 100%
      position absolute
      left 0
      top 0
      overflow hidden
      z-index 2

</style>
