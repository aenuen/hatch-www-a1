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
      { charset: 'utf-8' }, //
      { name: 'viewport', content: '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">' }, //
      { hid: 'description', name: 'description', content: '' }, //
      { name: 'format-detection', content: 'telephone=no' }, //
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 重置样式
    'normalize.css/normalize.css',
    // 重置样式
    '@/assets/styles/reset.css',
    // 引入全局样式
    '@/assets/styles/common.scss',
    // 动画样式
    'animate.css/animate.min.css',
    // 引入antd
    'ant-design-vue/dist/antd.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui', // 引入antd
    { src: '@/plugins/flexible.js', ssr: false }, // 移动端适配
    { src: '@/plugins/rem.js', ssr: false }, // 移动端适配
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
      plugins: {
        'postcss-pxtorem': {
          rootValue: 80, // 1920的设计图
          unitPrecision: 5, // 允许REM单位增长到的十进制数字。
          propWhiteList: [], // 默认值是一个空数组，这意味着禁用白名单并启用所有属性。
          propBlackList: [], // 如果非空的，你的属性将被阻止从转换中转换。
          propList: ['*'], // 可以从px更改为rem的属性。
          exclude: false, // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法。例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值。
          selectorBlackList: [], // 要忽略并保留为px的选择器。
          replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
          mediaQuery: false, // （布尔值）允许在媒体查询中使用px。
          minPixelValue: 1, // 设置要替换的最小像素值。默认 0。
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
