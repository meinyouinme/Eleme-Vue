<template>
  <div class="shop-detail-menu-category">
    <ul class="menu-category">
      <li :key="category.id" v-for="(category,index) in menu">
        <a href="javascript:;" v-scroll-to="{el:'#block'+index}" ref="link" @click="highLight(index)" :class="index===0?'on':''">
          <img :src="getImg(category.icon_url)" alt="" v-if="category.icon_url"/>
          <span>{{category.name}}</span>
          <i v-if="category.category_num>0">{{category.category_num}}</i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {getImg} from '../../util/util'
  export default{
    computed: mapState(['menu']),
    methods: {
      getImg,
      highLight(index){
        const links = this.$refs.link
        links.forEach((link) => {
          link.className = ''
        })
        links[index].className='on'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../util/util.styl";

  .shop-detail-menu-category
    overflow-y: auto;
    height: 100%;
    background-color: #f8f8f8;
    -webkit-overflow-scrolling: touch;
    width: 2.053333rem;
    width: 20.533333vw;
    .menu-category
      li
        a
          display block
          padding: .466667rem .2rem;
          padding: 4.666667vw 2vw;
          font-size: .346667rem;
          color: #666;
          position relative
          transition background .3s
          &:after
            setBottomLine(#e8e8e8, 0, 0)
          img
            width: .24rem;
            width: 2.4vw;
            height: .24rem;
            height: 2.4vw;
            margin-right .1rem
            margin-right 1vw
          i
            position: absolute;
            right: .08rem;
            right: .8vw;
            top: .08rem;
            top: .8vw;
            color: #fff;
            background-image: linear-gradient(-90deg, #ff7416, #ff3c15 98%);
            border-radius: .2rem;
            border-radius: 2vw;
            font-size: .266667rem;
            font-weight: 700;
            text-align: center;
            min-width: .373333rem;
            min-width: 3.733333vw;
            padding: 0 .106667rem;
            padding: 0 1.066667vw;
            line-height: .373333rem;
            line-height: 3.733333vw;
            font-style normal
          &.on
            background #fff
</style>
