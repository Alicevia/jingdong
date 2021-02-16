import { post } from './config'
// 注册
export const reqRegister = (data) => post({
  url: '/api/user/register',
  data
})
export const reqLogin = (data) => post({
  url: '/api/user/login',
  data
})
