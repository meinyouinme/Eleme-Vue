<template>
  <div class="extra-info" @scroll="handleScroll">
    <div class="info-container">
      <div class="info-title">配送信息</div>
      <div class="info-delivery">
        <p>由{{extras.delivery_mode.text}}提供配送，约{{extras.order_lead_time}}分钟送达，距离{{(extras.distance/1000).toFixed(2)}}km</p>
        <p>配送费¥{{extras.float_delivery_fee}}</p>
      </div>
    </div>
    <div class="info-container">
      <div class="info-title">活动与服务</div>
      <ul class="info-activity">
        <li :key="act.id" v-for="act in extras.activities">
          <span class="act-icon" :style="{backgroundColor:'#'+act.icon_color}">{{act.icon_name}}</span>
          <span class="act-txt">{{act.description}}</span>
        </li>
        <li :key="support.id" v-for="support in extras.supports">
          <span class="act-icon" :style="{color:'#'+support.icon_color,border:'1px solid #'+support.icon_color}">{{support.icon_name}}</span>
          <span class="act-txt">{{support.description}}</span>
        </li>
      </ul>
    </div>
    <div class="info-container">
      <div class="info-title">商家信息</div>
      <ul class="info-shop">
        <li>{{extras.description||'暂无简介'}}</li>
        <li>
          <span class="info-shop-title">商家电话</span>
          <span class="info-shop-content">
                                {{extras.phone}}
                                <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use></svg>
                            </span>
        </li>
        <li>
          <span class="info-shop-title">地址</span>
          <span class="info-shop-content">{{extras.address}}</span>
        </li>
        <li>
          <span class="info-shop-title">营业时间</span>
          <span class="info-shop-content">{{extras.opening_hours.join(',')}}</span>
        </li>
      </ul>
    </div>
    <div class="info-container">
      <div class="info-title link">
        营业资质
        <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use></svg>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default{
      computed:mapState(['extras']),
      methods:{
        handleScroll(e){
          let wrapper=document.querySelector('.shop-detail-wrapper');
          wrapper.scrollTop=e.target.scrollTop;
        }
      },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../util/util.styl";
  .extra-info
    height 100%
    overflow-y auto
    .info-container
      margin-bottom: .266667rem;
      margin-bottom: 2.666667vw;
      padding: .426667rem .4rem .4rem;
      padding: 4.266667vw 4vw 4vw;
      font-size: .346667rem;
      background-color: #fff;
      color: #666;
      border-bottom: 1px solid #eee;
      .info-title
        color: #000;
        font-weight: 700;
        font-size: .4rem;
        line-height: .56rem;
        line-height: 5.6vw;
        &.link
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: justify;
          -webkit-justify-content: space-between;
          -ms-flex-pack: justify;
          justify-content: space-between;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          svg
            width: .4rem;
            width: 4vw;
            height: .4rem;
            height: 4vw;
            fill: #ccc;
            vertical-align: middle;
      .info-delivery
        margin-top: .426667rem;
        margin-top: 4.266667vw;
        p
          margin-bottom: .186667rem;
          margin-bottom: 1.866667vw;
      .info-activity
        margin-top: .426667rem;
        margin-top: 4.266667vw;
        li
          display: flex;
          font-size: .346667rem;
          margin-bottom: .306667rem;
          margin-bottom: 3.066667vw;
          .act-icon
            margin-right: .16rem;
            margin-right: 1.6vw;
            margin-top: .04rem;
            margin-top: .4vw;
            font-size: .32rem;
            font-style: normal;
            padding: .053333rem .16rem;
            padding: .533333vw 1.6vw;
            height: .426667rem;
            height: 4.266667vw;
            line-height: .426667rem;
            line-height: 4.266667vw;
            display: inline-block;
            box-sizing: border-box;
            text-align: center;
            border-radius: .026667rem;
            border-radius: .266667vw;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
          .act-txt
            font-size: .346667rem;
            line-height: 1.38;
            flex 1
      .info-shop
        li
          display: flex;
          padding: .4rem .4rem .4rem 0;
          padding: 4vw 4vw 4vw 0;
          -webkit-box-pack: justify;
          -webkit-justify-content: space-between;
          -ms-flex-pack: justify;
          justify-content: space-between;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          margin-right: -.4rem;
          margin-right: -4vw;
          position relative
          &:before
            setTopLine(#ddd,0,0)
          &:first-child
            &:before
              display none
          &:last-child
            padding-bottom 0
          .info-shop-title
            font-weight: 700;
            color: #333;
          .info-shop-content
            max-width: 6.666667rem;
            max-width: 66.666667vw;
            text-align: right;
            svg
              width: .4rem;
              width: 4vw;
              height: .4rem;
              height: 4vw;
              fill: #ccc;
              vertical-align: middle;
</style>
