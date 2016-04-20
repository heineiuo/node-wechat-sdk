import core from '../core'
import request from 'request'

const URL = 'https://api.weixin.qq.com/cgi-bin/customservice/getkflist?access_token=ACCESS_TOKEN'

// 获取所有客服账号
const getList = async function(){

  return new Promise(async function(resolve, reject){

    try {
      const ACCESS_TOKEN = await core.getAccessToken()
      let response = await request({
        access_token: ACCESS_TOKEN
      })
      resolve(response)
    } catch (e){
      reject(e)
    }

  })

}

export default getList