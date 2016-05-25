import request from 'request'
import Account from '../model/Account'
import awaitify, {awaitify2} from '../lib/awaitify'

const URL = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket'

/**
 * 获取access_token
 */
const getAccessToken = function (core) {
  return function(){
    return new Promise(async function (resolve, reject) {
      try {
        const query = {
          type: 'jsapi',
          access_token: await core.getAccessToken()
        }

        console.log('[wechat sdk] Start getting access_token...')
        //
        // let findOne = awaitify2(Account.findOne)
        // console.log('findOne...')
        // console.log(findOne.toString())

        var doc = await Account.findOne({AppID: query.appid})

        console.log('doc')
        console.log(doc)

        if (!doc) {
          doc = await Account.insert(config)
        }

        console.log(doc)

        query.secret = doc.AppSecret

        console.log('[wechat sdk] Secret: '+doc.AppSecret)

        if (Date.now() < doc.accessTokenExpire) return resolve(doc.accessToken)

        var response = await awaitify2(request)({
          method: 'GET',
          url: URL,
          qs: query
        })

        var access_token = JSON.parse(response[1]).access_token

        const newDoc = {
          accessToken: access_token,
          accessTokenExpire: Date.now() + (2-0.01)*60*60*1000
        }
        console.log('[wechat sdk] update token...')

        try {
          var result = await Account.update({AppID: query.appid}, {$set: newDoc})
        } catch(e){
          console.log('====================')
          console.log(e)
          console.log(e.stack)
          console.log('====================')
        }
        console.log(result)

        console.log('[wechat sdk] update token success.')
        resolve(newDoc.accessToken)
      } catch(e) {
        reject(e)
      }
    })
  }
}

export default getAccessToken