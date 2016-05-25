import assert from 'assert'

import Core from './core'
import Kf from './kf'
import Menu from './menu'
import ChatMsg from './chatMsg'
import Auth from './Auth'
import TemplateMsg from './templateMsg'
import Media from './Media'

const WeChatSDK = function(config){

  assert.ok(typeof config == 'object', '[wechat sdk] lost param config')
  assert.ok(typeof config.AppID == 'string', '[wechat sdk] lost param: config.AppID')

  var core = Core(config)
  var sdk = {}
  sdk.core = core
  sdk.kf = Kf(core)
  sdk.menu = Menu(core)
  sdk.auth = Auth(core)
  sdk.media = Media(core)
  sdk.ChatMsg = ChatMsg(core)
  sdk.TemplateMsg = TemplateMsg(core)

  return sdk

}

export default WeChatSDK
