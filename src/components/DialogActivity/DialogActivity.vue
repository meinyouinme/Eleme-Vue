<template>
  <div class="dialog-activity">
    <div class="dialog-activity-mask" @click="toggleDialogActivity">
    </div>
    <div class="dialog-activity-content">
      <div class="activity-title">优惠活动</div>
      <div class="activity-main">
        <ul>
          <li :key="act.id" v-for="act in activities">
            <span :style="{backgroundColor:'#'+act.icon_color}">{{act.icon_name}}</span>
            <p>{{act.description}}</p>
          </li>
        </ul>
      </div>
      <div class="dialog-activity-close" @click="toggleDialogActivity">
        <svg>
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gray-close"></use>
        </svg>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default{
    computed:mapState({
      activities:state=>state.extras.activities
    }),
    methods: {
      toggleDialogActivity(){
        this.$store.commit('toggleDialogActivity')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @keyframes slideInUp
    from
      transform: translate3d(0, 100%, 0);
    to
      transform: translate3d(0, 0, 0);
  .dialog-activity
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
    transition all .3s
    .dialog-activity-mask
      position absolute
      top 0
      right 0
      bottom 0
      left 0
      background-color: rgba(0, 0, 0, .5);
      transition opacity .2s
    .dialog-activity-content
      position: absolute;
      background-color: #f5f5f5;
      box-shadow: 0 -1px 5px 0 rgba(0, 0, 0, .4);
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 100;
      padding: .533333rem .693333rem;
      padding: 5.333333vw 6.933333vw;
      transition transform .2s
      .activity-title
        text-align: center;
        font-size: .453333rem;
        font-weight: 600;
        margin-bottom: .413333rem;
        margin-bottom: 4.133333vw;
      .activity-main
        height: 5.08rem;
        height: 50.8vw;
        overflow-y: scroll;
        ul
          li
            display flex
            margin-bottom: .306667rem;
            margin-bottom: 3.066667vw;
            span
              height: .426667rem;
              height: 4.266667vw;
              line-height: .426667rem;
              line-height: 4.266667vw;
              font-size: .32rem;
              padding: 0 .16rem;
              padding: 0 1.6vw;
              margin-right: .16rem;
              margin-right: 1.6vw;
              color #fff
            p
              font-size: .346667rem;
              line-height: 1.38;
    .dialog-activity-close
      position: absolute;
      height: .64rem;
      height: 6.4vw;
      width: .64rem;
      width: 6.4vw;
      right: .266667rem;
      right: 2.666667vw;
      top: .266667rem;
      top: 2.666667vw;
      svg
        height: 100%;
        width: 100%;
    &.v-enter,&.v-leave-to
      .dialog-activity-content
        transform translate3d(0,100%,0)
      .dialog-activity-mask
        opacity 0
</style>
