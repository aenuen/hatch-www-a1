// noinspection JSUnresolvedFunction,JSCheckFunctionSignatures

import axios from 'axios'
import { message } from 'ant-design-vue'
import { apiBaseUrl, successCode } from '@/settings'

const service = axios.create({
  // 创建一个axios实例
  baseURL: apiBaseUrl,
  // withCredentials: true, // 跨域请求时发送cookies
  timeout: 5000, // 超时时间
})

// 请求拦截器 request interceptor
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 响应拦截器 response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code !== successCode) {
      const errMsg = res.msg || '请求失败！'
      message.error(errMsg, 5)
      return Promise.reject(new Error(errMsg))
    } else {
      return res
    }
  },
  (error) => {
    // 状态非200才会到这里来
    const { msg } = error.response.data
    message.error(msg || '', 5)
    return Promise.reject(error)
  },
)

export default service
