<template>
  <header :class="isTop ? '' : 'isTop'">
    <div class="header-wrap">
      <div class="logo">
        <nuxt-link to="/" :title="logoName">
          <img src="@/assets/images/logo/logo-full.png" :alt="logoName" />
        </nuxt-link>
      </div>
      <div class="jump" @click="openMenu">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" style="enable-background: new 0 0 200 200" xml:space="preserve">
          <path
            d="M190,15H70c-6,0-10,4-10,10v10c0,6,4,10,10,10h120c6,0,10-4,10-10V25C200,19,196,15,190,15L190,15z M20,15H10  C5,15,0,20,0,25v10c0,5,5,10,10,10h10c5,0,10-5,10-10V25C30,20,25,15,20,15z M20,85H10C5,85,0,90,0,95v10c0,5,5,10,10,10h10  c5,0,10-5,10-10V95C30,90,25,85,20,85z M190,85H70c-6,0-10,4-10,10v10c0,6,4,10,10,10h120c6,0,10-4,10-10V95C200,89,196,85,190,85  L190,85z M20,155H10c-5,0-10,5-10,10v10c0,5,5,10,10,10h10c5,0,10-5,10-10v-10C30,160,25,155,20,155z M190,155H70c-6,0-10,4-10,10  v10c0,6,4,10,10,10h120c6,0,10-4,10-10v-10C200,159,196,155,190,155L190,155z"
          ></path>
        </svg>
      </div>
      <nav v-if="isShowMenu || screenWidth > 750">
        <ul class="main-menu">
          <li v-for="(item, index) in headNav" :key="index" @click="closeMenu">
            <nuxt-link v-if="item.link.indexOf('http') === -1" :to="item.link">{{ item.name }}</nuxt-link>
            <a v-else :href="item.link" target="_blank">{{ item.name }}</a>
            <template v-if="item.son">
              <div v-if="screenWidth > 750" class="dropdown-menu">
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
import ScreenWidthMixin from '@/mixins/ScreenWidthMixin'
// plugins
// settings
export default {
  name: 'TheHeader',
  components: {},
  mixins: [ScreenWidthMixin],
  data() {
    return {
      logoName: '临清市综合服务与产业孵化平台',
      headNav,
      isTop: true, // 初始化为true，表示在顶部
      isShowMenu: false,
    }
  },
  methods: {
    handleScroll() {
      this.isTop = window.scrollY === 0
    },
    openMenu() {
      this.isShowMenu = true
    },
    closeMenu() {
      this.isShowMenu = false
    },
  },
}
</script>
<style lang="scss" scoped>
@import url('./styles/index.scss');
</style>
