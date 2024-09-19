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
.inside-left {
  width: 240px;
  margin-right: 20px;
  .title {
    width: 100%;
    height: 80px;
    line-height: 80px;
    color: #fff;
    text-indent: 30px;
    font-size: 28px;
    font-weight: bold;
    background-image: url('~/assets/images/inside/title-bg.png');
  }
  .menu {
    background-color: #fff;
    padding-bottom: 30px;
  }

  .menu ul {
    border-top: 1px solid #f7f7f7;
  }

  .menu a {
    line-height: 48px;
    text-indent: 30px;
    border-left: 3px solid #fff;
    border-bottom: 1px solid #f7f7f7;
    display: block;
    font-size: 16px;
    color: #000;
    &.current {
      background-color: rgba(0, 123, 199, 0.1);
      border-left: 3px solid #007bc7;
      display: block;
      color: #007bc7;
    }
    &:hover {
      background-color: rgba(0, 123, 199, 0.1);
      border-left: 3px solid #007bc7;
    }
  }
}
</style>
