<template>
  <div class="menu-cart">
    <div class="menu-cart-inner">
      <div :class="'basket-container '+basketClass" @click="toggleDialogCart" ref="basket">
        <div class="basket-num" v-if="cartCount>0">{{cartCount}}</div>
      </div>
      <div class="cart-info" @click="toggleDialogCart">
        <h2>￥{{cartTotal.newPrice.toFixed(1)}}
          <span v-if="cartTotal.newPrice!==cartTotal.oldPrice">￥{{cartTotal.oldPrice.toFixed(1)}}</span>
        </h2>
        <p>{{extras.piecewise_agent_fee.tips}}</p>
      </div>
      <div class="cart-opt" v-if="extras.piecewise_agent_fee.rules[0].price>cartTotal.newPrice">
        <span>还差￥{{(extras.piecewise_agent_fee.rules[0].price - cartTotal.newPrice).toFixed(1)}}起送</span>
      </div>
      <div class="cart-opt active" v-else>
        <span>去结算</span>
      </div>
    </div>
    <transition :key="index" v-for="(ball,index) in balls" @enter="enter" @after-enter="afterEnter" @before-enter="beforeEnter"
                :class="false">
      <div class="bounce-ball" v-if="ball.show">
        <div class="ball-inner"></div>
      </div>
    </transition>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  export default{
    computed: {
      ...mapState(['extras', 'cartShake', 'balls', 'bounceBalls']),
      ...mapGetters(['cartCount', 'cartTotal']),
      basketClass(){
        if (this.cartCount === 0) {
          return 'basket-empty'
        } else if (this.cartShake) {
          return 'basket-shake'
        } else {
          return ''
        }
      }
    },
    mounted(){
      let self = this
      this.$refs.basket.addEventListener('animationend', () => {
        self.$store.commit('addCartShake')
      })
    },
    methods: {
      toggleDialogCart(){
        if (this.cartCount > 0) {
          this.$store.commit('toggleDialogCart')
        }
      },
      beforeEnter(el){
        let count = this.balls.length
        let ratio=window.innerWidth/100
        while (count--) {
          let ball = this.balls[count]
          if (ball.show) {
            let rect = ball.el.getBoundingClientRect()
            let x = rect.left - 47/7.5*ratio
            let y = -(window.innerHeight - rect.top - 92/7.5*ratio)
            el.style.display = '';
            el.style.webkitTransform = `translate3d(0, ${y}px, 0)`;
            el.style.transform = `translate3d(0, ${y}px, 0)`;
            el.style.opacity=1
            let inner = el.firstChild;
            inner.style.webkitTransform = `translate3d(${x}px, 0, 0)`;
            inner.style.transform = `translate3d(${x}px, 0, 0)`;
          }
        }
      },
      enter(el) {
//        /* 触发浏览器重绘 */
        let rf = el.offsetHeight;

        el.style.webkitTransform = 'translate3d(0, 0, 0)';
        el.style.transform = 'translate3d(0, 0, 0)';
        let inner = el.firstChild;
        inner.style.webkitTransform = 'translate3d(0, 0, 0)';
        inner.style.transform = 'translate3d(0, 0, 0)';
      },
      afterEnter(el){
        let ball = this.bounceBalls.shift();
        if (ball) {
          ball.show = false;
          el.style.display = 'none';
          el.style.opacity=0
        }
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .bounce-ball
    position fixed
    z-index 100
    left: (54 / 75) rem;
    left: (54 / 7.5) vw;
    bottom: (45 / 75) rem;
    bottom: (45 / 7.5) vw;
    transition all .4s cubic-bezier(.25, -0.26, .93, .31)
    .ball-inner
      background: #2395ff;
      width: (40 / 75) rem;
      height: (40 / 75) rem;
      width: (40 / 7.5) vw;
      height: (40 / 7.5) vw;
      border-radius 50%;
      transition all .4s linear
  @keyframes basketShake
    0%
      transform scale(1)
    25%
      transform scale(.8)
    50%
      transform scale(1.1)
    75%
      transform scale(.9)
    100%
      transform scale(1)
  .menu-cart
    .menu-cart-inner
      z-index 50
      position fixed
      left 0
      bottom 0
      width 100%
      height 1.28rem
      height 12.8vw
      padding-left 2.106667rem
      padding-left 21.066667vw
      background-color #535354
      display flex
      align-items center
      .basket-container
        position absolute
        left .32rem
        left 3.2vw
        bottom .2rem
        bottom 2vw
        width 1.333333rem
        width 13.333333vw
        height 1.333333rem
        height 13.333333vw
        box-sizing border-box
        border-radius 100%
        background-color #3190e8
        border .133333rem solid #444
        border 1.333333vw solid #444
        box-shadow 0 -0.08rem 0.053333rem 0 rgba(0, 0, 0, .1)
        box-shadow 0 -0.8vw 0.533333vw 0 rgba(0, 0, 0, .1)
        background-image url(./icon-cart.svg)
        background-size 6vw
        background-position center
        background-repeat no-repeat
        will-change transform
        &.basket-empty
          background-color #363636
          background-image url(./icon-cart-gray.svg)
        &.basket-shake
          animation basketShake .5s ease-in-out
          animation-delay .4s
        .basket-num
          position absolute
          right -.12rem
          right -1.2vw
          top -.133333rem
          top -1.333333vw
          line-height 1
          background-image -webkit-gradient(linear, right top, left top, from(#ff7416), color-stop(98%, #ff3c15))
          background-image -webkit-linear-gradient(right, #ff7416, #ff3c15 98%)
          background-image linear-gradient(-90deg, #ff7416, #ff3c15 98%)
          color #fff
          border-radius .32rem
          border-radius 3.2vw
          padding .053333rem .133333rem
          padding .533333vw 1.333333vw
          content attr(attr-quantity)
          font-size .266667rem
      .cart-info
        flex 1
        h2
          font-size .48rem
          line-height normal
          color #fff
          span
            font-size .8em
            opacity .8
            text-decoration line-through
        p
          color #999
          font-size .266667rem
      .cart-opt
        height 100%
        width 2.8rem
        width 28vw
        color #fff
        text-align center
        text-decoration none
        user-select none
        line-height 1.28rem
        line-height 12.8vw
        span
          font-size .293333rem
        &.active
          background-color #4cd964
          span
            font-size .4rem
            font-weight 700


</style>
