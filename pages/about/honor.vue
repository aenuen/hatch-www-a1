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
              <a-breadcrumb-item><nuxt-link to="/about">关于我们</nuxt-link></a-breadcrumb-item>
              <a-breadcrumb-item
                ><nuxt-link :to="`/about/${current}`">{{ nowName }}</nuxt-link></a-breadcrumb-item
              >
            </a-breadcrumb>
          </div>
          <div class="content">
            <div class="page-name">{{ nowName }}</div>
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
      current: 'honor',
      nowName: '荣誉资质',
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
