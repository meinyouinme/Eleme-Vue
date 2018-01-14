<template>
  <ul class="ratings-list">
    <ratings-item v-for="rating in ratings" :key="rating.order_id" :rating="rating"/>
  </ul>
</template>

<script>
  import {mapState} from 'vuex'
  import RatingsItem from '@/components/RatingsItem/RatingsItem.vue'
  export default{
      computed:mapState(['ratings']),
      components:{
        RatingsItem
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .ratings-list
    background-color: #fff;
    padding: 0 .32rem;
    padding: 0 3.2vw;
    font-size: .36rem;
</style>
