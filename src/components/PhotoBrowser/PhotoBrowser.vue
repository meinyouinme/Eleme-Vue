<template>
  <div class="photo-browser" @click="handleClick">
    <div class="photo-browser-mask">
    </div>
    <div class="photo-content" :style="{top:photo.y+'px',left:photo.x+'px'}">
      <img :src="getBigImg(photo.image_hash)" alt=""/>
    </div>
    <p class="photo-browser-title">{{photo.food_names.join(' ')}}</p>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {getBigImg} from '../../util/util'
  export default{
    computed: mapState(['dialogPhoto', 'photo']),
    methods: {
      getBigImg,
      handleClick(){
        this.$store.commit('toggleDialogPhoto')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .photo-browser
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index 101
    transition all .3s
    .photo-browser-mask
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      background #000
    .photo-content
      position absolute
      top 0
      left 0
      width 1.893333rem
      width 18.933333vw
      height 1.893333rem
      height 18.933333vw
      background transparent
      transition all .2s
      img
        width 100%
        position absolute
        left 50%
        top 50%
        transform translate(-50%, -50%)
    .photo-browser-title
      position absolute
      bottom .466667rem
      bottom 4.666667vw
      left .266667rem
      left 2.666667vw
      font-size .266667rem
      color #fff
      transition opacity .2s ease-in-out
  &.v-enter-active,&.v-leave-active
    .photo-browser-mask
      transition opacity .4s
  &.v-enter,&.v-leave-to
    .photo-browser-mask
      opacity 0
  &.photo-fade-in
    .photo-content
      left 0!important
      top 0!important
      width 100%
      height 100%
</style>
