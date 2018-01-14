<template>
  <div class="food-opt">
    <div class="opt-minus" @click="handleMinusNum" v-if="food.food_num>0">
      <svg>
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-add"></use>
      </svg>
    </div>
    <div class="opt-num" v-if="food.food_num>0">{{food.food_num}}</div>
    <div class="opt-add" @click="handleAddNum($event)">
      <svg>
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus"></use>
      </svg>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default{
    props: ['food','isInCart'],
    computed:mapGetters(['cartCount']),
    methods: {
      handleMinusNum(){
        this.$store.commit('deleteCart', this.food)
        if(this.isInCart&&this.cartCount===0){
          this.$store.commit('toggleDialogCart')
        }
      },
      handleAddNum(e){
        this.$store.commit('bounceBall',e)
        this.$store.commit('addCart', this.food)
        this.$store.commit('addCartShake')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .food-opt
    .opt-minus
      display: inline-block;
      padding: .093333rem;
      padding: .933333vw;
      vertical-align: middle;
      text-decoration: none;
      svg
        vertical-align: middle;
        fill: #2395ff;
        width (40 / 75) rem
        height (40 / 75) rem
    .opt-num
      display: inline-block;
      text-align: center;
      color: #666;
      vertical-align: middle;
      font-size: .373333rem;
      min-width: .4rem;
      min-width: 4vw;
      max-width: 2em;
      overflow: hidden;
    .opt-add
      display: inline-block;
      padding: .093333rem;
      padding: .933333vw;
      vertical-align: middle;
      text-decoration: none;
      svg
        vertical-align: middle;
        fill: #2395ff;
        width (40 / 75) rem
        height (40 / 75) rem
</style>
