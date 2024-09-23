export default [
  {
    name: '网站首页',
    link: '/',
  },
  {
    name: '关于我们',
    link: '/about',
  },
  {
    name: '新闻中心',
    link: '/news',
    son: [
      { name: '行业资讯', link: '/news/industry' },
      { name: '政策公文', link: '/news/policy' },
      { name: '公司动态', link: '/news/company' },
    ],
  },
  {
    name: '业务种类',
    link: '/business',
    son: [
      { name: '电子保函服务', link: '/business' },
      { name: '企业信用服务', link: '/business/credit' },
      { name: '工程供应链服务', link: '/business/supply' },
    ],
  },
  {
    name: '数字能源',
    link: '/energy',
  },
  {
    name: '联系我们',
    link: '/contact',
  },
  {
    name: '智慧司法平台',
    link: 'http://fayuan.zgwanchuan.cn/#/guide',
  },
  {
    name: '申请保函',
    link: 'https://web.zgwanchuan.cn/',
  },
]
