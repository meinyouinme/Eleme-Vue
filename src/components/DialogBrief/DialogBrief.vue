<template>
  <div class="dialog-brief">
    <div class="dialog-brief-mask" @click="toggleDialogBrief">
    </div>
    <div class="dialog-brief-content">
      <div class="brief-title">{{brief.name}}</div>
      <ul class="brief-info">
        <li>
          <span>{{brief.rating}}</span>
          <span>评分</span>
        </li>
        <li>
          <span>{{brief.recent_order_num}}单</span>
          <span>月售</span>
        </li>
        <li>
          <span>约{{brief.order_lead_time}}分钟</span>
          <span>{{brief.delivery_mode.text}}</span>
        </li>
        <li>
          <span>{{brief.float_delivery_fee}}元</span>
          <span>配送费</span>
        </li>
        <li>
          <span>{{brief.distance}}m</span>
          <span>距离</span>
        </li>
      </ul>
      <div class="brief-notice-title"><span>公告</span></div>
      <div class="brief-notice-content">
        {{brief.promotion_info}}
      </div>
    </div>
    <div class="dialog-brief-close">
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default{
      computed:mapState({
        brief:state=>state.extras
      }),
      methods: {
        toggleDialogBrief(){
          this.$store.commit('toggleDialogBrief')
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  @keyframes zoomIn
    from
      opacity: 0;
      transform: scale3d(.3, .3, .3);
    50%
      opacity: 1;
  .dialog-brief
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 52;
    flex-direction: column;
    .dialog-brief-mask
      position absolute
      top 0
      right 0
      bottom 0
      left 0
      background-color: rgba(0,0,0,.5);
    .dialog-brief-content
      position: relative;
      width: 80%;
      box-sizing content-box
      max-height: 8.533333rem;
      max-height: 85.333333vw;
      padding: .706667rem .666667rem .746667rem;
      padding: 7.066667vw 6.666667vw 7.466667vw;
      border-radius: .106667rem;
      border-radius: 1.066667vw;
      overflow: hidden;
      background: #fff;
      z-index: 99;
      display: flex;
      flex-direction: column;
      animation-duration: 200ms;
      animation-fill-mode: both;
      animation-name zoomIn
      .brief-title
        font-size: .6rem;
        line-height: .666667rem;
        line-height: 6.666667vw;
        color: #333;
        text-align: center;
        font-weight: bolder;
      .brief-info
        display: flex;
        margin: .506667rem -.666667rem 0;
        margin: 5.066667vw -6.666667vw 0;
        li
          flex 1
          span
            display block
            text-align center
            &:first-child
              font-size: .4rem;
              font-weight: 600;
              color: #333;
              margin-bottom: .16rem;
              margin-bottom: 1.6vw;
            &:last-child
              font-size: .293333rem;
              color: #999;
      .brief-notice-title
        position: relative;
        text-align: center;
        margin: .48rem auto .266667rem;
        margin: 4.8vw auto 2.666667vw;
        width: 2.026667rem;
        width: 20.266667vw;
        background-image: linear-gradient(90deg,#fff,#333 50%,#fff);
        background-size: 100% 1px;
        background-position: 50%;
        background-repeat: no-repeat;
        span
          font-size: .32rem;
          padding: 0 .106667rem;
          padding: 0 1.066667vw;
          color: #999;
          background-color: #fff;
        .brief-notice-content
          font-size: .346667rem;
          line-height: 1.54;
          color: #333;
          max-height: 2.666667rem;
          max-height: 26.666667vw;
          overflow-y: auto;
    .dialog-brief-close
      margin-top: .8rem;
      margin-top: 8vw;
      width: .8rem;
      width: 8vw;
      height: .8rem;
      height: 8vw;
      background-size: 100%;
      z-index: 2;
      background-position: 50%;
      background-repeat: no-repeat;
      background-image url(/img/brief-close.webp)
</style>
