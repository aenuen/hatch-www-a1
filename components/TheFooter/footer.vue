<template>
  <footer>
    <div class="footerWrap">
      <div class="footerLeft">
        <div class="TitleApp">App下载</div>
        <div class="footerIcon">
          <div class="commonIcon apple">
            <div class="text">App Store</div>
            <div class="qrcShow">
              <img src="@/assets/images/qrc/app.png" />
              <div class="qrcArrow"></div>
            </div>
          </div>
          <div class="commonIcon android">
            <div class="text">Android</div>
            <div class="qrcShow">
              <img src="@/assets/images/qrc/app.png" />
              <div class="qrcArrow"></div>
            </div>
          </div>
        </div>
        <div class="footerChat">
          <div class="WeChatIcon">
            <div class="icon"></div>
            <div class="qrcShow">
              <img src="@/assets/images/qrc/app.png" />
              <div class="qrcArrow"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="footerRight">
        <div class="TitleEarth">友情链接</div>
        <div class="footerLink">
          <div class="linkItem">
            <div class="title">金融机构网站</div>
            <ul>
              <li v-for="(item, index) in dataInfo.financial" :key="index">
                <a :href="item.link" target="_blank" :title="item.name">{{ item.name }}</a>
              </li>
            </ul>
          </div>
          <div class="linkItem">
            <div class="title">政府机构网站</div>
            <ul>
              <li v-for="(item, index) in dataInfo.government" :key="index">
                <a :href="item.link" target="_blank" :title="item.name">{{ item.name }}</a>
              </li>
            </ul>
          </div>
          <div class="linkItem">
            <div class="title">金融类网站</div>
            <ul>
              <li v-for="(item, index) in dataInfo.government" :key="index">
                <a :href="item.link" target="_blank" :title="item.name">{{ item.name }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footerCopy">
          <div>技术支持：福建万川信息科技股份有限公司</div>
          <div>ICP备案：<a href="https://beian.miit.gov.cn" target="_blank">闽ICP备19019555号</a></div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
// api
// components
// data
import dataInfo from './modules/data.js'
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
      dataInfo,
    }
  },
  created() {},
  methods: {},
}
</script>
<style lang="scss" scoped>
@import url('@/assets/styles/footer.scss');
</style>
