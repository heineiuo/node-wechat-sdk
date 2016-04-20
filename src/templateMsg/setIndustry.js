// 设置所属行业


const METHOD = 'GET'
const URL = 'https://api.weixin.qq.com/cgi-bin/template/api_set_industry?access_token=ACCESS_TOKEN'

const setIndustry = function(core){
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

export default setIndustry