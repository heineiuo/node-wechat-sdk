
const generateUrl = function(core){

  return function(redirectUrl){
    const APPID = core.config.AppID
    const REDIRECT_URL = redirectUrl

    return 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+APPID+'&redirect_uri='+REDIRECT_URL+'&response_type=code&scope=snsapi_userinfo&connect_redirect=1#wechat_redirect'

  }

}

export default generateUrl