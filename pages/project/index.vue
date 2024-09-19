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
              <a-breadcrumb-item><nuxt-link :to="`/project`">项目管理</nuxt-link></a-breadcrumb-item>
              <a-breadcrumb-item>
                <nuxt-link :to="`/${current}`">{{ nowName }}</nuxt-link>
              </a-breadcrumb-item>
            </a-breadcrumb>
          </div>
          <div class="content">
            <div class="page-name">{{ nowName }}</div>
            <p>暂无数据，敬请期待……</p>
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
  name: 'BusinessGuarantee',
  data() {
    return {
      title: '项目管理',
      menus,
      current: 'project',
      nowName: '投资项目',
    }
  },
  head() {
    return {
      title: `${this.nowName}-${settings.title}`,
      meta: [
        { hid: 'keywords', name: 'keywords', content: '电子保函服务' },
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
@import url('@/assets/styles/inside.scss');
</style>
