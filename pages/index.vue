<template>
  <div>
    <div class="banner"></div>
    <!-- 业务种类 -->
    <section class="business-lines">
      <div class="insTitle">
        <b>业务种类</b>
        <i>Business Type</i>
      </div>
      <div class="content">
        <div>
          <a href="">
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
          <a href="/">
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
          <a href="/">
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
    </section>
    <!-- 公司简介 -->
    <section class="about-us">
      <div class="insTitle">
        <b>公司简介</b>
        <i>Company Profile</i>
      </div>
      <div class="content">
        <div class="contentText">
          临清市万川信息科技有限公司是一家国家高新技术企业。位于山东省聊城市临清市新华路街道三和路与青年路交叉口向南200米路西三楼314室。公司专注于产业数字经济的高新技术研发和应用，并在业内获得了多项发明专利及软件著作权。在技术、系统管理、应急保障等方面达到了国家最高标准。公司基于企业信用信息、融资需求信息、金融机构产品信息和政府政策信息的交互对接需求，运用人工智能、云计算、大数据和区块链等十二大前沿技术与传统产业相结合，创新研发出临清市综合服务与产业孵化平台。平台融合了电子招标、电子保函、供应链金融管理、供应链商城、综合金融服务、产业整合计划、政府招商引资与产业孵化计划、企业订制化服务、惠企直播间、数字乡村绿色金融、碳汇信用体系、政府双碳新能源解决方案、智慧校园、智慧农业、智慧工地等十五大板块，为金融机构提供科技创新服务，为企业提供数字化解决方案，为政府平台经济建设插上科技的翅膀。
        </div>
        <div contentImage>
          <a-avatar shape="square" :src="aboutUs" style="display: block; width: 400px; height: 250px; margin: auto" />
        </div>
      </div>
    </section>
    <!-- 新闻中心 -->
    <section class="news-wrap">
      <div class="insTitle">
        <b>新闻中心</b>
        <i>News Center</i>
      </div>
      <div class="content">
        <div class="left">
          <a-avatar shape="square" :src="news" style="width: 580px; height: 400px" />
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
            <li>
              <a title="热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线">
                <div class="newsLeft">
                  <b>22</b>
                  <i>2023-09</i>
                </div>
                <div class="newsRight">
                  <div class="title" title="热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线">热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线</div>
                  <div class="desc">热烈庆祝万川汇泽临清市综合服务与产业孵化平台上线，竭诚欢迎你的光临！</div>
                </div>
              </a>
            </li>
            <li>
              <a title="热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线">
                <div class="newsLeft">
                  <b>22</b>
                  <i>2023-09</i>
                </div>
                <div class="newsRight">
                  <div class="title" title="热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线">热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线</div>
                  <div class="desc">热烈庆祝万川汇泽临清市综合服务与产业孵化平台上线，竭诚欢迎你的光临！</div>
                </div>
              </a>
            </li>
            <li>
              <a title="热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线">
                <div class="newsLeft">
                  <b>22</b>
                  <i>2023-09</i>
                </div>
                <div class="newsRight">
                  <div class="title" title="热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线">热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线</div>
                  <div class="desc">热烈庆祝万川汇泽临清市综合服务与产业孵化平台上线，竭诚欢迎你的光临！</div>
                </div>
              </a>
            </li>
            <li>
              <a title="热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线">
                <div class="newsLeft">
                  <b>22</b>
                  <i>2023-09</i>
                </div>
                <div class="newsRight">
                  <div class="title" title="热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线">热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线</div>
                  <div class="desc">热烈庆祝万川汇泽临清市综合服务与产业孵化平台上线，竭诚欢迎你的光临！</div>
                </div>
              </a>
            </li>
          </ul>
          <ul v-if="+newsTabs === 2" class="news">
            <li>
              <a title="热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线">
                <div class="newsLeft">
                  <b>23</b>
                  <i>2023-09</i>
                </div>
                <div class="newsRight">
                  <div class="title" title="热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线">热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线</div>
                  <div class="desc">热烈庆祝万川汇泽临清市综合服务与产业孵化平台上线，竭诚欢迎你的光临！</div>
                </div>
              </a>
            </li>
            <li>
              <a title="热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线">
                <div class="newsLeft">
                  <b>22</b>
                  <i>2023-09</i>
                </div>
                <div class="newsRight">
                  <div class="title" title="热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线">热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线</div>
                  <div class="desc">热烈庆祝万川汇泽临清市综合服务与产业孵化平台上线，竭诚欢迎你的光临！</div>
                </div>
              </a>
            </li>
            <li>
              <a title="热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线">
                <div class="newsLeft">
                  <b>22</b>
                  <i>2023-09</i>
                </div>
                <div class="newsRight">
                  <div class="title" title="热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线">热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线</div>
                  <div class="desc">热烈庆祝万川汇泽临清市综合服务与产业孵化平台上线，竭诚欢迎你的光临！</div>
                </div>
              </a>
            </li>
            <li>
              <a title="热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线">
                <div class="newsLeft">
                  <b>22</b>
                  <i>2023-09</i>
                </div>
                <div class="newsRight">
                  <div class="title" title="热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线">热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线</div>
                  <div class="desc">热烈庆祝万川汇泽临清市综合服务与产业孵化平台上线，竭诚欢迎你的光临！</div>
                </div>
              </a>
            </li>
          </ul>
          <ul v-if="+newsTabs === 3" class="news">
            <li>
              <a title="热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线">
                <div class="newsLeft">
                  <b>24</b>
                  <i>2023-09</i>
                </div>
                <div class="newsRight">
                  <div class="title" title="热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线">热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线</div>
                  <div class="desc">热烈庆祝万川汇泽临清市综合服务与产业孵化平台上线，竭诚欢迎你的光临！</div>
                </div>
              </a>
            </li>
            <li>
              <a title="热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线">
                <div class="newsLeft">
                  <b>22</b>
                  <i>2023-09</i>
                </div>
                <div class="newsRight">
                  <div class="title" title="热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线">热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线</div>
                  <div class="desc">热烈庆祝万川汇泽临清市综合服务与产业孵化平台上线，竭诚欢迎你的光临！</div>
                </div>
              </a>
            </li>
            <li>
              <a title="热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线">
                <div class="newsLeft">
                  <b>22</b>
                  <i>2023-09</i>
                </div>
                <div class="newsRight">
                  <div class="title" title="热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线">热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线</div>
                  <div class="desc">热烈庆祝万川汇泽临清市综合服务与产业孵化平台上线，竭诚欢迎你的光临！</div>
                </div>
              </a>
            </li>
            <li>
              <a title="热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线">
                <div class="newsLeft">
                  <b>22</b>
                  <i>2023-09</i>
                </div>
                <div class="newsRight">
                  <div class="title" title="热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线">热烈庆祝万川汇泽临清市综合服务与孵化产业平台上线</div>
                  <div class="desc">热烈庆祝万川汇泽临清市综合服务与产业孵化平台上线，竭诚欢迎你的光临！</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      aboutUs: require('@/assets/images/home/about-us/1.png'),
      news: require('@/assets/images/home/news-wrap/bg.png'),
      newsTabs: 1,
    }
  },
  methods: {
    newsTabsChange(val) {
      this.newsTabs = val
    },
  },
}
</script>

<style lang="scss" scoped>
@import url('@/assets/styles/banner.scss');
</style>
