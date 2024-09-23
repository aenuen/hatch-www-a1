<template>
  <div class="newsContent">
    <div class="left">
      <a-avatar shape="square" :src="newsWrapImage" style="width: 580px; height: 400px" />
    </div>
    <div class="right">
      <ul class="nav">
        <li>
          <a :class="{ current: +newsTabs === 1 }" @click="newsTabsChange(1)">行业资讯</a>
        </li>
        <li>
          <a :class="{ current: +newsTabs === 2 }" @click="newsTabsChange(2)">政策公文</a>
        </li>
        <li>
          <a :class="{ current: +newsTabs === 3 }" @click="newsTabsChange(3)">公司动态</a>
        </li>
      </ul>
      <ul v-if="+newsTabs === 1" class="news">
        <li v-for="(item, index) in articleAry.list1" :key="index">
          <nuxt-link :to="`/newsView/${item.id}`" :title="item.title">
            <div class="newsLeft">
              <b>{{ item.created | timeGetDay }}</b>
              <i>{{ item.created | timeGetYearMonth }}</i>
            </div>
            <div class="newsRight">
              <div class="title" :title="item.title">{{ item.title }}</div>
              <div class="desc">{{ item.desc }}</div>
            </div>
          </nuxt-link>
        </li>
      </ul>
      <ul v-if="+newsTabs === 2" class="news">
        <li v-for="(item, index) in articleAry.list2" :key="index">
          <nuxt-link :to="`/newsView/${item.id}`" :title="item.title">
            <div class="newsLeft">
              <b>{{ item.created | timeGetDay }}</b>
              <i>{{ item.created | timeGetYearMonth }}</i>
            </div>
            <div class="newsRight">
              <div class="title" :title="item.title">{{ item.title }}</div>
              <div class="desc">{{ item.desc }}</div>
            </div>
          </nuxt-link>
        </li>
      </ul>
      <ul v-if="+newsTabs === 3" class="news">
        <li v-for="(item, index) in articleAry.list3" :key="index">
          <nuxt-link :to="`/newsView/${item.id}`" :title="item.title">
            <div class="newsLeft">
              <b>{{ item.created | timeGetDay }}</b>
              <i>{{ item.created | timeGetYearMonth }}</i>
            </div>
            <div class="newsRight">
              <div class="title" :title="item.title">{{ item.title }}</div>
              <div class="desc">{{ item.desc }}</div>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import api from '@/api'
export default {
  name: 'HomeNews',
  filters: {
    timeGetDay(val) {
      return dayjs(val * 1000).format('DD')
    },
    timeGetYearMonth(val) {
      return dayjs(val * 1000).format('YYYY-MM')
    },
  },
  data() {
    return {
      api,
      newsWrapImage: require('@/assets/images/home/news-wrap/bg.png'),
      articleAry: {
        list1: [],
        list2: [],
        list3: [],
      },
      newsTabs: 1,
    }
  },
  created() {
    this.gainArticleData()
  },
  methods: {
    newsTabsChange(val) {
      this.newsTabs = val
    },
    async gainArticleData() {
      await api.articleHome({ timestamp: Date.now() }).then(({ code, data, msg }) => {
        this.articleAry = data
      })
    },
  },
}
</script>
<style lang="scss" scoped>
@import url('./styles/index.scss');
</style>
