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
              <a-breadcrumb-item v-for="(item, index) in path" :key="index">
                <nuxt-link :to="item.url">{{ item.name }}</nuxt-link>
              </a-breadcrumb-item>
            </a-breadcrumb>
          </div>
          <div class="content">
            <div class="article">
              <div class="articleList">
                <ul class="news">
                  <li v-for="(item, index) in tableData" :key="index">
                    <nuxt-link :to="`/newsView/${item.id}`" :title="item.title">
                      <div class="newsLeft">
                        <b>{{ item.created | timeGetDay }}</b>
                        <i>{{ item.created | timeGetYearMonth }}</i>
                      </div>
                      <div class="newsRight">
                        <div class="rTitle" :title="item.title">{{ item.title }}</div>
                        <div class="rDesc">{{ item.desc }}</div>
                      </div>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
              <div class="articlePage">
                <a-pagination size="small" :current="queryList.page" :total="tableDataLength" />
              </div>
            </div>
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
// filter
// function
// mixin
// plugins
// settings
import dayjs from 'dayjs'
import menus from './modules/menus'
import ListMixin from '@/mixins/ListMixin'
import api from '@/api'
import settings from '@/settings'
export default {
  name: 'NewsIndex',
  filters: {
    timeGetDay(val) {
      return dayjs(val * 1000).format('DD')
    },
    timeGetYearMonth(val) {
      return dayjs(val * 1000).format('YYYY-MM')
    },
  },
  mixins: [ListMixin],
  data() {
    return {
      api,
      path: [
        { name: '首页', url: '/' },
        { name: '新闻中心', url: '/news' },
      ],
      title: '新闻中心',
      menus,
      current: 'news',
      nowName: '新闻中心',
    }
  },
  head() {
    return {
      title: `${this.nowName}-${settings.title}`,
      meta: [
        { hid: 'description', name: 'description', content: '新闻中心' },
        { hid: 'keywords', name: 'keywords', content: '新闻中心' },
      ],
    }
  },
  created() {
    this.gainArticleList()
  },
  methods: {
    async gainArticleList() {
      await api.articlePage(this.queryList).then(({ code, data, msg }) => {
        const { list, count } = data
        this.tableData = list
        this.tableDataLength = count
      })
    },
  },
}
</script>
<style lang="scss" scoped>
@import url('@/assets/styles/inside.scss');
</style>
