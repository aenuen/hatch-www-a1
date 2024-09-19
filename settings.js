const adminPort = 20383
const title = '焦作解放区综合服务与产业孵化平台'
const isDevMode = process.env.NODE_ENV === 'development'
const servePort = isDevMode ? 20380 : 20380
const serveUrl = isDevMode ? 'http://localhost' : 'http://localhos'
module.exports = {
  port: adminPort, // 项目端口
  title, // 项目名称
  showSettings: false, // 是否显示 showSettings
  tagsView: true, // 是否使用 tagsView
  fixedHeader: false, // 是否启用 fixedHeader
  sidebarLogo: true, // 是否使用 sidebarLog
  errorLog: 'development', // 使用errorLog的模式(可使用数组,如:['development','production'])
  cryptoJsSecretKey: 'SecretKey', // CryptoJs加密Key
  successCode: 200,
  tokenCode: -2,
  isDevMode,
  serveUrl,
  apiBaseUrl: `${serveUrl}${servePort || servePort === 80 ? ':' + servePort : ''}`,
}
