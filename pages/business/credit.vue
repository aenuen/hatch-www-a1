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
              <a-breadcrumb-item><nuxt-link to="/">首页</nuxt-link></a-breadcrumb-item>
              <a-breadcrumb-item><nuxt-link to="/business">业务种类</nuxt-link></a-breadcrumb-item>
              <a-breadcrumb-item>
                <nuxt-link :to="`/business/${current}`">{{ nowName }}</nuxt-link>
              </a-breadcrumb-item>
            </a-breadcrumb>
          </div>
          <div class="content">
            <div class="page-name">{{ nowName }}</div>
            <p>信用服务体系是社会信用体系的实体机构支持。信用服务业承担着信用信息采集、加工、处理、传播的功能，在防范信用风险、促进信用交易方面发挥着重要作用。</p>
            <p>从狭义上说，信用服务行业包括征信行业、资信评级业、信用担保业、保理业、商账追收业、信用保险业等。</p>
            <p>从广义上看，信用服务行业还包括为信用交易提供信贷和各种支付凭证、信用证等的金融中介机构(如银行和各种非银行金融机构)。信用产品主要是由信用服务各行业提供的信用信息、信用调查报告、资信评级报告，以及信用金融衍生品等。信用产品市场是现代信用体系高度发达的产物。</p>
            <div class="photo"><img src="@/assets/images/business/4.png" alt="" /></div>
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
import menus from './modules/menus'
// filter
// function
// mixin
// plugins
// settings
import settings from '@/settings'
export default {
  name: 'BusinessCredit',
  data() {
    return {
      title: '业务种类',
      menus,
      current: 'credit',
      nowName: '企业信用服务',
    }
  },
  head() {
    return {
      title: `${this.nowName}-${settings.title}`,
      meta: [
        { hid: 'description', name: 'description', content: '前端小喵' },
        { hid: 'keywords', name: 'keywords', content: '前端小喵' },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
@import url('@/assets/styles/inside.scss');
</style>
