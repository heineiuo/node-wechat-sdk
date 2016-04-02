import request from 'request'
import awaitify, {awaitify2} from '../lib/awaitify'

const METHOD = 'GET'
const URL = 'https://api.weixin.qq.com/cgi-bin/menu/get'


const getMenu = function(core){

  return function(options){

    return new Promise(async function(resolve, reject){

      try {
        console.log('[wechat sdk] Start getting menu...')

        var query = {
          access_token: await core.getAccessToken()
        }
        console.log('[wechat sdk] access_token : '+query.access_token)

        var response = await awaitify2(request)({
          method: METHOD,
          url: URL,
          qs: query
        })

        var body = JSON.parse(response[1])
        if (body.errcode) return reject(body)
        resolve(body)

      } catch(e){
        reject(e)
      }


    })


  }

}

export default getMenu