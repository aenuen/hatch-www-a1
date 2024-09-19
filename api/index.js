import request from '@/plugins/axios'
import qs from 'qs'
const item = 'api'
export default {
  // 文章翻页列表
  listPage: (params) => request({ url: `/${item}/listPage?${qs.stringify(params)}`, method: 'get' }),
  // 链接列表
  linkList: (params) => request({ url: `/${item}/linkList?${qs.stringify(params)}`, method: 'get' }),
  // 文章首页
  articleHome: (params) => request({ url: `/${item}/articleHome?${qs.stringify(params)}`, method: 'get' }),
}
