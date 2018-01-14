<template>
  <div class="shop-detail-menu">
    <div class="menu-inner">
      <menu-category/>
      <menu-food-block/>
    </div>
    <menu-cart/>
    <dialog-cart/>
  </div>
</template>

<script>
  import MenuCategory from '@/components/MenuCategory/MenuCategory.vue'
  import MenuFoodBlock from '@/components/MenuFoodBlock/MenuFoodBlock.vue'
  import MenuCart from '@/components/MenuCart/MenuCart.vue'
  import DialogCart from '@/components/DialogCart/DialogCart.vue'
    export default{
      components:{
        MenuCategory,
        MenuFoodBlock,
        MenuCart,
        DialogCart
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .shop-detail-menu
    height 100%
    padding-bottom 1.28rem;
    padding-bottom 12.8vw;
    .menu-inner
      display flex
      height 100%

</style>
