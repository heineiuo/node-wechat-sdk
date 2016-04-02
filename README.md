# 微信公众平台SDK (Node.js)

这是基于**Node.js**, 使用**es6/7**规范开发的**非官方**SDK. 使用前须阅读并同意以下注意事项:

* 当前该项目并没有正式发布, 也没有制定版本发布周期

## 开始使用:
安装依赖包

```
npm install WeChatSDK --save
```
设置服务器地址，在对应的路由里:

```
import SDK from 'WeChatSDK'

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

## 已完成API

##### 基础模块
- [*] 检查URL有效性: [使用说明]() | [官方文档]()
- [*] 获取access_token: [使用说明]() | [官方文档]()

##### 菜单模块
- [*] 获取自定义菜单: [使用说明]() | [官方文档]()
- [*] 创建自定义菜单: [使用说明]() | [官方文档]()

##### 多媒体模块
- [*] 获取永久素材列表: [使用说明]() | [官方文档]()

## 已完成util

- [*] 生成授权链接: [使用说明]() | [官方文档]()
- [*] 解析接收到的消息: [使用说明]() | [官方文档]()

## 文档


## License

尚未使用授权.