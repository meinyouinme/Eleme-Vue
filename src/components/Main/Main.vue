<template>
  <div class="shop-tab-main">
      <v-menu v-show="tabIndex===0"/>
      <ratings v-show="tabIndex===1"/>
      <extras v-show="tabIndex===2"/>
  </div>
</template>

<script>
  import Menu from '@/components/Menu/Menu.vue'
  import Extras from '@/components/Extras/Extras.vue'
  import Ratings from '@/components/Ratings/Ratings.vue'

  import { mapState } from 'vuex'

  import menu from '../../data/menu.json'
  import extras from '../../data/extras.json'
  import ratings from '../../data/ratings.json'
  import scores from '../../data/scores.json'
    export default{
      computed:mapState(['tabIndex']),
      components:{
        Extras,
        Ratings,
        'v-menu':Menu
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
