import request from 'request'
import {awaitify2} from '../lib/awaitify'

const METHOD = 'GET'
const URL = 'https://api.weixin.qq.com/sns/oauth2/refresh_toke'

/**
 * 刷新access_token
 */
const freshAccessToken = function (core) {
  return function(options){
    return new Promise(async function (resolve, reject) {
      try {

        const qs = {
          appid: core.config.AppID,
          fresh_token: options.fresh_token,
          grant_type: 'refresh_token'
        }

        const response = awaitify2(request)({
          qs: qs,
          url: URL,
          method: METHOD
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

export default freshAccessToken