import request from 'request'
import awaitify, {awaitify2} from '../lib/awaitify'

const METHOD = 'GET'
const URL = 'https://api.weixin.qq.com/sns/userinfo'

/**
 * 获取用户信息
 */
const getUserInfo = function (config) {

  /**
   * @param options.openid
   * @param options.access_token
   */
  return function(options={lang: 'zh_CN'}){
    return new Promise(async function (resolve, reject) {
      try {

        const qs = {
          openid: options.openid,
          access_token: options.access_token,
          lang: options.lang
        }

        const response = await awaitify2(request)({
          method: METHOD,
          url: URL,
          qs: qs
        })

        const resData = JSON.parse(response[1])
        if (resData.errcode) return reject(resData)
        resolve(resData)

      } catch(e) {
        reject(e)
      }
    })
  }
}

export default getUserInfo