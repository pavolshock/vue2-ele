<template>
    <div class="shopcart">
      <div class="content">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo">
              <i class="icon-shopping_cart"></i>
            </div>
          </div>
          <div class="price">
            <span>¥ 0</span>
          </div>
          <div class="desc">
            <span>另需配送费¥{{deliveryPrice}}元</span>
          </div>
        </div>
        <div class="content-right">
          <div class="pay">
            <span>¥{{minPrice}}元起送</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          deliveryPrice: 0,
          minPrice: 0
        }
      },
      props: {
        deliveryPrice: {
          type: Number,
          default: 0
        },
        minPrice: {
          type: Number,
          default: 0
        }
      }
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
            .icon-shopping_cart
              line-height: 44px
              font-size: 24px
              color: #80858a
        .price
          display: inline-block
          line-height: 24px
          font-size: 18px
          color: #7e8c8d
          margin-top: 12px
          border-right: 1px solid rgba(255, 255, 255, 0.1)
          color: rgba(255, 255, 255, 0.4)
          padding-right: 12px
        .desc
          display: inline-block
          color: #7e8c8d
          margin-left: 12px
          line-height: 24px
          font-size: 16px
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
</style>
