import request from 'request'
import awaitify, {awaitify2} from '../lib/awaitify'

const URL = 'https://api.weixin.qq.com/sns/oauth2/access_token'

const getUserAccessToken = function(core){

  return function(code){

    return new Promise(async function(resolve, reject){

      const APPID = core.config.AppID
      const SECRET = core.config.AppSecret

      try {
        let response = await awaitify2(request)({
          url: URL + '?appid='+APPID+'&secret='+SECRET+'&code='+code+'&grant_type=authorization_code',
          method: 'GET'
        })

        var resData = JSON.parse(response[1])
        if (resData.errcode) return reject(resData)
        resolve(resData)

      } catch(e){
        reject(e)
      }

    })

  }

}

export default getUserAccessToken