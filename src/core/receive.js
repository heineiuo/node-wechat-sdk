import xml2json from 'xml2json'
import _ from 'lodash'
import sha1 from 'sha1'


/**
 * 服务器设置检查
 */
const receiveCheck = function(config){
  return function (query) {

    var signature = query.signature
    var timestamp = query.timestamp
    var nonce = query.nonce
    var echostr = query.echostr

    return new Promise(function (resolve, reject){
      var tmpStr = sha1(_.sortBy([config.Token, timestamp, nonce]).join(''))
      console.log(_.sortBy([config.Token, timestamp, nonce]))
      console.log('[tmpStr] '+tmpStr)
      console.log('[signature] '+signature)
      if (signature === tmpStr) {
        resolve(echostr)
      } else {
        reject(new Error('receive check fail'))
      }
    })
  }
}


/***
 * 接受消息并自动回复或转发到客服
 */
const receiveMsg = function(config){

  return function(body) {
    return new Promise(function(resolve, reject){
      try {
        const parsed = xml2json(body)
        resolve(parsed)
      } catch(e){
        reject(e)
      }
    })
  }
}

export {receiveMsg, receiveCheck}