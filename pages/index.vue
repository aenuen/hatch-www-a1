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
        { hid: 'description', name: 'description', content: '焦作解放区综合服务与产业孵化平台,工程担保,工程投标担保,工程履约担保,农民工工资担保' },
        { hid: 'keywords', name: 'keywords', content: '焦作解放区综合服务与产业孵化平台成立以来，励志成为行业的后起之秀，秉承“诚信专业 厚德共赢”的理念，专业从事工程投标担保、投标履约、农民工工资担保等业务。' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import url('@/assets/styles/home.scss');
</style>
