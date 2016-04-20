import request from 'request'

const METHOD = 'POST'
const URL = 'https://api.weixin.qq.com/cgi-bin/message/template/send'


// 发送模板消息
const sendMsg = function(core){
  return function(msg){
    return new Promise(async function(resolve, reject){

      let response = await request({
        method: METHOD,
        url: URL,
        access_token: await core.getAccessToken()
      })

      if (response.body.success){
        resolve(true)
      } else {
        reject(response.body)
      }

    })
  }
}

export {sendMsg}