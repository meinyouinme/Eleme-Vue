<template>
  <ul class="food-list">
    <menu-food v-for="food in foods" :key="food.item_id" :food="food"/>
  </ul>
</template>

<script>
  import MenuFood from '@/components/MenuFood/MenuFood.vue'
    export default{
      props:['foods'],
      components:{
        MenuFood
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
