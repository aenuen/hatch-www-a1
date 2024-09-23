<template>
  <div class="aboutContent">
    <div>
      <a href="/business">
        <div class="contentImage">
          <img src="@/assets/images/home/business-lines/1.png" alt="电子保函服务" />
        </div>
        <div class="contentMain">
          <h2>电子保函服务</h2>
          <div class="desc">电子保函是保证人以使用CA证书进行电子签名的数据电文为介质通过计算机网络向受益人开立的具有法律效力的担保凭证。</div>
          <a-button type="primary" icon="double-right">了解更多</a-button>
        </div>
      </a>
    </div>
    <div>
      <a href="/business/credit">
        <div class="contentImage">
          <img src="@/assets/images/home/business-lines/2.png" alt="企业信用服务" />
        </div>
        <div class="contentMain">
          <h2>企业信用服务</h2>
          <div class="desc">信用服务体系是社会信用体系的实体机构支持。信用服务业承担着信用信息采集、加工、处理、传播的功能，在防范信用风险、促进信用交易方面发挥着重要作用。</div>
          <a-button type="primary" icon="double-right">了解更多</a-button>
        </div>
      </a>
    </div>
    <div>
      <a href="/business/supply">
        <div class="contentImage">
          <img src="@/assets/images/home/business-lines/3.png" alt="工程供应链" />
        </div>
        <div class="contentMain">
          <h2>工程供应链</h2>
          <div class="desc">在“融资交易”模式中，可提升买卖双方企业流动资金周转率。 供应链一体化，创建支付和收款方案，破解企业融资难题。</div>
          <a-button type="primary" icon="double-right">了解更多</a-button>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeBusiness',
}
</script>
<style lang="scss" scoped>
@import url('./styles/index.scss');
</style>
