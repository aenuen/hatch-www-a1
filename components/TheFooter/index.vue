<template>
  <footer>
    <div class="footerMenu">
      <div class="footerWrap">
        <ul>
          <li v-for="(item, index) in headNav" :key="index">
            <nuxt-link v-if="item.link.indexOf('http') === -1" :to="item.link">{{ item.name }}</nuxt-link>
            <a v-else :href="item.link" target="_blank">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footerCenter">
      <div class="footerWrap">
        <ul>
          <li class="name">焦作解放区综合服务与产业孵化平台</li>
          <li class="telephone">
            <a-icon type="phone" class="telIcon" />
            <a href="tel:400-088-3655">400-088-3655</a>
          </li>
          <li class="address">地址：河南省焦作市解放区太行西路16号地理信息产业园E栋102号</li>
        </ul>
      </div>
    </div>
    <div class="footerBottom">版权所有 &copy; 2022焦作解放区综合服务与产业孵化平台 All Rights Reserved <a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备19019555号-7</a></div>
  </footer>
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
  name: 'TheFooter',
  components: {},
  mixin: [],
  data() {
    return {
      headNav,
    }
  },
  created() {},
  methods: {},
}
</script>
<style lang="scss" scoped>
@import url('./styles/index.scss');
</style>
