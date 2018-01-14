<template>
  <div :class="dialogCart?'dialog-cart cart-show':'dialog-cart'">
    <transition>
      <div class="dialog-cart-mask" @click="handleToggleCartList" v-if="dialogCart">
      </div>
    </transition>
  <div class="dialog-cart-content">
    <div class="discount-tip" v-html="tip">
    </div>
  <div class="cart-title">
  <p>已选商品</p>
  <div class="cart-clear" @click="handleClearCart">
    <svg>
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-remove"></use>
    </svg>
    <span>清空</span>
  </div>
  </div>
  <div class="cart-main">
    <ul>
      <li :key="food.item_id" v-for="food in cartFoods">
        <div class="cart-item-name"><em>{{food.name}}</em></div>
        <div class="cart-item-price">
          <span class="item-oldPrice" v-if="food.specfoods[0].original_price">¥{{food.specfoods[0].original_price}}</span>
          <span class="item-newPrice">¥{{food.specfoods[0].price}}</span>
        </div>
        <div class="cart-item-opt">
          <menu-food-opt :food="food" :isInCart="true"/>
        </div>
      </li>
    </ul>
  </div>
  </div>
  </div>
</template>

<script>
  import MenuFoodOpt from '@/components/MenuFoodOpt/MenuFoodOpt.vue'
  import {mapState,mapGetters} from 'vuex'
    export default{
      computed:{
        ...mapGetters(['cartFoods','cartTotal']),
        ...mapState(['extras','dialogCart']),
        tip(){
          // 这里处理优惠问题 满30减18  满50减30
          const attribute=JSON.parse(this.extras.activities[0].attribute);
          const rules = Object.keys(attribute);
          const totalNewPrice = this.cartTotal.newPrice;
          let index=-1;
          // 计算当前总价在优惠里的区间
          for(let i=0,length=rules.length;i<length;i++){
            if(totalNewPrice>=rules[i]) index=i;
          }
          // 再根据区间 显示对应的优惠信息
          if(index===-1){
            return this.extras.activities[0].description
          }else{
            return '已满'+rules[index]+',结算减<span>'+attribute[rules[index]][1]+'</span>元'
          }
        }
      },
        methods:{
          handleToggleCartList(){
            this.$store.commit('toggleDialogCart')
          },
          handleClearCart(){
            this.$store.commit('clearCart')
            this.$store.commit('toggleDialogCart')
          },
        },
      components:{
        MenuFoodOpt
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .dialog-cart
    .dialog-cart-mask
      position fixed
      z-index: 48;
      top 0
      right 0
      bottom 0
      left 0
      background-color: rgba(0,0,0,.4);
      &.v-enter-active, &.v-leave-active
        transition: opacity .5s;
      &.v-enter, &.v-leave-to
        opacity: 0;
    .dialog-cart-content
      position: fixed;
      background-color: #f5f5f5;
      box-shadow: 0 -1px 5px 0 rgba(0,0,0,.4);
      bottom: (96/75)rem;
      bottom: (96/7.5)vw;
      left: 0;
      right: 0;
      z-index: 49;
      font-size: .426667rem;
      transition transform .2s ease
      transform translate3d(0,100%,0)
      .discount-tip
        background-color: #fffad6;
        border-top: 1px solid #f9e8a3;
        opacity: .96;
        height: .533333rem;
        height: 5.333333vw;
        line-height: .533333rem;
        line-height: 5.333333vw;
        font-size: .266667rem;
        text-align: center;
        position absolute
        left 0
        width 100%
        top -.533333rem;
        top -5.33333vw;
        span
          color #ff461d
      .cart-title
        padding: 0 .333333rem;
        padding: 0 3.333333vw;
        border-bottom: 1px solid #ddd;
        background-color: #eceff1;
        color: #666;
        height: 1.066667rem;
        height: 10.666667vw;
        display flex
        align-items center
        p
          flex 1
          padding-left: .133333rem;
          padding-left: 1.333333vw;
          border-left: .093333rem solid #2395ff;
          border-left: .933333vw solid #2395ff;
        .cart-clear
          -webkit-box-flex: 0;
          -webkit-flex: none;
          -ms-flex: none;
          flex: none;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          padding-left: .4rem;
          padding-left: 4vw;
          color: #666;
          text-decoration: none;
          font-size: .346667rem;
          svg
            width: .306667rem;
            width: 3.066667vw;
            height: .346667rem;
            height: 3.466667vw;
            fill: #ddd;
            margin-right: .08rem;
            margin-right: .8vw;
      .cart-main
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        max-height: 8rem;
        max-height: 80vw;
        ul
          li
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            padding: .2rem .333333rem .2rem 0;
            padding: 2vw 3.333333vw 2vw 0;
            min-height: 1.466667rem;
            min-height: 14.666667vw;
            margin-left: .333333rem;
            margin-left: 3.333333vw;
            .cart-item-name
              -webkit-box-flex: 5.5;
              -webkit-flex: 5.5;
              -ms-flex: 5.5;
              flex: 5.5;
              line-height: normal;
              em
                display: inline-block;
                font-style: normal;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                vertical-align: middle;
                max-width: 4.666667rem;
                max-width: 46.666667vw;
            .cart-item-price
              -webkit-box-flex: 2.5;
              -webkit-flex: 2.5;
              -ms-flex: 2.5;
              flex: 2.5;
              color: #f60;
              text-align: right;
              white-space: nowrap;
              font-weight: 700;
              .item-oldPrice
                margin-right: .133333rem;
                margin-right: 1.333333vw;
                font-size: .266667rem;
                color: #999;
                font-weight: 400;
                text-decoration line-through
            .cart-item-opt
              -webkit-box-flex: 3;
              -webkit-flex: 3;
              -ms-flex: 3;
              flex: 3;
              text-align: right;
    &.cart-show
      .dialog-cart-content
        transform translate3d(0,0,0)
</style>
