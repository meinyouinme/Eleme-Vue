<template>
  <div class="menu-food-block" @scroll="handleScroll" id="food-block">
    <div class="food-block" v-for="(foodBlock,index) in menu" :key="foodBlock.id" :id="'block'+index">
      <div class="food-block-title">
        <h2>
          <strong>{{foodBlock.name}}</strong>
          <span>{{foodBlock.description}}</span>
        </h2>
      </div>
      <menu-food-list :foods="foodBlock.foods"/>
    </div>
  </div>
</template>

<script>
  import MenuFoodList from '@/components/MenuFoodList/MenuFoodList.vue'
  import {mapState} from 'vuex'
    export default{
      computed:mapState(['menu']),
      methods:{
        handleScroll(e){
          let wrapper=document.querySelector('.shop-detail-wrapper');
          wrapper.scrollTop=e.target.scrollTop;
        }
      },
      components:{
        MenuFoodList
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../util/util.styl";
  .menu-food-block
    width: 7.946667rem;
    width: 79.466667vw;
    padding-left: .16rem;
    padding-left: 1.6vw;
    height: 100%;
    overflow-y auto
    background #fff
    .food-block
      h2
        position: relative;
        padding: .2rem .8rem .2rem 0;
        padding: 2vw 8vw 2vw 0;
        display flex
        width 100%
        align-items center
        position relative
        &:after
          setBottomLine(#eee,0,0)
        strong
          margin-right: .133333rem;
          margin-right: 1.333333vw;
          font-weight: 700;
          font-size: .32rem;
          color: #666;
        span
          flex: 1;
          color: #999;
          font-size: .266667rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
</style>
