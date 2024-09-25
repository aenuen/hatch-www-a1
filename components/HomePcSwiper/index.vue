<template>
  <div class="banner">
    <div v-if="isShowSwiper" class="swiper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) in linkAry" :key="index" class="">
          <nuxt-link :to="item.url" class="link" :style="{ backgroundImage: 'url(' + item.cover + ')', backgroundPosition: 'center center' }" />
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
      <div class="data">
        <div v-for="(item, index) in showData" :key="index" class="count-item">
          <img :src="require('@/assets/images/home-swiper/' + item.image)" alt="" />
          <div>
            <div>
              <CountTo :start-val="0" :end-val="item.number" :duration="3000" />
              <b>{{ item.unit }}</b>
            </div>
            <p>{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import CountTo from 'vue-count-to'
import 'swiper/css/swiper.css'
import showData from './modules/data.js'
import ScreenWidthMixin from '@/mixins/ScreenWidthMixin'
import api from '@/api'
export default {
  name: 'HomeMbSwiper',
  components: { Swiper, SwiperSlide, CountTo },
  mixins: [ScreenWidthMixin],
  data() {
    return {
      api,
      isShowSwiper: false,
      linkAry: [],
      showData,
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        slidesPerView: 1, // 一次展示几张图片
        spaceBetween: 0, // 图片间隔
        slideToClickedSlide: false, // 是否显示左右跳转按钮
        // 这部分用来展示按钮: 查看上一张下一张区域
        // 此处定义的类名需与页面展示左右按钮定义的slot一致
        // 这里类名和slot都保持统一了
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // 此处为分页展示 本次案例没有用到可能页面上没展示出来 类名调整下即可
        // 其他配置请转移至官网查看配置
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    }
  },
  created() {
    this.gainLinkData()
  },
  methods: {
    async gainLinkData() {
      await api.linkList({ type: 3, sort: '-sort' }).then(({ code, data, msg }) => {
        this.linkAry = data
        this.$nextTick(() => {
          this.isShowSwiper = true
        })
      })
    },
  },
}
</script>
<style lang="scss" scoped>
@import url('./styles/index.scss');
</style>
