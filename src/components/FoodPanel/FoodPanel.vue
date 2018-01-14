<template>
  <div class="food-panel">
    <div class="panel-body" ref="panel"
         @touchstart="touchStart"
         @touchmove="touchMove"
         @touchend="touchEnd"
    >
      <div class="panel-tip" ref="tip">{{tip}}</div>
      <div class="img-body">
        <img :src="getBigImg(food.image_path)"  alt=""/>
        <div class="food-desc">{{food.description}}</div>
      </div>
      <div class="intro-body">
        <div class="food-title">{{food.name}}</div>
        <div class="food-desc">{{food.tips.split(' ')[1]}} 好评率{{food.satisfy_rate}}%</div>
        <div class="food-price">¥{{food.specfoods[0].price}}</div>
        <div class="intro-opt">
          <menu-food-opt :food="food"/>
        </div>
      </div>
    </div>
    <div class="food-panel-mask" @click="handleHidePanel"></div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import MenuFoodOpt from '@/components/MenuFoodOpt/MenuFoodOpt.vue'
  import {getBigImg} from '../../util/util'
  export default{
    computed: mapState({
      food:state=>state.foodPanel
    }),
    data(){
      return {
        tip: '下拉关闭',
        startTouchPos: 0
      }
    },
    components: {
      MenuFoodOpt
    },
    methods: {
      getBigImg,
      touchStart(e){
        this.startTouchPos = e.touches[0].clientY
      },
      touchMove(e) {
        let moveDistance = (e.touches[0].clientY - this.startTouchPos) / 4;
        this.$refs.panel.style.transform = 'translate3d(0,' + moveDistance + 'px,0';
        if (moveDistance > 0) {
          this.$refs.tip.style.opacity = 1;
        }else{
          this.$refs.tip.style.opacity = 0;
        }
        if (moveDistance >= 20 && moveDistance < 30) {
          this.tip = '下拉关闭'
        } else if (moveDistance >= 30) {
          this.tip = '释放关闭'
        }
      },
      touchEnd(e) {
        this.$refs.tip.style.opacity = 0;
        let moveDistance = (e.changedTouches[0].clientY - this.startTouchPos) / 4;
        if (moveDistance > 30) {
          this.handleHidePanel();
        } else {
          this.$refs.panel.style.transition = '-webkit-transform 150ms ease-in-out';
          this.$refs.panel.style.transform = 'translate3d(0,0,0)';
          setTimeout(
            () => this.$refs.panel.style.transition = ''
            , 150)
        }
      },
      handleHidePanel(){
        this.$store.commit('changeFoodPanel')
      }
    },
    mounted(){
        document.body.addEventListener('scroll',(e)=>{
            e.preventDefault()
        })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .food-panel
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index 55
    top: 0;
    left: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-backdrop-filter: blur(.133333rem);
    -webkit-backdrop-filter: blur(1.333333vw);
    backdrop-filter: blur(.133333rem);
    backdrop-filter: blur(1.333333vw);
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    transition opacity .3s
    .food-panel-mask
      position absolute
      left 0
      top 0
      height 100vh
      width 100vw
      background-color: rgba(0, 0, 0, .5);
    .panel-tip
      position: absolute;
      top: -.794667rem;
      top: -7.946667vw;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      color: #fff;
      opacity: 0;
      transition opacity .15s ease-in-out
    .panel-body
      position: relative;
      background-color: #fff;
      -webkit-box-shadow: 0 0.013333rem 0.08rem 0 rgba(0, 0, 0, .1);
      -webkit-box-shadow: 0 0.133333vw 0.8vw 0 rgba(0, 0, 0, .1);
      box-shadow: 0 0.013333rem 0.08rem 0 rgba(0, 0, 0, .1);
      box-shadow: 0 0.133333vw 0.8vw 0 rgba(0, 0, 0, .1);
      width: 8.533333rem;
      width: 85.333333vw;
      height: 11.413333rem;
      height: 114.133333vw;
      border-radius: .106667rem;
      border-radius: 1.066667vw;
      z-index: 13;
      .img-body
        width: 100%;
        height: 8.533333rem;
        height: 85.333333vw;
        display: block;
        overflow: hidden;
        position: relative;
        border-radius: .106667rem .106667rem 0 0;
        border-radius: 1.066667vw 1.066667vw 0 0;
        &:before
          content: "";
          display: block;
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 3.2rem;
          height: 32vw;
          background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(0, 0, 0, .3)));
          background: -webkit-linear-gradient(transparent, rgba(0, 0, 0, .3));
          background: linear-gradient(transparent, rgba(0, 0, 0, .3));
        img
          width: 100%;
          height: 100%;
          -o-object-fit: contain;
          object-fit: contain;
        .food-desc
          font-size: .293333rem;
          color: #ddd;
          letter-spacing: 0;
          line-height: .373333rem;
          line-height: 3.733333vw;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 0 .333333rem .266667rem;
          padding: 0 3.333333vw 2.666667vw;
      .intro-body
        position: relative;
        padding: .4rem .4rem 0;
        padding: 4vw 4vw 0;
        width: 100%;
        height: 2.933333rem;
        height: 29.333333vw;
        .food-title
          position: relative;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          margin-bottom: .133333rem;
          margin-bottom: 1.333333vw;
        .food-desc
          font-size: .293333rem;
          color: #666;
          line-height: .293333rem;
          line-height: 2.933333vw;
          margin-bottom: .16rem;
          margin-bottom: 1.6vw;
        .food-price
          position: absolute;
          bottom: .453333rem;
          bottom: 4.533333vw;
          font-weight: 700;
          font-size: .426667rem;
          line-height: .426667rem;
          line-height: 4.266667vw;
          color: #f60;
          padding-bottom: .093333rem;
          padding-bottom: .933333vw;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: baseline;
          -webkit-align-items: baseline;
          -ms-flex-align: baseline;
          align-items: baseline;
        .intro-opt
          position: absolute;
          bottom: .48rem;
          bottom: 4.8vw;
          right: 1em;
  &.v-enter,&.v-leave-to
     opacity 0
</style>
