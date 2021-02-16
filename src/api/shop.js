import { get } from './config'
// 注册
export const reqNearList = () => get({
  url: '/api/shop/hot-list'
})
