import request from 'request'
import awaitify, {awaitify2} from '../lib/awaitify'

const METHOD = 'POST'
const URL = 'https://api.weixin.qq.com/cgi-bin/menu/create'


const createMenu = function(core){

  return function(options){

    return new Promise(async function(resolve, reject){

      try {

        const body = JSON.stringify(options)
        const response = await awaitify2(request)({
            method: METHOD,
            url: URL,
            qs: {
              access_token: await core.getAccessToken()
            },
            body: body,
            // formData: options,
            // form: options.body
          }
        )

        console.log('[wechatsdk] createMenu response:')
        const responseBody = JSON.parse(response[1])
        if(responseBody.errcode) return reject(responseBody)
        resolve(responseBody)

      } catch(e){
        reject(e)
      }

    })

  }

}

export default createMenu