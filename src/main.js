// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import VueScrollTo from 'vue-scrollto'


import menu from './data/menu.json'
import extras from './data/extras.json'
import ratings from './data/ratings.json'
import scores from './data/scores.json'

Vue.use(Vuex)
Vue.use(VueScrollTo, {
  container: "#food-block",
})

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    tabIndex: 0,
    cart: [],
    menu: [],
    ratings: [],
    scores: null,
    extras: null,
    fetched: false,
    dialogActivity: false,
    dialogBrief: false,
    dialogCart: false,
    dialogPhoto: false,
    photo: null,
    foodPanel: null,
    foodPanelShow: false,
    cartShake:false,
    balls:[{show:false},{show:false},{show:false},{show:false},{show:false}],
    bounceBalls:[]
  },
  mutations: {
    bounceBall(state,e){
      for(let i=0,length=state.balls.length;i<length;i++){
        let ball=state.balls[i]
        if(!ball.show){
          ball.show=true
          ball.el=e.currentTarget
          state.bounceBalls.push(ball)
          return
        }
      }
    },
    changeTabIndex (state, index) {
      state.tabIndex = index
    },
    fetchData(state){
      setTimeout(() => {
        //首先给menu的分类和食品添加数量
        menu.forEach((m) => {
          m.category_num = 0
          m.foods.forEach(food=>{
            food.food_num=0
          })
        })
        state.menu = menu
        state.extras = extras
        state.ratings = ratings
        state.scores = scores
        state.fetched = true
      }, 500)
    },
    toggleDialogActivity(state){
      state.dialogActivity = !state.dialogActivity
    },
    toggleDialogBrief(state){
      state.dialogBrief = !state.dialogBrief
    },
    toggleDialogCart(state){
      state.dialogCart = !state.dialogCart
    },
    toggleDialogPhoto(state,photo){
      state.dialogPhoto = !state.dialogPhoto
      state.photo = photo
    },
    addCartShake(state){
      state.cartShake = !state.cartShake
    },
    addCart(state, food){
      let currentCategory = state.menu.find(category => category.id === food.category_id)
      currentCategory.category_num++
      food.food_num++
    },
    deleteCart(state, food){
      let currentCategory = state.menu.find(category => category.id === food.category_id)
      currentCategory.category_num--
      food.food_num--
    },
    clearCart(state){
      state.menu.forEach((m) => {
        m.category_num = 0
        m.foods.forEach(food=>{
          food.food_num=0
        })
      })
    },
    changeFoodPanel(state, food){
      state.foodPanel = food
      state.foodPanelShow = !state.foodPanelShow
    }
  },
  getters: {
    cartCount: state => {
      return state.menu.reduce(function(sum,category){
        return sum+category.category_num
      },0)
    },
    cartFoods:state=>{
      let cart=[]
      state.menu.forEach(category=>{
        cart=cart.concat(category.foods.filter(food=>food.food_num!==0))
      })
      return cart;
    },
    cartTotal:(state,getters)=>{
      let oldPrice=0,newPrice=0
      getters.cartFoods.forEach(food=>{
        oldPrice+=food.food_num*(food.specfoods[0].original_price||food.specfoods[0].price)
        newPrice+=food.food_num*food.specfoods[0].price
      })
      return{
        oldPrice,
        newPrice,
      }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: {App}
})
