import qs from 'qs'
import request from '@/plugins/axios'
const item = 'api'
export default {
  // 链接列表
  linkList: (params) => request({ url: `/${item}/linkList?${qs.stringify(params)}`, method: 'get' }),
  // 文章首页
  articleHome: (params) => request({ url: `/${item}/articleHome?${qs.stringify(params)}`, method: 'get' }),
  // 文章翻页列表
  articlePage: (params) => request({ url: `/${item}/articlePage?${qs.stringify(params)}`, method: 'get' }),
  // 文章详情
  articleDetail: (params) => request({ url: `/${item}/articleDetail?${qs.stringify(params)}`, method: 'get' }),
}
