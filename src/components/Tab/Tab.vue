<template>
  <div class="shop-tab">
    <ul>
      <li v-for="(item,index) in ['点餐','评价','商家']" :key="index" :class="index===tabIndex?'on':''" @click="changeTabIndex(index)">
        <span>{{item}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
    export default{
      computed:mapState(['tabIndex']),
      mounted(){
        let tab = document.querySelector('.shop-tab');
        let wrapper = document.querySelector('.shop-tab-main');
        wrapper.style.height=window.innerHeight-tab.clientHeight+'px'
//        console.log(tab.clientHeight,window.innerHeight)
      },
      methods:{
        changeTabIndex(index){
            this.$store.commit('changeTabIndex',index)
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .shop-tab
    height 1rem
    height 10vw
    background-color: #fff;
    border-bottom: 1px solid #eee;
    ul
      height 1rem
      height 10vw
      line-height: 1rem;
      line-height: 10vw;
      display: table;
      width 100%
      li
        display table-cell
        text-align center
        color #666
        font-size .373333rem
        &.on
          color #333
          font-weight 700
          span
            position relative
            &:after
              content: "";
              position: absolute;
              bottom: -.28rem;
              bottom: -2.8vw;
              left: 0;
              right: 0;
              height: .053333rem;
              height: .533333vw;
              background-color: #2395ff;
</style>
