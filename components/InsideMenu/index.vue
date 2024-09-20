<template>
  <div class="inside-left">
    <div class="title">{{ title }}</div>
    <div class="menu">
      <ul>
        <li v-for="(item, index) in menus" :key="index">
          <nuxt-link :to="item.link" :class="{ current: item.code === current }">{{ item.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// api
// components
// data
// filter
// function
// mixin
// plugins
// settings
export default {
  name: 'InsideMenu',
  props: {
    title: {
      type: String,
      default: '',
    },
    menus: {
      type: Array,
      default: () => [],
    },
    current: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
@import url('./styles/index.scss');
</style>
