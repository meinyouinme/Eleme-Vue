<template>
  <li>
    <div class="food-avatar" @click="changeFoodPanel">
      <span class="attr-tag" :content="food.attributes[0].icon_name" v-if="food.attributes.length>0">{{food.attributes[0].icon_name}}</span>
      <img :src="getImg(food.image_path)" alt="" v-if="food.image_path"/>
    </div>
    <div class="food-detail">
      <div class="food-title">{{food.name}}</div>
      <div class="food-description" v-if="food.description">{{food.description}}</div>
      <div class="food-intro">{{food.tips.split(' ')[1]}} 好评率{{food.satisfy_rate}}%</div>
      <div class="food-discount" v-if="food.activity">
        <span class="num" :content="((food.specfoods[0].price/food.specfoods[0].original_price)*10).toFixed(1)+'折'">{{((food.specfoods[0].price/food.specfoods[0].original_price)*10).toFixed(1)}}折</span>
        <span class="txt" :content="food.activity.applicable_quantity_text">{{food.activity.applicable_quantity_text}}</span>
      </div>
      <div class="food-price">
        <span class="new-price">{{food.specfoods[0].price}}</span>
        <span class="old-price" v-if="food.specfoods[0].original_price">￥{{food.specfoods[0].original_price}}</span>
      </div>
      <div class="food-opt-wrapper">
        <menu-food-opt :food="food"/>
      </div>
    </div>
  </li>
</template>

<script>
  import {getImg} from '../../util/util'
  import MenuFoodOpt from '@/components/MenuFoodOpt/MenuFoodOpt.vue'
    export default{
        props:['food'],
      methods:{
        changeFoodPanel(){
          this.$store.commit('changeFoodPanel',this.food)
        },
        getImg
      },
      components:{
        MenuFoodOpt
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../util/util.styl";
  .food-list
    li
      display flex
      padding: .266667rem .266667rem .8rem 0;
      padding: 2.666667vw 2.666667vw 8vw 0;
      margin-bottom: 1px;
      position relative
      &:after
        setBottomLine(#eee,0,0)
      .food-avatar
        width: 2.026667rem;
        width: 20.266667vw;
        height: 2.026667rem;
        height: 20.266667vw;
        flex: none;
        margin-right: .266667rem;
        margin-right: 2.666667vw;
        position: relative;
        .attr-tag
          position absolute
          left 0
          top 0
          color transparent
          &:after
            position absolute
            left 0
            top 0
            transform scale(.5)
            transform-origin: 0 0;
            padding: .053333rem .133333rem;
            padding: .533333vw 1.333333vw;
            border-radius: .053333rem;
            border-radius: .533333vw;
            content attr(content)
            font-size: .533333rem;
            text-align center
            color: #fff;
            background-image: linear-gradient(135deg,#ffae1b,#f57751);
            white-space: nowrap;
        img
          width: 100%;
          border-radius: .053333rem;
          border-radius: .533333vw;
      .food-detail
        flex-grow 1
        position relative
        padding-bottom: .666667rem;
        padding-bottom: 6.666667vw;
        .food-title
          font-size: .4rem;
          font-weight: 700;
          line-height: 1.2;
          overflow: hidden;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: start;
          -webkit-align-items: start;
          -ms-flex-align: start;
          align-items: start;
          padding-right: .533333rem;
          padding-right: 5.333333vw;
          word-break: break-word;
        .food-description
          margin: .133333rem 0!important;
          margin: 1.333333vw 0!important;
          font-size: .253333rem;
          color: #999;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 4.8rem;
          width: 48vw;
        .food-intro
          margin: .173333rem 0!important;
          margin: 1.733333vw 0!important;
          color: #666;
          font-size: .293333rem;
          line-height: 1;
        .food-discount
          .num
            height: .346667rem;
            height: 3.466667vw;
            font-size: .266667rem;
            color: transparent;
            white-space: nowrap;
            position relative
            padding: 0 .08rem;
            padding: 0 .8vw;
            &:after
              content attr(content)
              position absolute
              left 0
              top 0
              color: #fff;
              font-size: .533333rem;
              transform scale(.5)
              transform-origin 0 0
              background-image: linear-gradient(90deg,#ff7416,#ff3c15 98%);
              border-radius: .013333rem;
              border-radius: .133333vw;
              white-space: nowrap;
              height: 200%;
              padding: 0 .16rem;
              padding: 0 1.6vw;
          .txt
            height: .346667rem;
            height: 3.466667vw;
            font-size: .266667rem;
            color: transparent;
            white-space: nowrap;
            position relative
            &:after
              content attr(content)
              position absolute
              left 0
              top 0
              font-size: .533333rem;
              transform scale(.5)
              transform-origin 0 0
              color: #f07373;
              border: 1px solid #ff3c15;
              border-left: none;
              white-space: nowrap;
              height: 200%;
              padding: 0 .16rem;
              padding: 0 1.6vw;
        .food-price
          position absolute
          bottom 0
          display flex
          align-items baseline
          .new-price
            margin-right: .106667rem;
            margin-right: 1.066667vw;
            font-weight: 700;
            font-size: .426667rem;
            line-height: .426667rem;
            line-height: 4.266667vw;
            color: #f60;
            &:before
              font-weight: 400;
              content: "\A5";
              font-size: .32rem;
              margin-right: .053333rem;
              margin-right: .533333vw;
              display: inline-block;
          .old-price
            font-size: .32rem;
            color: #666;
            font-weight: 400;
            vertical-align: top;
            text-decoration line-through
        .food-opt-wrapper
          position: absolute;
          right: 0;
          bottom: -.066667rem;
          bottom: -.666667vw;
</style>
