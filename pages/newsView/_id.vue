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
              <div class="articleHead">
                <div class="articleTitle">{{ viewData.title }}</div>
                <div class="articleWork">
                  <ul>
                    <!-- 发布时间 -->
                    <li><a-icon type="clock-circle" /> 发布时间：{{ viewData.created | timeGetDate }}</li>
                    <!-- 浏览量 -->
                    <li><a-icon type="eye" /> 浏览量：{{ viewData.view }}</li>
                  </ul>
                </div>
              </div>
              <div class="articleContent" v-html="viewData.content" />
              <div class="h2title">相关阅读</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import menus from '../news/modules/menus'
import api from '@/api'
import { title } from '@/settings'
export default {
  name: 'NewsView',
  components: {},
  filters: {
    timeGetDate(val) {
      return dayjs(val * 1000).format('YYYY-MM-DD')
    },
  },
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
      nowName: '',
      viewId: 0,
      viewData: {},
      description: '',
      keywords: '',
    }
  },
  head() {
    return {
      title: `${this.nowName}-${title}`,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'keywords', name: 'keywords', content: this.keywords },
      ],
    }
  },
  created() {
    this.viewId = +this.$route.params.id
    this.gainDetail()
  },
  methods: {
    async gainDetail() {
      await api.articleDetail({ id: this.viewId }).then(({ code, data, msg }) => {
        this.description = data.desc
        this.keywords = data.keywords
        this.nowName = data.title
        this.viewData = data
        if (+data.type === 1) {
          this.path.push({ name: '行业资讯', url: '/news/industry' })
          this.current = 'industry'
        } else if (+data.type === 2) {
          this.path.push({ name: '政策公文', url: '/news/policy' })
          this.current = 'policy'
        } else if (+data.type === 3) {
          this.path.push({ name: '公司动态', url: '/news/company' })
          this.current = 'company'
        }
        this.nowName = data.title
      })
    },
  },
}
</script>
<style lang="scss" scoped>
@import url('@/assets/styles/inside.scss');
</style>
