# 微信公众平台SDK (Node.js)

这是基于Node.js, 使用es6/7规范开发的非官方SDK. 使用前须阅读并同意以下注意事项:

* 当前该项目并没有正式发布, 也没有制定版本发布周期

## 开始使用:
安装依赖包

```shell
npm install wechat-mp-sdk --save
```
设置服务器地址，在对应的路由里:

```javascript
import SDK from 'wechat-mp-sdk'

const sdk = SDK({
  appID: APPID,
  appSecret: SECRET,
  EncodingAESKey: EncodingAESKey,
  Token: TOKEN
})


// you can use sdk now:

// example:

    res.send(await sdk.core.receiveCheck(req.query))

// exapmle:

    sdk.core.receiveCheck(req.query)
        .then(function(result){
            res.send(result)
        })
        .catch(function(e){
            next(e)
        })

```

## API

##### 基础模块
- [*] 检查URL有效性: `sdk.core.receiveCheck(query)`
- [*] 获取access_token: `sdk.core.getAccessToken()`
- [*] 获取用户信息: `sdk.core.getUserInfo(options)`
- [*] 解析接收到的消息: `sdk.core.receiveMsg(body)`

##### 菜单模块
- [*] 获取自定义菜单: `sdk.menu.getMenu()`
- [*] 创建自定义菜单: `sdk.menu.createMenu(options)`

##### 多媒体模块
- [*] 获取永久素材列表: `sdk.media.getMaterialList(options)`

## Util

- [*] 生成授权链接: `sdk.auth.generateUrl(redirectUrl)`

## 文档


## License

MIT License.