
const METHOD = 'POST'
const URL = 'https://api.weixin.qq.com/cgi-bin/message/custom/send'

const sendMsg = function(core){
  return function(options){

    return new Promise(async function(resolve, reject){
      try {

        let access_token = await core.getAccessToken()

        resolve(1)
      } catch(e){
        reject(e)
      }
    })
  }
}

export default sendMsg