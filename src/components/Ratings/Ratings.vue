<template>
  <div class="ratings-wrapper" @scroll="handleScroll">
    <ratings-header/>
    <ratings-filter/>
    <ratings-list/>
  </div>
</template>

<script>
  import RatingsHeader from '@/components/RatingsHeader/RatingsHeader.vue'
  import RatingsFilter from '@/components/RatingsFilter/RatingsFilter.vue'
  import RatingsList from '@/components/RatingsList/RatingsList.vue'
  export default{
    methods:{
      handleScroll(e){
        let wrapper=document.querySelector('.shop-detail-wrapper');
        wrapper.scrollTop=e.target.scrollTop;
      }
    },
    components: {
      RatingsHeader,
      RatingsFilter,
      RatingsList,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .ratings-wrapper
    height 100%
    overflow-y auto
</style>
