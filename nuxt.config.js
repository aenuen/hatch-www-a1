import defaultSettings from './settings'
export default {
  server: {
    port: defaultSettings.port, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: defaultSettings.title,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' }, // utf8编码
      { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1, user-scalable=no' }, // 移动端适配
      { hid: 'description', name: 'description', content: '' }, // 页面描述
      { name: 'keywords', content: '' }, // 页面关键字
      { name: 'format-detection', content: 'telephone=no' }, // 禁止自动识别电话号码
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }, // 网站图标
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 重置样式
    'normalize.css/normalize.css',
    // 动画样式
    'animate.css/animate.min.css',
    // 引入antd
    'ant-design-vue/dist/antd.css',
    // 重置样式
    '@/assets/styles/reset.css',
    // 引入全局样式
    '@/assets/styles/common.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui', // 引入antd
    // { src: '@/plugins/flexible.js', ssr: false }, // 移动端适配
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/svg',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // 合并CSS
    extractCSS: true,
    // postcss
    postcss: {
      postcssOptions: {
        plugins: {
          // 'postcss-pxtorem': {
          //   // rootValue: 100, //计算公式为：设计稿宽度 / 10。假设设计稿为375px，即rootValue设为37.5，意味着每个 rem 单位对应设计稿中的 37.5px
          //   propList: ['*'], // 可以从px更改为rem的属性。
          //   selectorBlackList: ['a-'], // 忽略转换正则匹配到的选择器
          //   minPixelValue: 12, // 设置最小转换px数值，默认为0
          //   mediaQuery: false, // 是否转换媒体查询中的px
          //   replace: true, // 是否直接更换属性值，而不添加具有rem单位的新属性
          //   exclude: /node_modules/i, // 忽略转换正则匹配到的文件
          // },
          autoprefixer: {},
        },
      },
    },
    // 优化
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
  },
}
