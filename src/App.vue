<template>
  <div class="shop-detail-wrapper">
    <shell v-if="!fetched"/>
    <template v-else="fetched">
      <v-header></v-header>
      <tab></tab>
      <v-main></v-main>
      <transition name="fade">
        <dialog-brief v-if="dialogBrief"/>
      </transition>
      <transition>
        <dialog-activity v-if="dialogActivity"/>
      </transition>
      <transition>
      <food-panel v-if="foodPanelShow"/>
      </transition>
      <transition
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
      >
        <photo-browser v-if="dialogPhoto"/>
      </transition>
    </template>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Shell from '@/components/Shell/Shell.vue'
  import Header from '@/components/Header/Header.vue'
  import Tab from '@/components/Tab/Tab.vue'
  import Main from '@/components/Main/Main.vue'
  import DialogActivity from '@/components/DialogActivity/DialogActivity.vue'
  import DialogBrief from '@/components/DialogBrief/DialogBrief.vue'
  import FoodPanel from '@/components/FoodPanel/FoodPanel.vue'
  import PhotoBrowser from '@/components/PhotoBrowser/PhotoBrowser.vue'
  export default {
    name: 'app',
    computed: mapState([
      'fetched',
      'dialogActivity',
      'dialogBrief',
      'foodPanelShow',
      'dialogPhoto',
    ]),
    mounted(){
      this.$store.commit('fetchData')
    },
    components: {
      'v-header': Header,
      Tab,
      'v-main': Main,
      Shell,
      DialogActivity,
      DialogBrief,
      FoodPanel,
      PhotoBrowser
    },
    methods:{
      afterEnter(el){
          el.className+=' photo-fade-in'
      },
      beforeLeave(el){
          el.className='photo-browser'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .shop-detail-wrapper
    height 100vh
    overflow-y auto
    overflow-x hidden
</style>
