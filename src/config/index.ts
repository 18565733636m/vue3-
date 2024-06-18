// 配置

// 根据域名自动获取线上环境
// 无需手动配置
let Hcn_Web: any = '',
  Common_Clinical: any = '',
  Hcnweb_Person: any = '',
  baseUrl: any = ''
if (import.meta.env.VITE_ENV == 'development') {
  baseUrl = 'https://jkt.bsoft.com.cn'
  Hcn_Web = '/hcn-web-bdsz'
  Common_Clinical = '/common-clinical-bdsz'
  Hcnweb_Person = '/hcn-web-person-bdsz'
} else if (import.meta.env.VITE_ENV == 'production') {
  baseUrl = 'https://hlwpt.pkuszh.com'
  Hcn_Web = '/hcn-web'
  Common_Clinical = '/common-clinical'
  Hcnweb_Person = '/hcn-web-person'
}

//需导出对象键值
const config = {} as any
config['baseUrl'] = baseUrl
config['baseUrlHcnWeb'] = config['Hcn_Web'] = Hcn_Web
config['baseUrlMobile'] = config['Common_Clinical'] = Common_Clinical
config['baseUrlPerson'] = config['Hcnweb_Person'] = Hcnweb_Person

const BASE_URL_MAP = {
  development: '-bdsz',
  production: '',
  test: '',
  local: ''
  //   UNI: 'https://dy.ttentau.t   op'
}

console.log(import.meta.env.VITE_ENV) //vite环境才有
console.log(process.env.NODE_ENV) //vite只在vue.config.js里面生效

export default config
export const IS_SUB_DOMAIN = ['GITEE_PAGES', 'GP_PAGES'].includes(import.meta.env.VITE_ENV)
export const IS_GITEE_PAGES = ['GITEE_PAGES'].includes(import.meta.env.VITE_ENV)
export const BASE_URL = BASE_URL_MAP[import.meta.env.VITE_ENV]
export const IMG_URL = BASE_URL + '/images/'
export const FILE_URL = BASE_URL + '/data/'
export const IS_DEV = process.env.NODE_ENV !== 'production'

// export default {
//   baseUrl: 'https://jkt.bsoft.com.cn/hcn-web-bdsz',
//   imgPath: '/imgs/',
//   filePreview: 'http://192.168.0.103/static/uploads/',

// }
