import getAccessToken from './getAccessToken'
import errcode from './errcode'
import {receiveMsg, receiveCheck} from './receive'

const Core = function(config){
  return {
    config: config,
    updateConfig: function(newConfig){
      this.config.AppSecret = newConfig.AppSecret
      this.config.Token = newConfig.Token
      this.config.EncodingAESKey = newConfig.EncodingAESKey
    },
    receiveMsg: receiveMsg(config),
    receiveCheck: receiveCheck(config),
    errcode: errcode,
    getAccessToken: getAccessToken(config),
  }
}

export default Core