<template>
  <img class="shop-detail-shell" src="./shell-shop-detail.svg" alt=""/>
</template>

<script>
    export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @keyframes shellPulse
    0%
      opacity 1
    50%
      opacity .6
    100%
      opacity 1
  .shop-detail-shell
    width 100%
    animation: shellPulse 1s infinite;
</style>
