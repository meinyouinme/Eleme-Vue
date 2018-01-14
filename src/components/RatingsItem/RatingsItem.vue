<template>
  <li class="ratings-list-item">
    <div class="rat-avatar">
      <img :src="rating.avatar?'':'static/img/rating-avatar.webp'" alt=""/>
    </div>
    <div class="rat-detail">
      <div class="rat-name">
        {{rating.username}}<span>{{rating.rated_at}}</span>
      </div>
      <div class="rat-star">
        <div class="rat-star-wrapper">
          <star :rating="rating.rating"/>
        </div>
        <span>{{rating.time_spent_desc}}</span>
      </div>
      <div class="rat-msg">{{rating.rating_text}}</div>
      <div class="rat-pic" v-if="rating.order_images&&rating.order_images.length>0">
        <div class="rat-pic-item"
             :key="index"
             v-for="(img,index) in rating.order_images"
        >
          <img :src="getImg(img.image_hash)"
               alt="img.image_hash"
               @click="handleClick(img,$event)"/>
        </div>
      </div>
      <div class="rat-tags" v-if="rating.food_ratings.length>0">
        <div
          class="rat-tag"
          :key="food.food_id"
          v-for="food in rating.food_ratings"
        >{{food.rate_name}}
        </div>
      </div>
    </div>
  </li>
</template>

<script>
  import Star from '@/components/Star/Star.vue'
  import {getImg} from '../../util/util'
  export default{
    props: ['rating'],
    methods:{
      getImg,
      handleClick(img,e){
          let rect=e.target.getBoundingClientRect()
          this.$store.commit('toggleDialogPhoto',{...img,x:rect.left,y:rect.top})
      }
    },
    components: {
      Star
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../util/util.styl";
  .ratings-list-item
    padding: .4rem 0;
    padding: 4vw 0;
    display flex
    position relative
    &:after
      setBottomLine(#ddd, 0, 0)
    .rat-avatar
      width: .8rem;
      width: 8vw;
      height: .8rem;
      height: 8vw;
      img
        width: .8rem;
        width: 8vw;
        height: .8rem;
        height: 8vw;
        border-radius: 50%;
    .rat-detail
      flex 1
      margin-left .4rem
      margin-left 4vw
      font-size: .346667rem;
      .rat-name
        display flex
        align-items center
        font-size: .346667rem;
        margin-top: 0;
        color: #333;
        span
          font-size: .293333rem;
          color: #bbb;
          margin-left: .16rem;
          margin-left: 1.6vw;
      .rat-star
        .rat-star-wrapper
          display inline-block
        span
          font-size: .266667rem;
          color: #999;
          vertical-align: middle;
      .rat-msg
        color: #333;
        font-size: .373333rem;
        margin: .213333rem 0;
        margin: 2.133333vw 0;
      .rat-pic
        .rat-pic-item
          display: inline-block;
          margin: .133333rem;
          margin: 1.333333vw;
          img
            width: 1.893333rem;
            width: 18.933333vw;
            height: 1.893333rem;
            height: 18.933333vw;
      .rat-tags
        .rat-tag
          display: inline-block;
          font-size: .293333rem;
          color: #6d7885;
          border: 1px solid #eee;
          padding: .106667rem .266667rem;
          padding: 1.066667vw 2.666667vw;
          margin: .093333rem;
          margin: .933333vw;
          border-radius: .053333rem;
          border-radius: .533333vw;
          max-width: 1.6rem;
          max-width: 16vw;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          box-sizing content-box

</style>
