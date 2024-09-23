<template>
  <div class="aboutContent">
    <div class="contentText">
      万川（焦作）科技有限责任公司是一家国家高新技术企业。位于河南省焦作市解放区太行西路16号地理信息产业园E栋102号室。公司专注于产业数字经济的高新技术研发和应用，并在业内获得了多项发明专利及软件著作权。在技术、系统管理、应急保障等方面达到了国家最高标准。公司基于企业信用信息、融资需求信息、金融机构产品信息和政府政策信息的交互对接需求，运用人工智能、云计算、大数据和区块链等十二大前沿技术与传统产业相结合，创新研发出焦作解放区综合服务与产业孵化平台。平台融合了电子招标、电子保函、供应链金融管理、供应链商城、综合金融服务、产业整合计划、政府招商引资与产业孵化计划、企业订制化服务、惠企直播间、数字乡村绿色金融、碳汇信用体系、政府双碳新能源解决方案、智慧校园、智慧农业、智慧工地等十五大板块，为金融机构提供科技创新服务，为企业提供数字化解决方案，为政府平台经济建设插上科技的翅膀。
    </div>
    <div contentImage>
      <a-avatar shape="square" :src="aboutUsImage" style="display: block; width: 400px; height: 250px; margin: auto" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeAboutUs',
  data() {
    return {
      aboutUsImage: require('@/assets/images/home/about-us/1.png'),
    }
  },
}
</script>
<style lang="scss" scoped>
@import url('./styles/index.scss');
</style>
