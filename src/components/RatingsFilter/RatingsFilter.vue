<template>
  <div class="ratings-filter">
    <ul class="filter-wrapper">
      <li class="filter-item on">全部(1914)</li>
      <li class="filter-item">满意(1832)</li>
      <li class="filter-item off">不满意(82)</li>
      <li class="filter-item">有图(22)</li>
      <li class="filter-item">送货快(13)</li>
    </ul>
  </div>
</template>

<script>
    export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../util/util.styl";
  .ratings-filter
    background-color: #fff;
    padding: .266667rem .32rem 0;
    padding: 2.666667vw 3.2vw 0;
    font-size: .36rem;
    .filter-wrapper
      padding-bottom: .266667rem;
      padding-bottom: 2.666667vw;
      position relative
      &:after
        setBottomLine(#ddd,0,0)
      .filter-item
        display: inline-block;
        padding: 0 .24rem;
        padding: 0 2.4vw;
        height: .746667rem;
        height: 7.466667vw;
        line-height: .746667rem;
        line-height: 7.466667vw;
        margin: .093333rem;
        margin: .933333vw;
        font-size: .32rem;
        border-radius: .053333rem;
        border-radius: .533333vw;
        color: #6d7885;
        background-color: #ebf5ff;
        &.on
          color: #fff;
          background-color: #0097ff;
        &.off
          color: #aaa;
          background-color: #f5f5f5;
</style>
