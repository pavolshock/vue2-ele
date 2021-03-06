<template>
    <header id="header">
      <div class="header-top">
        <div class="avatar" v-if="$store.state.seller.data">
          <img :src="$store.state.seller.data.avatar" width="64" height="64">
        </div>
        <div v-if="$store.state.seller.data" class="content">
          <div class="title">
            <span class="brand"></span>
            <span class="name">{{$store.state.seller.data.name}}</span>
          </div>
          <div class="description">
            {{$store.state.seller.data.description}}/{{$store.state.seller.data.deliveryTime}}分钟送达
          </div>
          <div v-if="$store.state.seller.data" class="support">
            <span class="icon" :class="classMap[$store.state.seller.data.supports[0].type]"></span>
            <span class="text">{{$store.state.seller.data.supports[0].description}}</span>
          </div>
        </div>
        <div v-if="$store.state.seller.data" class="support-count" @click="detailShow">
          <span class="count">{{$store.state.seller.data.supports.length}}个</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
      </div>
      <div v-if="$store.state.seller.data" class="scroll-news" @click="detailShow">
        <span class="news_title"></span><span class="news_text">{{$store.state.seller.data.bulletin}}</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
      <div v-if="$store.state.seller.data" class="background">
        <img :src="$store.state.seller.data.avatar" width="100%" height="100%">
      </div>
      <transition name="list">
        <div v-if="$store.state.seller.data" class="detail" v-show="detail">
          <div class="detail-wrapper clearfix">
            <div class="detail-main">
              <h1 class="name">{{$store.state.seller.data.name}}</h1>
              <div class="star-wrapper">
                <star :size="48" :score="$store.state.seller.data.score"></star>
              </div>
              <div class="title">
                <div class="line"></div>
                <div class="text">优惠信息</div>
                <div class="line"></div>
              </div>
              <div class="supports">
                <ul>
                  <li class="supports-item" v-for="item in $store.state.seller.data.supports">
                    <i class="icon" :class="classMap[item.type]"></i>
                    <span class="text">{{item.description}}</span>
                  </li>
                </ul>
              </div>
              <div class="title">
                <div class="line"></div>
                <div class="text">商家公告</div>
                <div class="line"></div>
              </div>
              <div class="bulletin">
                <p class="content">{{$store.state.seller.data.bulletin}}</p>
              </div>
            </div>
          </div>
          <div class="detail-close" @click="detailOpen">
            <i class="icon-close"></i>
          </div>
        </div>
      </transition>
    </header>
</template>

<script>
  import star from '../star/star'
    export default {
      data() {
        return {
          detail: false
        }
      },
      components:{
        star
      },
      props: {
        seller: {
          type: Object
        }
      },
      created() {
        this.classMap = ['decrease','discount','guarantee','invoice','special']
      },
      methods: {
        detailShow() {
          this.detail = true
        },
        detailOpen() {
          this.detail = false
        }
      }
    }
</script>

<style lang="stylus" scoped>
  @import "../../common/stylus/mixin"
  #header
    position: relative
    color: #fff
    overflow: hidden
    background: rgba(7, 17, 27, 0.5)
    .header-top
      padding: 24px 12px 18px 24px
      font-size: 0
      position: relative;
      .avatar
        display: inline-block
        vertical-align: top
        img
          border-radius: 2px
      .content
        display: inline-block
        font-size: 14px
        margin-left: 16px
        .title
          margin: 2px 0 8px 0
          .brand
            display inline-block
            vertical-align: top
            width: 30px
            height: 18px
            bg-image('brand')
            background-size: 30px 18px
            background-repeat: no-repeat
          .name
            margin-left: 6px
            font-size: 16px
            line-height: 18px
            font-weight: bold
        .description
          margin-bottom: 10px
          line-height: 12px
          font-size: 12px
        .support
          .icon
            display: inline-block
            vertical-align: bottom
            width: 12px
            height: 12px
            margin-right: 4px
            background-size: 12px 12px
            background-repeat: no-repeat
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.guarantee
              bg-image('guarantee_1')
            &.invoice
              bg-image('invoice_1')
            &.special
              bg-image('special_1')
          .text
            line-height: 12px;
            font-size: 10px
      .support-count
        position: absolute
        right: 12px
        bottom: 18px
        padding: 0 8px
        height: 24px
        line-height: 24px
        border-radius: 14px
        -webkit-background-origin: content-box
        background: rgba(0, 0, 0, 0.2)
        text-align: center
        .count
          font-size: 10px
          vertical-align: top
        .icon-keyboard_arrow_right
          line-height: 24px
          font-size: 10px
    .scroll-news
      position: relative;
      height: 28px
      line-height: 28px
      padding: 0 22px 0 12px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      background: rgba(7, 17, 27, 0.2)
      .news_title
        display: inline-block
        vertical-align: top
        width: 22px
        height: 12px
        margin-top: 8px
        bg-image('bulletin')
        background-size: 22px 12px
        background-repeat: no-repeat
      .news_text
        font-size: 10px
        vertical-align: top
        margin-left: 4px
      .icon-keyboard_arrow_right
        position: absolute
        right: 12px
        top: 8px
        font-size: 10px
    .background
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: -1
      filter: blur(10px)
    .detail
      position: fixed
      top: 0
      left: 0
      width: 100%
      height: 100%
      overflow: auto
      background: rgba(7, 17, 27, 0.8)
      backdrop-filter: blur(10px)  // ios 模糊效果
      z-index: 9999
      .detail-wrapper
        width: 100%
        min-height: 100%
        .detail-main
          margin-top: 64px
          padding-bottom: 64px
          .name
            line-height: 16px
            text-align: center
            font-size: 16px
            font-weight: 700
          .star-wrapper
            margin-top: 18px;
            text-align: center;
          .title
            display: flex
            width: 80%
            margin: 30px auto 24px auto
            .line
              flex: 1
              position: relative;
              top: -8px;
              border-bottom: 1px solid rgba(255, 255, 255, 0.2)
            .text
              padding: 0 12px
              font-size: 14px
              line-height: 14px
              font-weight: 700
          .supports
            width: 80%
            margin: 0 auto
            .supports-item
              padding: 0 12px
              margin-bottom: 12px
              font-size: 0
              &:last-child
                margin-bottom: 0
              .icon
                display: inline-block
                width: 16px
                height: 16px
                vertical-align: top
                margin-right: 6px
                background-size: 16px 16px
                background-repeat: no-repeat
                &.decrease
                  bg-image('decrease_2')
                &.discount
                  bg-image('discount_2')
                &.guarantee
                  bg-image('guarantee_2')
                &.invoice
                  bg-image('invoice_2')
                &.special
                  bg-image('special_2')
              .text
                font-size: 12px
                line-height: 16px
          .bulletin
            width: 80%
            margin: 0 auto
            .content
              font-size: 12px
              font-weight: 300
              line-height: 24px
              padding: 24px 12px
      .detail-close
        width: 32px
        height: 32px
        margin: 10px auto
        font-size: 32px
        color: rgba(255, 255, 255, 0.5)
  .list-enter-active, .list-leave-active
    transition: all 1s
  .list-enter,.list-leave-to
    opacity: 0
    transform: translateY(30px)
</style>
