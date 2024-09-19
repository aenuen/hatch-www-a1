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
    name: '人力资源',
    link: '/joinus',
  },
  {
    name: '项目管理',
    link: '/project',
  },
  {
    name: '联系我们',
    link: '/contact',
  },
  {
    name: '申请保函',
    link: 'https://web.zgwanchuan.cn/',
  },
]
