<template>
  <div>
    <section class="banner about">诚信专业 厚德共赢</section>
    <div class="inside">
      <div class="inside-content">
        <InsideMenu :title="title" :menus="menus" :current="current" />
        <div class="inside-right">
          <div class="title">
            <a-icon type="home" />您现在的位置：
            <a-breadcrumb>
              <a-breadcrumb-item><nuxt-link to="/">首页</nuxt-link></a-breadcrumb-item>
              <a-breadcrumb-item><nuxt-link to="/contact">联系我们</nuxt-link></a-breadcrumb-item>
            </a-breadcrumb>
          </div>
          <div class="content">
            <div class="page-name">{{ nowName }}</div>
            <ul class="contact">
              <li><h3>焦作解放区综合服务与产业孵化平台</h3></li>
              <li><a-icon type="compass" />总部地址：河南省焦作市解放区太行西路16号地理信息产业园E栋102号</li>
              <li><a-icon type="phone" />咨询热线：400-088-3655</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// api
// components
// data
import menus from './modules/menus'
// filter
// function
// mixin
// plugins
// settings
import settings from '@/settings'
export default {
  name: 'AboutUs',
  data() {
    return {
      title: '关于我们',
      menus,
      current: '',
      nowName: '联系方式',
      map: null,
      marker: null,
    }
  },
  head() {
    return {
      title: `${this.nowName}-${settings.title}`,
      meta: [
        { hid: 'description', name: 'description', content: '前端小喵' },
        { hid: 'keywords', name: 'keywords', content: '前端小喵' },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
@import url('@/assets/styles/inside.scss');
</style>
