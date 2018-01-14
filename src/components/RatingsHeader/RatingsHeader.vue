<template>
  <div class="ratings-header">
    <div class="rating-score">
      <h2 class="score-num">{{scores.overall_score.toFixed(1)}}</h2>
      <div class="score-txt">综合评价</div>
      <div class="score-extra">高于周边商家{{(scores.compare_rating*100).toFixed(1)}}%</div>
    </div>
    <div class="rating-info">
      <section>
        <div class="info-txt">服务态度</div>
        <div class="info-star">
          <star :rating="scores.service_score"/>
        </div>
        <div class="info-num">{{scores.service_score.toFixed(1)}}</div>
      </section>
      <section>
        <div class="info-txt">菜品价格</div>
        <div class="info-star">
          <star :rating="scores.food_score"/>
        </div>
        <div class="info-num">{{scores.food_score.toFixed(1)}}</div>
      </section>
      <section>
        <div class="info-txt">送达时间</div>
        <div class="info-delivery">
          <span>{{scores.deliver_time}}分钟</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Star from '@/components/Star/Star.vue'
    export default{
      computed:mapState(['scores']),
      components:{
        Star
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .ratings-header
    background-color: #fff;
    margin-bottom: .266667rem;
    margin-bottom: 2.666667vw;
    padding: .4rem;
    padding: 4vw;
    font-size: .36rem;
    display: flex;
    align-items: center;
    color: #666;
    border-bottom: 1px solid #eee;
    .rating-score
      padding-right: .4rem;
      padding-right: 4vw;
      border-right: 1px solid #ddd;
      text-align: center;
      line-height: 1.5;
      .score-num
        font-size: .64rem;
        line-height: 1;
        font-weight: 400;
        color: #ff6000;
        font-weight: 700;
        display: block;
      .score-txt
        font-size: .32rem;
      .score-extra
        font-size: .266667rem;
        color: #999;
    .rating-info
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      font-size: .373333rem;
      line-height: 1;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      section
        width: 80%;
        margin: .133333rem 0;
        margin: 1.333333vw 0;
        font-size: .32rem;
        .info-txt
          display inline-block
          vertical-align middle
        .info-star
          display inline-block
          vertical-align middle
          padding-left: .266667rem;
          padding-left: 2.666667vw;
          height: 0.266666666666667rem;
          height: 2.666666666666667vw;
        .info-num
          display inline-block
          vertical-align middle
          color: #f60;
          padding-left: .266667rem;
          padding-left: 2.666667vw;
        .info-delivery
          display inline-block
          vertical-align middle
          padding-left: .266667rem;
          padding-left: 2.666667vw;
</style>
