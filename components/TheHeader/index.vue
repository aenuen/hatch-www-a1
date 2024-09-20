<template>
  <header :class="isTop ? '' : 'isTop'">
    <div class="header-wrap">
      <div class="logo">
        <nuxt-link to="/" :title="logoName">
          <img src="@/assets/images/logo/logo-full.png" :alt="logoName" />
        </nuxt-link>
      </div>
      <nav>
        <ul class="main-menu">
          <li v-for="(item, index) in headNav" :key="index">
            <nuxt-link v-if="item.link.indexOf('http') === -1" :to="item.link">{{ item.name }}</nuxt-link>
            <a v-else :href="item.link" target="_blank">{{ item.name }}</a>
            <template v-if="item.son">
              <div class="dropdown-menu">
                <ul>
                  <li v-for="(value, key) in item.son" :key="key">
                    <nuxt-link v-if="value.link.indexOf('http') === -1" :to="value.link">{{ value.name }}</nuxt-link>
                    <a v-else :href="value.link" target="_blank">{{ value.name }}</a>
                  </li>
                </ul>
              </div>
            </template>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
// api
// components
// data
import headNav from '~/assets/js/main-nav'
// filter
// function
// mixin
// plugins
// settings
export default {
  name: 'TheHeader',
  components: {},
  mixins: [],
  data() {
    return {
      logoName: '临清市综合服务与产业孵化平台',
      headNav,
      isTop: true, // 初始化为true，表示在顶部
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  created() {},
  methods: {
    handleScroll() {
      this.isTop = window.scrollY === 0
    },
  },
}
</script>
<style lang="scss" scoped>
@import url('./styles/index.scss');
</style>
