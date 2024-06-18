/*
 * @Author: '得不偿失' '603384836@qq.com'
 * @Date: 2024-05-31 14:48:03
 * @LastEditors: '得不偿失' '603384836@qq.com'
 * @LastEditTime: 2024-06-02 22:57:05
 * @FilePath: \myVue\src\api\user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'
import cfg from '@/config'
import { request } from '@/utils/request'

console.log(cfg)
const base = cfg.baseUrl //开发的时候/
const basePerson = cfg.baseUrlPerson
const baseMobile = cfg.baseUrlMobile
const baseHcnWeb = cfg.baseUrlHcnWeb
console.log(base)

export function userinfo(params?: any, data?: any) {
  return request({ url: '/user/userinfo', method: 'get', params, data })
}

// 通用ajax请求方法
export const commonAjax = (params: any, ServiceId: any, ServiceMethod: any) => {
  const instance = axios.create({
    headers: {
      'X-Access-Token': '1fa65745-05e0-4254-a140-3814e4959815',
      'X-Service-Id': ServiceId,
      'X-Service-Method': ServiceMethod,
      'Content-Type': 'application/json'
    }
  })
  return instance.post(`${baseHcnWeb}/*.jsonRequest`, params).then((res) => res.data)
}

export default commonAjax
