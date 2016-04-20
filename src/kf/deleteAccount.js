// 删除客服帐号

const deleteAccount = function(core){
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

export default deleteAccount