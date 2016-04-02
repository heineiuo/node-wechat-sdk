import request from 'request'
import {awaitify2} from '../lib/awaitify'

const addNews = function(core){

}

const updateNews = function(core){

}

const uploadNewsImage = function(core){


}

const getMaterialCount = function(core){

}

/**
 * 获取永久素材列表
 * @param core
 */
const getMaterialList = function(core){

  const URL = 'https://api.weixin.qq.com/cgi-bin/material/batchget_material'

  /**
   * @param options.type
   * @param options.offset
   * @param options.count
   */
  return function(options){

    return new Promise(async function(resolve, reject){

      try {

        const access_token = await core.getAccessToken()
        const body = JSON.stringify(options)
        const response = await awaitify2(request)({
          method: 'POST',
          url: URL,
          qs: {
            access_token: access_token
          },
          body: body
        })

        console.log('[wechat sdk] get response from getMaterialList...')
        console.log(response[1])
        var resData = JSON.parse(response[1])
        if (resData.errcode) return reject(resData)
        resolve(resData)

      }catch(e){
        reject(e)
      }

    })

  }

}


const deleteMaterial = function(core){


}

const uploadMaterial = function(core){


}

const getMaterialUrl = function(core){

  const getMaterialURL = 'https://api.weixin.qq.com/cgi-bin/material/get_material'

}


const downloadMaterial = function(core){

  const getMaterialURL = 'https://api.weixin.qq.com/cgi-bin/material/get_material'

}


export {
  addNews, uploadMaterial, uploadNewsImage,
  updateNews,
  getMaterialUrl, downloadMaterial,
  getMaterialCount, getMaterialList,
  deleteMaterial
}