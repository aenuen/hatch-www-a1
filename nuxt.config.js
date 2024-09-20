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
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: '' }, { name: 'format-detection', content: 'telephone=no' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 重置样式
    'normalize.css/normalize.css',
    // 动画样式
    'animate.css/animate.min.css',
    // 重置样式
    '@/assets/styles/reset.css',
    // 引入全局样式
    '@/assets/styles/common.scss',
    // 引入antd
    'ant-design-vue/dist/antd.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/antd-ui'],

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
    // // 开启CSS SourceMaps
    // cssSourceMap: false,
    // // 开启CSS压缩
    // cssMinimize: true,
    // // 开启JS SourceMaps
    // sourceMap: false,
    // // 开启JS压缩
    // minimize: true,
    // // 开启图片压缩
    // optimizeImages: true,
    // // 开启字体压缩
    // optimizeFonts: true,
    // // 开启浏览器兼容性
    // transpile: ['@babel/polyfill'],
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
