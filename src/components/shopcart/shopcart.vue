<template>
    <div class="shopcart">
      <div class="content">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo" :class="{'highlight': totalCount > 0 }">
              <i class="icon-shopping_cart" :class="{'highlight': totalCount > 0 }"></i>
            </div>
            <div class="num" v-show="totalCount > 0 ">{{totalCount}}</div>
          </div>
          <div class="price" :class="{'highlight': totalCount > 0 }">
            <span>¥ {{totalPrice}}</span>
          </div>
          <div class="desc">
            <span>另需配送费¥{{ $store.state.seller.data.deliveryPrice }}元</span>
          </div>
        </div>
        <div class="content-right">
          <div class="pay" :class="payClass">
            <span>{{payDesc}}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      props: {
        selectFoods: {
          type: Array,
          default () {
            return [{
              price: 0,
              count: 1
            }]
          }
        }
      },
      computed: {
        totalPrice() {
          let total = 0;
          this.selectFoods.forEach( (foods)=> {
            total += foods.price * foods.count;
          } )
          return total;
        },
        totalCount() {
          let total = 0;
          this.selectFoods.forEach( (foods)=> {
            total +=foods.count;
          } )
          return total;
        },
        payDesc() {
          if(this.totalPrice === 0){
            return '￥'+ minPrice + '元起送'
          }else if(this.totalPrice < this.$store.state.seller.data.minPrice){
            let dif = this.$store.state.seller.data.minPrice - this.totalPrice;
            return '还差'+ dif + '元起送'
          }else{
            return '去结算';
          }
        },
        payClass() {
          if(this.totalPrice < this.$store.state.seller.data.minPrice){
            return 'not-enough'
          }else{
            return 'enough'
          }
        }
      }
      /*mounted: function () {
        console.log(this.$store !== undefined ? 555 : 666)
      }*/
    }
</script>

<style lang="stylus" scoped>
  .shopcart
    position: fixed
    left: 0
    bottom: 0
    z-index: 50
    width: 100%
    height: 48px
    background: #000
    .content
      display: flex
      background: #141d27
      .content-left
        flex: 1
        .logo-wrapper
          display: inline-block
          position: relative
          top: -10px
          margin: 0 12px
          padding: 6px
          width: 56px
          height: 56px
          box-sizing: border-box
          vertical-align: top
          border-radius: 50%
          background: #141d27
          .logo
            width: 100%
            height: 100%
            border-radius: 50%
            background: #2b343c
            text-align: center
            &.highlight
              background: rgb(0, 160, 220)
            .icon-shopping_cart
              line-height: 44px
              font-size: 24px
              color: #80858a
              &.highlight
                color: #fff
          .num
            position: absolute
            top: 0
            right: 0
            width: 24px
            height: 16px
            line-height: 16px
            text-align: center
            border-radius: 16px
            font-size: 9px
            font-weight: 700
            color: #fff
            background: rgb(240, 20, 20)
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4)
        .price
          display: inline-block
          line-height: 24px
          font-size: 16px
          margin-top: 12px
          border-right: 1px solid rgba(255, 255, 255, 0.1)
          color: rgba(255, 255, 255, 0.4)
          padding-right: 12px
          &.highlight
            color: #fff
        .desc
          display: inline-block
          color: #7e8c8d
          margin-left: 12px
          line-height: 24px
          font-size: 14px
      .content-right
        flex: 0 0 105px
        width: 105px
        background: #2b343c
        .pay
          color: rgba(255, 255, 255, 0.4)
          line-height: 48px
          height: 48px
          font-size: 16px
          text-align: center
          &.enough
            background: #00b43c
            color: #fff
          &.not-enough
            background: #2b333b
</style>
