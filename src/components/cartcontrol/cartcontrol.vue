<template>
  <div class="cartcontrol">
    <transition name="slide-fade">
      <div class="subtraction-btn icon-remove_circle_outline" v-show="food.count > 0 " @click="subtraction"></div>
    </transition>
      <div class="count"v-show="food.count > 0">{{food.count}}</div>
      <div class="add-btn icon-add_circle" @click="add"></div>
  </div>

</template>

<script>
    import  Vue from 'vue'
    export default {
      props: {
        food: {
          type: Object
        }
      },
      methods: {
        subtraction() {
          this.food.count--
        },
        add() {
          if(!this.food.count){
            Vue.set(this.food, 'count',1)
          } else {
            this.food.count++;
          }
        }
      }
    }
</script>

<style lang="stylus" scoped>
  .cartcontrol
    font-size: 0
    .subtraction-btn, .add-btn
      display: inline-block
      padding: 6px
      font-size: 24px
      line-height: 24px
      color: rgb(0, 160, 220)
      vertical-align: top
    .count
      display: inline-block
      color: rgb(147, 153, 159)
      font-size: 12px
      line-height: 24px
      vertical-align: top
      width: 12px
      padding: 6px 0
      text-align: center
  .slide-fade-enter-active,.slide-fade-leave-active
    transition: all .4s linear
  .slide-fade-enter, .slide-fade-leave-to
    transform: translateX(20px)
    opacity: 0
</style>
