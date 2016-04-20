/**
 * 被动回复消息
 * 如果是匹配自动回复,则回复自动回复,
 * 没有匹配,回复success,并发送给客服处理
 */


const passiveReply = function(core){
  return function(options){
    return new Promise(function(resolve, reject){

      try {
        resolve(1)
      } catch(e){
        reject(e)
      }

    })
  }
}

export default passiveReply