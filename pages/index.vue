<template>
  <div>
    <div class="banner"></div>
    <!-- 业务种类 -->
    <section class="business-lines">
      <div class="insTitle">
        <b>业务种类</b>
        <i>Business Type</i>
      </div>
      <HomeBusiness />
    </section>
    <!-- 公司简介 -->
    <section class="about-us">
      <div class="insTitle">
        <b>公司简介</b>
        <i>Company Profile</i>
      </div>
      <HomeAbout />
    </section>
    <!-- 新闻中心 -->
    <section class="news-wrap">
      <div class="insTitle">
        <b>新闻中心</b>
        <i>News Center</i>
      </div>
      <HomeNews />
    </section>
    <!-- 合作伙伴 -->
    <section class="partner-wrap">
      <div class="insTitle">
        <b>合作伙伴</b>
        <i>OUR PARTNERS</i>
      </div>
      <HomePartner />
    </section>
  </div>
</template>

<script>
import settings from '@/settings'
export default {
  name: 'IndexPage',
  head() {
    return {
      title: `首页-${settings.title}`,
      meta: [
        { hid: 'description', name: 'description', content: '前端小喵' },
        { hid: 'keywords', name: 'keywords', content: '前端小喵' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import url('@/assets/styles/home.scss');
</style>
