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
                <nuxt-link to="/business">{{ nowName }}</nuxt-link>
              </a-breadcrumb-item>
            </a-breadcrumb>
          </div>
          <div class="content">
            <div class="page-name">{{ nowName }}</div>
            <p>电子保函是保证人以使用CA证书进行电子签名的数据电文为介质通过计算机网络向受益人开立的具有法律效力的担保凭证。电子保函一般由被保证人通过计算机网络向保证人发出申请，保证人以替被保证人提供保证为目的，使用CA证书对数据电文进行电子签名，并通过计算机网络为媒介，向受益人开立具有法律效力的保证担保电子信用凭证。</p>
            <div class="h2title">招投标疼点难点</div>
            <div class="photo"><img src="@/assets/images/business/1.png" alt="" /></div>
            <div class="h2title">应用电子保函的优势</div>
            <div class="photo"><img src="@/assets/images/business/2.png" alt="" /></div>
            <div class="h2title">电子保函产品的操作流程</div>
            <div class="photo"><img src="@/assets/images/business/3.png" alt="" /></div>
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
  name: 'BusinessGuarantee',
  data() {
    return {
      title: '业务种类',
      menus,
      current: 'guarantee',
      nowName: '电子保函服务',
    }
  },
  head() {
    return {
      title: `${this.nowName}-${settings.title}`,
      meta: [
        { hid: 'keywords', name: 'keywords', content: '电子保函服务' },
        {
          hid: 'description',
          name: 'description',
          content: '电子保函是保证人以使用CA证书进行电子签名的数据电文为介质通过计算机网络向受益人开立的具有法律效力的担保凭证。电子保函一般由被保证人通过计算机网络向保证人发出申请，保证人以替被保证人提供保证为目的，使用CA证书对数据电文进行电子签名，并通过计算机网络为媒介，向受益人开立具有法律效力的保证担保电子信用凭证。',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
@import url('@/assets/styles/inside.scss');
</style>
