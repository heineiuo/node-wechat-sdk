module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof2 = __webpack_require__(1);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _assert = __webpack_require__(2);

	var _assert2 = _interopRequireDefault(_assert);

	var _core = __webpack_require__(3);

	var _core2 = _interopRequireDefault(_core);

	var _kf = __webpack_require__(30);

	var _kf2 = _interopRequireDefault(_kf);

	var _menu = __webpack_require__(37);

	var _menu2 = _interopRequireDefault(_menu);

	var _chatMsg = __webpack_require__(40);

	var _chatMsg2 = _interopRequireDefault(_chatMsg);

	var _Auth = __webpack_require__(42);

	var _Auth2 = _interopRequireDefault(_Auth);

	var _templateMsg = __webpack_require__(47);

	var _templateMsg2 = _interopRequireDefault(_templateMsg);

	var _Media = __webpack_require__(50);

	var _Media2 = _interopRequireDefault(_Media);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var WeChatSDK = function WeChatSDK(config) {

	  _assert2.default.ok((typeof config === 'undefined' ? 'undefined' : (0, _typeof3.default)(config)) == 'object', '[wechat sdk] lost param config');
	  _assert2.default.ok(typeof config.AppID == 'string', '[wechat sdk] lost param: config.AppID');

	  var core = (0, _core2.default)(config);
	  var sdk = {};
	  sdk.core = core;
	  sdk.kf = (0, _kf2.default)(core);
	  sdk.menu = (0, _menu2.default)(core);
	  sdk.auth = (0, _Auth2.default)(core);
	  sdk.media = (0, _Media2.default)(core);
	  sdk.ChatMsg = (0, _chatMsg2.default)(core);
	  sdk.TemplateMsg = (0, _templateMsg2.default)(core);

	  return sdk;
	};

	exports.default = WeChatSDK;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/typeof");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("assert");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getAccessToken = __webpack_require__(4);

	var _getAccessToken2 = _interopRequireDefault(_getAccessToken);

	var _errcode = __webpack_require__(16);

	var _errcode2 = _interopRequireDefault(_errcode);

	var _receive = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Core = function Core(config) {
	  return {
	    config: config,
	    updateConfig: function updateConfig(newConfig) {
	      this.config.AppSecret = newConfig.AppSecret;
	      this.config.Token = newConfig.Token;
	      this.config.EncodingAESKey = newConfig.EncodingAESKey;
	    },
	    receiveMsg: (0, _receive.receiveMsg)(config),
	    receiveCheck: (0, _receive.receiveCheck)(config),
	    errcode: _errcode2.default,
	    getAccessToken: (0, _getAccessToken2.default)(config)
	  };
	};

	exports.default = Core;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _regenerator = __webpack_require__(5);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(6);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _promise = __webpack_require__(7);

	var _promise2 = _interopRequireDefault(_promise);

	var _request = __webpack_require__(8);

	var _request2 = _interopRequireDefault(_request);

	var _Account = __webpack_require__(9);

	var _Account2 = _interopRequireDefault(_Account);

	var _awaitify = __webpack_require__(14);

	var _awaitify2 = _interopRequireDefault(_awaitify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var URL = 'https://api.weixin.qq.com/cgi-bin/token';

	/**
	 * 获取access_token
	 */
	var getAccessToken = function getAccessToken(config) {
	  return function () {
	    return new _promise2.default(function () {
	      var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(resolve, reject) {
	        var query, doc, response, access_token, newDoc, result;
	        return _regenerator2.default.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.prev = 0;
	                query = {
	                  grant_type: 'client_credential',
	                  appid: config.AppID,
	                  secret: 'APPSECRET'
	                };


	                console.log('[wechat sdk] Start getting access_token...');
	                //
	                // let findOne = awaitify2(Account.findOne)
	                // console.log('findOne...')
	                // console.log(findOne.toString())

	                _context.next = 5;
	                return _Account2.default.findOne({ AppID: query.appid });

	              case 5:
	                doc = _context.sent;


	                console.log('doc');
	                console.log(doc);

	                if (doc) {
	                  _context.next = 12;
	                  break;
	                }

	                _context.next = 11;
	                return _Account2.default.insert(config);

	              case 11:
	                doc = _context.sent;

	              case 12:

	                console.log(doc);

	                query.secret = doc.AppSecret;

	                console.log('[wechat sdk] Secret: ' + doc.AppSecret);

	                if (!(Date.now() < doc.accessTokenExpire)) {
	                  _context.next = 17;
	                  break;
	                }

	                return _context.abrupt('return', resolve(doc.accessToken));

	              case 17:
	                _context.next = 19;
	                return (0, _awaitify.awaitify2)(_request2.default)({
	                  method: 'GET',
	                  url: URL,
	                  qs: query
	                });

	              case 19:
	                response = _context.sent;
	                access_token = JSON.parse(response[1]).access_token;
	                newDoc = {
	                  accessToken: access_token,
	                  accessTokenExpire: Date.now() + (2 - 0.01) * 60 * 60 * 1000
	                };

	                console.log('[wechat sdk] update token...');

	                _context.prev = 23;
	                _context.next = 26;
	                return _Account2.default.update({ AppID: query.appid }, { $set: newDoc });

	              case 26:
	                result = _context.sent;
	                _context.next = 35;
	                break;

	              case 29:
	                _context.prev = 29;
	                _context.t0 = _context['catch'](23);

	                console.log('====================');
	                console.log(_context.t0);
	                console.log(_context.t0.stack);
	                console.log('====================');

	              case 35:
	                console.log(result);

	                console.log('[wechat sdk] update token success.');
	                resolve(newDoc.accessToken);
	                _context.next = 43;
	                break;

	              case 40:
	                _context.prev = 40;
	                _context.t1 = _context['catch'](0);

	                reject(_context.t1);

	              case 43:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this, [[0, 40], [23, 29]]);
	      }));
	      return function (_x, _x2) {
	        return ref.apply(this, arguments);
	      };
	    }());
	  };
	};

	exports.default = getAccessToken;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/regenerator");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/promise");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("request");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _nedbPromise = __webpack_require__(10);

	var _nedbPromise2 = _interopRequireDefault(_nedbPromise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Account = new _nedbPromise2.default({
	  filename: './data/Account.db',
	  autoload: true
	});

	exports.default = Account;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var NedbDatastore = __webpack_require__(11);
	var thenify = __webpack_require__(12);

	function fromInstance(nedbInstance) {
	  var newDB = { nedb: nedbInstance };

	  var methods = ['loadDatabase', 'insert', 'find', 'findOne', 'count', 'update', 'remove', 'ensureIndex', 'removeIndex'];
	  for (var i = 0; i < methods.length; ++i) {
	    var m = methods[i];
	    newDB[m] = thenify(nedbInstance[m].bind(nedbInstance));
	  }

	  newDB.cfind = function (query, projections) {
	    var cursor = nedbInstance.find(query, projections);
	    cursor.exec = thenify(cursor.exec.bind(cursor));
	    return cursor;
	  };

	  newDB.cfindOne = function (query, projections) {
	    var cursor = nedbInstance.findOne(query, projections);
	    cursor.exec = thenify(cursor.exec.bind(cursor));
	    return cursor;
	  };

	  newDB.ccount = function (query) {
	    var cursor = nedbInstance.count(query);
	    cursor.exec = thenify(cursor.exec.bind(cursor));
	    return cursor;
	  };

	  return newDB;
	}

	function datastore(options) {
	  var nedbInstance = new NedbDatastore(options);
	  return fromInstance(nedbInstance);
	}

	// so that import { datastore } still works:
	datastore.datastore = datastore;
	datastore.fromInstance = fromInstance;

	module.exports = datastore;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("nedb");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Promise = __webpack_require__(13);
	var assert = __webpack_require__(2);

	module.exports = thenify;

	/**
	 * Turn async functions into promises
	 *
	 * @param {Function} $$__fn__$$
	 * @return {Function}
	 * @api public
	 */

	function thenify($$__fn__$$) {
	  assert(typeof $$__fn__$$ === 'function');
	  return eval(createWrapper($$__fn__$$.name.replace(/\s|bound(?!$)/g, '')));
	}

	/**
	 * Turn async functions into promises and backward compatible with callback
	 *
	 * @param {Function} $$__fn__$$
	 * @return {Function}
	 * @api public
	 */

	thenify.withCallback = function ($$__fn__$$) {
	  assert(typeof $$__fn__$$ === 'function');
	  return eval(createWrapper($$__fn__$$.name, true));
	};

	function createCallback(resolve, reject) {
	  return function (err, value) {
	    if (err) return reject(err);
	    var length = arguments.length;
	    if (length <= 2) return resolve(value);
	    var values = new Array(length - 1);
	    for (var i = 1; i < length; ++i) {
	      values[i - 1] = arguments[i];
	    }resolve(values);
	  };
	}

	function createWrapper(name, withCallback) {
	  withCallback = withCallback ? 'var lastType = typeof arguments[len - 1]\n' + 'if (lastType === "function") return $$__fn__$$.apply(self, arguments)\n' : '';

	  return '(function ' + (name || '') + '() {\n' + 'var self = this\n' + 'var len = arguments.length\n' + withCallback + 'var args = new Array(len + 1)\n' + 'for (var i = 0; i < len; ++i) args[i] = arguments[i]\n' + 'var lastIndex = i\n' + 'return new Promise(function (resolve, reject) {\n' + 'args[lastIndex] = createCallback(resolve, reject)\n' + '$$__fn__$$.apply(self, args)\n' + '})\n' + '})';
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("any-promise");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.awaitify2 = undefined;

	var _regenerator = __webpack_require__(5);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _promise = __webpack_require__(7);

	var _promise2 = _interopRequireDefault(_promise);

	var _asyncToGenerator2 = __webpack_require__(6);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _thunkify = __webpack_require__(15);

	var _thunkify2 = _interopRequireDefault(_thunkify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var awaitify = function awaitify(fn) {
	  return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
	    var args,
	        _args = arguments;
	    return _regenerator2.default.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            args = Array.prototype.slice.call(_args, 0);
	            return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
	              var thunked = (0, _thunkify2.default)(fn).apply(this, args);
	              thunked(function (err) {
	                if (err) {
	                  console.log('[awaitify] err: ' + err);
	                  console.log(err.stack);
	                  return reject(err);
	                }
	                resolve.apply(this, Array.prototype.slice.call(arguments, 1));
	              });
	            }));

	          case 2:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, this);
	  }));
	};

	var awaitify2 = function awaitify2(fn) {
	  return function () {
	    var args = Array.prototype.slice.call(arguments, 0);
	    return new _promise2.default(function (resolve, reject) {
	      var callback = function callback(err) {
	        console.log('[awaitify2] callback...');
	        if (err) {
	          console.log('[awaitify2] err ' + err);
	          console.log(err.stack);
	          return reject(err);
	        }
	        var result = Array.prototype.slice.call(arguments, 1);
	        if (result.length == 0) return resolve(true);
	        if (result.length == 1) return resolve(result[0]);
	        resolve(result);
	      };
	      args.push(callback);
	      console.log(args);
	      fn.apply(fn, args);
	    });
	  };
	};

	exports.default = awaitify;
	exports.awaitify2 = awaitify2;

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("thunkify");

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var errcode = {
	  "-1": "系统繁忙，此时请开发者稍候再试",
	  "40001": "获取access_token时AppSecret错误，或者access_token无效。请开发者认真比对AppSecret的正确性，或查看是否正在为恰当的公众号调用接口",
	  "40002": "不合法的凭证类型",
	  "40003": "不合法的OpenID，请开发者确认OpenID（该用户）是否已关注公众号，或是否是其他公众号的OpenID",
	  "40004": "不合法的媒体文件类型",
	  "40005": "不合法的文件类型",
	  "40006": "不合法的文件大小",
	  "40007": "不合法的媒体文件id",
	  "40008": "不合法的消息类型",
	  "40009": "不合法的图片文件大小",
	  "40010": "不合法的语音文件大小",
	  "40011": "不合法的视频文件大小",
	  "40012": "不合法的缩略图文件大小",
	  "40013": "不合法的AppID，请开发者检查AppID的正确性，避免异常字符，注意大小写",
	  "40014": "不合法的access_token，请开发者认真比对access_token的有效性（如是否过期），或查看是否正在为恰当的公众号调用接口",
	  "40015": "不合法的菜单类型",
	  "40016": "不合法的按钮个数",
	  "40017": "不合法的按钮个数",
	  "40018": "不合法的按钮名字长度",
	  "40019": "不合法的按钮KEY长度",
	  "40020": "不合法的按钮URL长度",
	  "40021": "不合法的菜单版本号",
	  "40022": "不合法的子菜单级数",
	  "40023": "不合法的子菜单按钮个数",
	  "40024": "不合法的子菜单按钮类型",
	  "40025": "不合法的子菜单按钮名字长度",
	  "40026": "不合法的子菜单按钮KEY长度",
	  "40027": "不合法的子菜单按钮URL长度",
	  "40028": "不合法的自定义菜单使用用户",
	  "40029": "不合法的oauth_code",
	  "40030": "不合法的refresh_token",
	  "40031": "不合法的openid列表",
	  "40032": "不合法的openid列表长度",
	  "40033": "不合法的请求字符，不能包含\\uxxxx格式的字符",
	  "40035": "不合法的参数",
	  "40038": "不合法的请求格式",
	  "40039": "不合法的URL长度",
	  "40050": "不合法的分组id",
	  "40051": "分组名字不合法",
	  "40117": "分组名字不合法",
	  "40118": "media_id大小不合法",
	  "40119": "button类型错误",
	  "40120": "button类型错误",
	  "40121": "不合法的media_id类型",
	  "40132": "微信号不合法",
	  "40137": "不支持的图片格式",
	  "41001": "缺少access_token参数",
	  "41002": "缺少appid参数",
	  "41003": "缺少refresh_token参数",
	  "41004": "缺少secret参数",
	  "41005": "缺少多媒体文件数据",
	  "41006": "缺少media_id参数",
	  "41007": "缺少子菜单数据",
	  "41008": "缺少oauth code",
	  "41009": "缺少openid",
	  "42001": "access_token超时，请检查access_token的有效期，请参考基础支持-获取access_token中，对access_token的详细机制说明",
	  "42002": "refresh_token超时",
	  "42003": "oauth_code超时",
	  "43001": "需要GET请求",
	  "43002": "需要POST请求",
	  "43003": "需要HTTPS请求",
	  "43004": "需要接收者关注",
	  "43005": "需要好友关系",
	  "44001": "多媒体文件为空",
	  "44002": "POST的数据包为空",
	  "44003": "图文消息内容为空",
	  "44004": "文本消息内容为空",
	  "45001": "多媒体文件大小超过限制",
	  "45002": "消息内容超过限制",
	  "45003": "标题字段超过限制",
	  "45004": "描述字段超过限制",
	  "45005": "链接字段超过限制",
	  "45006": "图片链接字段超过限制",
	  "45007": "语音播放时间超过限制",
	  "45008": "图文消息超过限制",
	  "45009": "接口调用超过限制",
	  "45010": "创建菜单个数超过限制",
	  "45015": "回复时间超过限制",
	  "45016": "系统分组，不允许修改",
	  "45017": "分组名字过长",
	  "45018": "分组数量超过上限",
	  "46001": "不存在媒体数据",
	  "46002": "不存在的菜单版本",
	  "46003": "不存在的菜单数据",
	  "46004": "不存在的用户",
	  "47001": "解析JSON/XML内容错误",
	  "48001": "api功能未授权，请确认公众号已获得该接口，可以在公众平台官网-开发者中心页中查看接口权限",
	  "50001": "用户未授权该api",
	  "50002": "用户受限，可能是违规后接口被封禁",
	  "61451": "参数错误(invalid parameter)",
	  "61452": "无效客服账号(invalid kf_account)",
	  "61453": "客服帐号已存在(kf_account exsited)",
	  "61454": "客服帐号名长度超过限制(仅允许10个英文字符，不包括@及@后的公众号的微信号)(invalid kf_acount length)",
	  "61455": "客服帐号名包含非法字符(仅允许英文+数字)(illegal character in kf_account)",
	  "61456": "客服帐号个数超过限制(10个客服账号)(kf_account count exceeded)",
	  "61457": "无效头像文件类型(invalid file type)",
	  "61450": "系统错误(system error)",
	  "61500": "日期格式错误",
	  "61501": "日期范围错误",
	  "9001001": "POST数据参数不合法",
	  "9001002": "远端服务不可用",
	  "9001003": "Ticket不合法",
	  "9001004": "获取摇周边用户信息失败",
	  "9001005": "获取商户信息失败",
	  "9001006": "获取OpenID失败",
	  "9001007": "上传文件缺失",
	  "9001008": "上传素材的文件类型不合法",
	  "9001009": "上传素材的文件尺寸不合法",
	  "9001010": "上传失败",
	  "9001020": "帐号不合法",
	  "9001021": "已有设备激活率低于50%，不能新增设备",
	  "9001022": "设备申请数不合法，必须为大于0的数字",
	  "9001023": "已存在审核中的设备ID申请",
	  "9001024": "一次查询设备ID数量不能超过50",
	  "9001025": "设备ID不合法",
	  "9001026": "页面ID不合法",
	  "9001027": "页面参数不合法",
	  "9001028": "一次删除页面ID数量不能超过10",
	  "9001029": "页面已应用在设备中，请先解除应用关系再删除",
	  "9001030": "一次查询页面ID数量不能超过50",
	  "9001031": "时间区间不合法",
	  "9001032": "保存设备与页面的绑定关系参数错误",
	  "9001033": "门店ID不合法",
	  "9001034": "设备备注信息过长",
	  "9001035": "设备申请参数不合法",
	  "9001036": "查询起始值begin不合法"
	};

	exports.default = errcode;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.receiveCheck = exports.receiveMsg = undefined;

	var _promise = __webpack_require__(7);

	var _promise2 = _interopRequireDefault(_promise);

	var _xml2json = __webpack_require__(18);

	var _xml2json2 = _interopRequireDefault(_xml2json);

	var _lodash = __webpack_require__(28);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _sha = __webpack_require__(29);

	var _sha2 = _interopRequireDefault(_sha);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 服务器设置检查
	 */
	var receiveCheck = function receiveCheck(config) {
	  return function (query) {

	    var signature = query.signature;
	    var timestamp = query.timestamp;
	    var nonce = query.nonce;
	    var echostr = query.echostr;

	    return new _promise2.default(function (resolve, reject) {
	      var tmpStr = (0, _sha2.default)(_lodash2.default.sortBy([config.Token, timestamp, nonce]).join(''));
	      console.log(_lodash2.default.sortBy([config.Token, timestamp, nonce]));
	      console.log('[tmpStr] ' + tmpStr);
	      console.log('[signature] ' + signature);
	      if (signature === tmpStr) {
	        resolve(echostr);
	      } else {
	        reject(new Error('receive check fail'));
	      }
	    });
	  };
	};

	/***
	 * 接受消息并自动回复或转发到客服
	 */
	var receiveMsg = function receiveMsg(config) {

	  return function (body) {
	    return new _promise2.default(function (resolve, reject) {
	      try {
	        var parsed = (0, _xml2json2.default)(body);
	        resolve(parsed);
	      } catch (e) {
	        reject(e);
	      }
	    });
	  };
	};

	exports.receiveMsg = receiveMsg;
	exports.receiveCheck = receiveCheck;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(19);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _exports = module.exports;

	_exports.toJson = __webpack_require__(20);
	_exports.toXml = __webpack_require__(27);

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _stringify = __webpack_require__(21);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _keys = __webpack_require__(22);

	var _keys2 = _interopRequireDefault(_keys);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var expat = __webpack_require__(23);
	var sanitizer = __webpack_require__(24);
	var joi = __webpack_require__(25);
	var hoek = __webpack_require__(26);

	// This object will hold the final result.
	var obj = {};
	var currentObject = {};
	var ancestors = [];
	var currentElementName = null;

	var options = {}; //configuration options
	function startElement(name, attrs) {
	    currentElementName = name;
	    if (options.coerce) {
	        // Looping here in stead of making coerce generic as object walk is unnecessary
	        for (var key in attrs) {
	            attrs[key] = coerce(attrs[key], key);
	        }
	    }

	    if (!(name in currentObject)) {
	        if (options.arrayNotation) {
	            currentObject[name] = [attrs];
	        } else {
	            currentObject[name] = attrs;
	        }
	    } else if (!(currentObject[name] instanceof Array)) {
	        // Put the existing object in an array.
	        var newArray = [currentObject[name]];
	        // Add the new object to the array.
	        newArray.push(attrs);
	        // Point to the new array.
	        currentObject[name] = newArray;
	    } else {
	        // An array already exists, push the attributes on to it.
	        currentObject[name].push(attrs);
	    }

	    // Store the current (old) parent.
	    ancestors.push(currentObject);

	    // We are now working with this object, so it becomes the current parent.
	    if (currentObject[name] instanceof Array) {
	        // If it is an array, get the last element of the array.
	        currentObject = currentObject[name][currentObject[name].length - 1];
	    } else {
	        // Otherwise, use the object itself.
	        currentObject = currentObject[name];
	    }
	}

	function text(data) {
	    currentObject['$t'] = (currentObject['$t'] || '') + data;
	}

	function endElement(name) {
	    if (currentObject['$t']) {
	        if (options.trim) {
	            currentObject['$t'] = currentObject['$t'].trim();
	        }

	        if (options.sanitize) {
	            currentObject['$t'] = sanitizer.sanitize(currentObject['$t'], true);
	        }

	        currentObject['$t'] = coerce(currentObject['$t'], name);
	    }

	    if (currentElementName !== name) {
	        delete currentObject['$t'];
	    }
	    // This should check to make sure that the name we're ending
	    // matches the name we started on.
	    var ancestor = ancestors.pop();
	    if (!options.reversible) {
	        if ('$t' in currentObject && (0, _keys2.default)(currentObject).length == 1) {
	            if (ancestor[name] instanceof Array) {
	                ancestor[name].push(ancestor[name].pop()['$t']);
	            } else {
	                ancestor[name] = currentObject['$t'];
	            }
	        }
	    }

	    currentObject = ancestor;
	}

	function coerce(value, key) {
	    if (!options.coerce || value.trim() === '') {
	        return value;
	    }

	    if (typeof options.coerce[key] === 'function') return options.coerce[key](value);

	    var num = Number(value);
	    if (!isNaN(num)) {
	        return num;
	    }

	    var _value = value.toLowerCase();

	    if (_value == 'true') {
	        return true;
	    }

	    if (_value == 'false') {
	        return false;
	    }

	    return value;
	}

	/**
	 * Parses xml to json using node-expat.
	 * @param {String|Buffer} xml The xml to be parsed to json.
	 * @param {Object} _options An object with options provided by the user.
	 * The available options are:
	 *  - object: If true, the parser returns a Javascript object instead of
	 *            a JSON string.
	 *  - reversible: If true, the parser generates a reversible JSON, mainly
	 *                characterized by the presence of the property $t.
	 *  - sanitize_values: If true, the parser escapes any element value in the xml
	 * that has any of the following characters: <, >, (, ), #, #, &, ", '.
	 *
	 * @return {String|Object} A String or an Object with the JSON representation
	 * of the XML.
	 */
	module.exports = function (xml, _options) {

	    _options = _options || {};
	    var parser = new expat.Parser('UTF-8');

	    parser.on('startElement', startElement);
	    parser.on('text', text);
	    parser.on('endElement', endElement);

	    obj = currentObject = {};
	    ancestors = [];
	    currentElementName = null;

	    var schema = {
	        object: joi.boolean().default(false),
	        reversible: joi.boolean().default(false),
	        coerce: joi.alternatives([joi.boolean(), joi.object()]).default(false),
	        sanitize: joi.boolean().default(true),
	        trim: joi.boolean().default(true),
	        arrayNotation: joi.boolean().default(false)
	    };
	    var validation = joi.validate(_options, schema);
	    hoek.assert(validation.error === null, validation.error);
	    options = validation.value;

	    if (!parser.parse(xml)) {
	        throw new Error('There are errors in your xml file: ' + parser.getError());
	    }

	    if (options.object) {
	        return obj;
	    }

	    var json = (0, _stringify2.default)(obj);

	    //See: http://timelessrepo.com/json-isnt-a-javascript-subset
	    json = json.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');

	    return json;
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/json/stringify");

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/object/keys");

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("node-expat");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _keys = __webpack_require__(22);

	var _keys2 = _interopRequireDefault(_keys);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Simple sanitization. It is not intended to sanitize
	 * malicious element values.
	 *
	 * character | escaped
	 *      <       &lt;
	 *      >       &gt;
	 *      (       &#40;
	 *      )       &#41;
	 *      #       &#35;
	 *      &       &amp;
	 *      "       &quot;
	 *      '       &apos;
	 */
	var chars = {
	    '&': '&amp;',
	    '#': '&#35;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '(': '&#40;',
	    ')': '&#41;',
	    '"': '&quot;',
	    "'": '&apos;'
	};

	function escapeRegExp(string) {
	    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
	}

	exports.sanitize = function sanitize(value, reverse) {
	    if (typeof value !== 'string') {
	        return value;
	    }

	    (0, _keys2.default)(chars).forEach(function (key) {
	        if (reverse) {
	            value = value.replace(new RegExp(escapeRegExp(chars[key]), 'g'), key);
	        } else {
	            value = value.replace(new RegExp(escapeRegExp(key), 'g'), chars[key]);
	        }
	    });

	    return value;
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("joi");

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("hoek");

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = __webpack_require__(1);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _keys = __webpack_require__(22);

	var _keys2 = _interopRequireDefault(_keys);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var sanitizer = __webpack_require__(24);

	module.exports = function (json, options) {
	    if (json instanceof Buffer) {
	        json = json.toString();
	    }

	    var obj = null;
	    if (typeof json == 'string') {
	        try {
	            obj = JSON.parse(json);
	        } catch (e) {
	            throw new Error("The JSON structure is invalid");
	        }
	    } else {
	        obj = json;
	    }
	    var toXml = new ToXml(options);
	    toXml.parse(obj);
	    return toXml.xml;
	};

	ToXml.prototype.parse = function (obj) {
	    var self = this;
	    var keys = (0, _keys2.default)(obj);
	    var len = keys.length;

	    // First pass, extract strings only
	    for (var i = 0; i < len; i++) {
	        var key = keys[i],
	            value = obj[key],
	            isArray = Array.isArray(value);
	        var type = typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value);
	        if (type == 'string' || type == 'number' || type == 'boolean' || isArray) {
	            var it = isArray ? value : [value];

	            it.forEach(function (subVal) {
	                if ((typeof subVal === 'undefined' ? 'undefined' : (0, _typeof3.default)(subVal)) != 'object') {
	                    if (key == '$t') {
	                        self.addTextContent(subVal);
	                    } else {
	                        self.addAttr(key, subVal);
	                    }
	                }
	            });
	        }
	    }

	    // Second path, now handle sub-objects and arrays
	    for (var i = 0; i < len; i++) {
	        var key = keys[i];

	        if (Array.isArray(obj[key])) {
	            var elems = obj[key];
	            var l = elems.length;
	            for (var j = 0; j < l; j++) {
	                var elem = elems[j];

	                if ((typeof elem === 'undefined' ? 'undefined' : (0, _typeof3.default)(elem)) == 'object') {
	                    self.openTag(key);
	                    self.parse(elem);
	                    self.closeTag(key);
	                }
	            }
	        } else if ((0, _typeof3.default)(obj[key]) == 'object') {
	            self.openTag(key);
	            self.parse(obj[key]);
	            self.closeTag(key);
	        }
	    }
	};

	ToXml.prototype.openTag = function (key) {
	    this.completeTag();
	    this.xml += '<' + key;
	    this.tagIncomplete = true;
	};
	ToXml.prototype.addAttr = function (key, val) {
	    if (this.options.sanitize) {
	        val = sanitizer.sanitize(val);
	    }
	    this.xml += ' ' + key + '="' + val + '"';
	};
	ToXml.prototype.addTextContent = function (text) {
	    this.completeTag();
	    this.xml += text;
	};
	ToXml.prototype.closeTag = function (key) {
	    this.completeTag();
	    this.xml += '</' + key + '>';
	};
	ToXml.prototype.completeTag = function () {
	    if (this.tagIncomplete) {
	        this.xml += '>';
	        this.tagIncomplete = false;
	    }
	};
	function ToXml(options) {
	    var defaultOpts = {
	        sanitize: false
	    };

	    if (options) {
	        for (var opt in options) {
	            defaultOpts[opt] = options[opt];
	        }
	    }

	    this.options = defaultOpts;
	    this.xml = '';
	    this.tagIncomplete = false;
	}

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("sha1");

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _addAccount = __webpack_require__(31);

	var _addAccount2 = _interopRequireDefault(_addAccount);

	var _deleteAccount = __webpack_require__(32);

	var _deleteAccount2 = _interopRequireDefault(_deleteAccount);

	var _getList = __webpack_require__(33);

	var _getList2 = _interopRequireDefault(_getList);

	var _sendMsg = __webpack_require__(34);

	var _sendMsg2 = _interopRequireDefault(_sendMsg);

	var _updateAccount = __webpack_require__(35);

	var _updateAccount2 = _interopRequireDefault(_updateAccount);

	var _uploadAvatar = __webpack_require__(36);

	var _uploadAvatar2 = _interopRequireDefault(_uploadAvatar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var kf = function kf(core) {
	  return {

	    addAccount: (0, _addAccount2.default)(core),
	    deleteAccount: (0, _deleteAccount2.default)(core),
	    getList: (0, _getList2.default)(core),
	    sendMsg: (0, _sendMsg2.default)(core),
	    updateAccount: (0, _updateAccount2.default)(core),
	    uploadAvatar: (0, _uploadAvatar2.default)(core)
	  };
	};

	exports.default = kf;
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// 添加客服帐号

	var addAccount = function addAccount(core) {

	  return function (options) {};
	};

	exports.default = addAccount;
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _promise = __webpack_require__(7);

	var _promise2 = _interopRequireDefault(_promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 删除客服帐号

	var deleteAccount = function deleteAccount(core) {
	  return function (options) {
	    return new _promise2.default(function (resolve, reject) {

	      try {
	        resolve(1);
	      } catch (e) {
	        reject(e);
	      }
	    });
	  };
	};

	exports.default = deleteAccount;
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _regenerator = __webpack_require__(5);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _promise = __webpack_require__(7);

	var _promise2 = _interopRequireDefault(_promise);

	var _asyncToGenerator2 = __webpack_require__(6);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _core = __webpack_require__(3);

	var _core2 = _interopRequireDefault(_core);

	var _request = __webpack_require__(8);

	var _request2 = _interopRequireDefault(_request);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var URL = 'https://api.weixin.qq.com/cgi-bin/customservice/getkflist?access_token=ACCESS_TOKEN';

	// 获取所有客服账号
	var getList = function () {
	  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
	    return _regenerator2.default.wrap(function _callee2$(_context2) {
	      while (1) {
	        switch (_context2.prev = _context2.next) {
	          case 0:
	            return _context2.abrupt('return', new _promise2.default(function () {
	              var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(resolve, reject) {
	                var ACCESS_TOKEN, response;
	                return _regenerator2.default.wrap(function _callee$(_context) {
	                  while (1) {
	                    switch (_context.prev = _context.next) {
	                      case 0:
	                        _context.prev = 0;
	                        _context.next = 3;
	                        return _core2.default.getAccessToken();

	                      case 3:
	                        ACCESS_TOKEN = _context.sent;
	                        _context.next = 6;
	                        return (0, _request2.default)({
	                          access_token: ACCESS_TOKEN
	                        });

	                      case 6:
	                        response = _context.sent;

	                        resolve(response);
	                        _context.next = 13;
	                        break;

	                      case 10:
	                        _context.prev = 10;
	                        _context.t0 = _context['catch'](0);

	                        reject(_context.t0);

	                      case 13:
	                      case 'end':
	                        return _context.stop();
	                    }
	                  }
	                }, _callee, this, [[0, 10]]);
	              }));
	              return function (_x, _x2) {
	                return ref.apply(this, arguments);
	              };
	            }()));

	          case 1:
	          case 'end':
	            return _context2.stop();
	        }
	      }
	    }, _callee2, this);
	  }));
	  return function getList() {
	    return ref.apply(this, arguments);
	  };
	}();

	exports.default = getList;
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _regenerator = __webpack_require__(5);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(6);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _promise = __webpack_require__(7);

	var _promise2 = _interopRequireDefault(_promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var METHOD = 'POST';
	var URL = 'https://api.weixin.qq.com/cgi-bin/message/custom/send';

	var sendMsg = function sendMsg(core) {
	  return function (options) {

	    return new _promise2.default(function () {
	      var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(resolve, reject) {
	        var access_token;
	        return _regenerator2.default.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.prev = 0;
	                _context.next = 3;
	                return core.getAccessToken();

	              case 3:
	                access_token = _context.sent;


	                resolve(1);
	                _context.next = 10;
	                break;

	              case 7:
	                _context.prev = 7;
	                _context.t0 = _context['catch'](0);

	                reject(_context.t0);

	              case 10:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this, [[0, 7]]);
	      }));
	      return function (_x, _x2) {
	        return ref.apply(this, arguments);
	      };
	    }());
	  };
	};

	exports.default = sendMsg;
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _promise = __webpack_require__(7);

	var _promise2 = _interopRequireDefault(_promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 修改客服帐号

	var updateAccount = function updateAccount(core) {
	  return function (options) {
	    return new _promise2.default(function (resolve, reject) {

	      try {
	        resolve(1);
	      } catch (e) {
	        reject(e);
	      }
	    });
	  };
	};

	exports.default = updateAccount;
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _promise = __webpack_require__(7);

	var _promise2 = _interopRequireDefault(_promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 设置客服帐号的头像

	var uploadAvatar = function uploadAvatar(core) {
	  return function (options) {
	    return new _promise2.default(function (resolve, reject) {

	      try {
	        resolve(e);
	      } catch (e) {
	        reject(e);
	      }
	    });
	  };
	};

	exports.default = uploadAvatar;
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getMenu = __webpack_require__(38);

	var _getMenu2 = _interopRequireDefault(_getMenu);

	var _createMenu = __webpack_require__(39);

	var _createMenu2 = _interopRequireDefault(_createMenu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Menu = function Menu(core) {
	  return {
	    getMenu: (0, _getMenu2.default)(core),
	    createMenu: (0, _createMenu2.default)(core)
	  };
	};

	exports.default = Menu;
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _regenerator = __webpack_require__(5);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(6);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _promise = __webpack_require__(7);

	var _promise2 = _interopRequireDefault(_promise);

	var _request = __webpack_require__(8);

	var _request2 = _interopRequireDefault(_request);

	var _awaitify = __webpack_require__(14);

	var _awaitify2 = _interopRequireDefault(_awaitify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var METHOD = 'GET';
	var URL = 'https://api.weixin.qq.com/cgi-bin/menu/get';

	var getMenu = function getMenu(core) {

	  return function () {

	    return new _promise2.default(function () {
	      var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(resolve, reject) {
	        var query, response, body;
	        return _regenerator2.default.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.prev = 0;

	                console.log('[wechat sdk] Start getting menu...');

	                _context.next = 4;
	                return core.getAccessToken();

	              case 4:
	                _context.t0 = _context.sent;
	                query = {
	                  access_token: _context.t0
	                };

	                console.log('[wechat sdk] access_token : ' + query.access_token);

	                _context.next = 9;
	                return (0, _awaitify.awaitify2)(_request2.default)({
	                  method: METHOD,
	                  url: URL,
	                  qs: query
	                });

	              case 9:
	                response = _context.sent;
	                body = JSON.parse(response[1]);

	                if (!body.errcode) {
	                  _context.next = 13;
	                  break;
	                }

	                return _context.abrupt('return', reject(body));

	              case 13:
	                resolve(body);

	                _context.next = 19;
	                break;

	              case 16:
	                _context.prev = 16;
	                _context.t1 = _context['catch'](0);

	                reject(_context.t1);

	              case 19:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this, [[0, 16]]);
	      }));
	      return function (_x, _x2) {
	        return ref.apply(this, arguments);
	      };
	    }());
	  };
	};

	exports.default = getMenu;
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _regenerator = __webpack_require__(5);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _stringify = __webpack_require__(21);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _asyncToGenerator2 = __webpack_require__(6);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _promise = __webpack_require__(7);

	var _promise2 = _interopRequireDefault(_promise);

	var _request = __webpack_require__(8);

	var _request2 = _interopRequireDefault(_request);

	var _awaitify = __webpack_require__(14);

	var _awaitify2 = _interopRequireDefault(_awaitify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var METHOD = 'POST';
	var URL = 'https://api.weixin.qq.com/cgi-bin/menu/create';

	var createMenu = function createMenu(core) {

	  return function (options) {

	    return new _promise2.default(function () {
	      var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(resolve, reject) {
	        var body, response, responseBody;
	        return _regenerator2.default.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.prev = 0;
	                body = (0, _stringify2.default)(options);
	                _context.t0 = METHOD;
	                _context.t1 = URL;
	                _context.next = 6;
	                return core.getAccessToken();

	              case 6:
	                _context.t2 = _context.sent;
	                _context.t3 = {
	                  access_token: _context.t2
	                };
	                _context.t4 = body;
	                _context.t5 = {
	                  method: _context.t0,
	                  url: _context.t1,
	                  qs: _context.t3,
	                  body: _context.t4
	                };
	                _context.next = 12;
	                return (0, _awaitify.awaitify2)(_request2.default)(_context.t5);

	              case 12:
	                response = _context.sent;

	                // formData: options,
	                // form: options.body


	                console.log('[wechatsdk] createMenu response:');
	                responseBody = JSON.parse(response[1]);

	                if (!responseBody.errcode) {
	                  _context.next = 17;
	                  break;
	                }

	                return _context.abrupt('return', reject(responseBody));

	              case 17:
	                resolve(responseBody);

	                _context.next = 23;
	                break;

	              case 20:
	                _context.prev = 20;
	                _context.t6 = _context['catch'](0);

	                reject(_context.t6);

	              case 23:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this, [[0, 20]]);
	      }));
	      return function (_x, _x2) {
	        return ref.apply(this, arguments);
	      };
	    }());
	  };
	};

	exports.default = createMenu;
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _passiveReply = __webpack_require__(41);

	var _passiveReply2 = _interopRequireDefault(_passiveReply);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var chatMsg = function chatMsg(core) {
	  return {
	    passiveReply: (0, _passiveReply2.default)(core)
	  };
	};

	exports.default = chatMsg;
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _promise = __webpack_require__(7);

	var _promise2 = _interopRequireDefault(_promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 被动回复消息
	 * 如果是匹配自动回复,则回复自动回复,
	 * 没有匹配,回复success,并发送给客服处理
	 */

	var passiveReply = function passiveReply(core) {
	  return function (options) {
	    return new _promise2.default(function (resolve, reject) {

	      try {
	        resolve(1);
	      } catch (e) {
	        reject(e);
	      }
	    });
	  };
	};

	exports.default = passiveReply;
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getUserAccessToken = __webpack_require__(43);

	var _getUserAccessToken2 = _interopRequireDefault(_getUserAccessToken);

	var _freshUserAccessToken = __webpack_require__(44);

	var _freshUserAccessToken2 = _interopRequireDefault(_freshUserAccessToken);

	var _generateUrl = __webpack_require__(45);

	var _generateUrl2 = _interopRequireDefault(_generateUrl);

	var _getUserInfo = __webpack_require__(46);

	var _getUserInfo2 = _interopRequireDefault(_getUserInfo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var auth = function auth(core) {
	  return {
	    getUserAccessToken: (0, _getUserAccessToken2.default)(core),
	    freshUserAccessToken: (0, _freshUserAccessToken2.default)(core),
	    getUserInfo: (0, _getUserInfo2.default)(core),
	    generateUrl: (0, _generateUrl2.default)(core)
	  };
	};

	exports.default = auth;
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _regenerator = __webpack_require__(5);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(6);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _promise = __webpack_require__(7);

	var _promise2 = _interopRequireDefault(_promise);

	var _request = __webpack_require__(8);

	var _request2 = _interopRequireDefault(_request);

	var _awaitify = __webpack_require__(14);

	var _awaitify2 = _interopRequireDefault(_awaitify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var URL = 'https://api.weixin.qq.com/sns/oauth2/access_token';

	var getUserAccessToken = function getUserAccessToken(core) {

	  return function (code) {

	    return new _promise2.default(function () {
	      var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(resolve, reject) {
	        var CODE, APPID, SECRET, response, resData;
	        return _regenerator2.default.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                CODE = code;
	                APPID = core.config.AppID;
	                SECRET = core.config.AppSecret;
	                _context.prev = 3;
	                _context.next = 6;
	                return (0, _awaitify.awaitify2)(_request2.default)({
	                  url: URL + '?appid=' + APPID + '&secret=' + SECRET + '&code=' + CODE + '&grant_type=authorization_code',
	                  method: 'GET'
	                });

	              case 6:
	                response = _context.sent;
	                resData = JSON.parse(response[1]);

	                if (!resData.errcode) {
	                  _context.next = 10;
	                  break;
	                }

	                return _context.abrupt('return', reject(resData));

	              case 10:
	                resolve(resData);

	                _context.next = 16;
	                break;

	              case 13:
	                _context.prev = 13;
	                _context.t0 = _context['catch'](3);

	                reject(_context.t0);

	              case 16:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this, [[3, 13]]);
	      }));
	      return function (_x, _x2) {
	        return ref.apply(this, arguments);
	      };
	    }());
	  };
	};

	exports.default = getUserAccessToken;
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _regenerator = __webpack_require__(5);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(6);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _promise = __webpack_require__(7);

	var _promise2 = _interopRequireDefault(_promise);

	var _request = __webpack_require__(8);

	var _request2 = _interopRequireDefault(_request);

	var _awaitify = __webpack_require__(14);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var METHOD = 'GET';
	var URL = 'https://api.weixin.qq.com/sns/oauth2/refresh_toke';

	/**
	 * 刷新access_token
	 */
	var freshAccessToken = function freshAccessToken(core) {
	  return function (options) {
	    return new _promise2.default(function () {
	      var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(resolve, reject) {
	        var qs, response, resData;
	        return _regenerator2.default.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.prev = 0;
	                qs = {
	                  appid: core.config.AppID,
	                  fresh_token: options.fresh_token,
	                  grant_type: 'refresh_token'
	                };
	                response = (0, _awaitify.awaitify2)(_request2.default)({
	                  qs: qs,
	                  url: URL,
	                  method: METHOD
	                });
	                resData = JSON.parse(response[1]);

	                if (!resData.errcode) {
	                  _context.next = 6;
	                  break;
	                }

	                return _context.abrupt('return', reject(resData));

	              case 6:
	                resolve(resData);

	                _context.next = 12;
	                break;

	              case 9:
	                _context.prev = 9;
	                _context.t0 = _context['catch'](0);

	                reject(_context.t0);

	              case 12:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this, [[0, 9]]);
	      }));
	      return function (_x, _x2) {
	        return ref.apply(this, arguments);
	      };
	    }());
	  };
	};

	exports.default = freshAccessToken;
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var generateUrl = function generateUrl(core) {

	  return function (redirectUrl) {
	    var APPID = core.config.AppID;
	    var REDIRECT_URL = redirectUrl;

	    return "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + APPID + "&redirect_uri=" + REDIRECT_URL + "&response_type=code&scope=snsapi_userinfo&connect_redirect=1#wechat_redirect";
	  };
	};

	exports.default = generateUrl;
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _regenerator = __webpack_require__(5);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(6);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _promise = __webpack_require__(7);

	var _promise2 = _interopRequireDefault(_promise);

	var _request = __webpack_require__(8);

	var _request2 = _interopRequireDefault(_request);

	var _awaitify = __webpack_require__(14);

	var _awaitify2 = _interopRequireDefault(_awaitify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var METHOD = 'GET';
	var URL = 'https://api.weixin.qq.com/sns/userinfo';

	/**
	 * 获取用户信息
	 */
	var getUserInfo = function getUserInfo(config) {

	  /**
	   * @param options.openid
	   * @param options.access_token
	   */
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? { lang: 'zh_CN' } : arguments[0];

	    return new _promise2.default(function () {
	      var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(resolve, reject) {
	        var qs, response, resData;
	        return _regenerator2.default.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.prev = 0;
	                qs = {
	                  openid: options.openid,
	                  access_token: options.access_token,
	                  lang: options.lang
	                };
	                _context.next = 4;
	                return (0, _awaitify.awaitify2)(_request2.default)({
	                  method: METHOD,
	                  url: URL,
	                  qs: qs
	                });

	              case 4:
	                response = _context.sent;
	                resData = JSON.parse(response[1]);

	                if (!resData.errcode) {
	                  _context.next = 8;
	                  break;
	                }

	                return _context.abrupt('return', reject(resData));

	              case 8:
	                resolve(resData);

	                _context.next = 14;
	                break;

	              case 11:
	                _context.prev = 11;
	                _context.t0 = _context['catch'](0);

	                reject(_context.t0);

	              case 14:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this, [[0, 11]]);
	      }));
	      return function (_x2, _x3) {
	        return ref.apply(this, arguments);
	      };
	    }());
	  };
	};

	exports.default = getUserInfo;
	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _sendMsg = __webpack_require__(48);

	var _setIndustry = __webpack_require__(49);

	var _setIndustry2 = _interopRequireDefault(_setIndustry);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var templateMsg = function templateMsg(core) {
	  return {
	    sendMsg: (0, _sendMsg.sendMsg)(core),
	    setIndustry: (0, _sendMsg.sendMsg)(_setIndustry2.default)
	  };
	};

	exports.default = templateMsg;
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sendMsg = undefined;

	var _regenerator = __webpack_require__(5);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(6);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _promise = __webpack_require__(7);

	var _promise2 = _interopRequireDefault(_promise);

	var _request = __webpack_require__(8);

	var _request2 = _interopRequireDefault(_request);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var METHOD = 'POST';
	var URL = 'https://api.weixin.qq.com/cgi-bin/message/template/send';

	// 发送模板消息
	var sendMsg = function sendMsg(core) {
	  return function (msg) {
	    return new _promise2.default(function () {
	      var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(resolve, reject) {
	        var response;
	        return _regenerator2.default.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.t0 = METHOD;
	                _context.t1 = URL;
	                _context.next = 4;
	                return core.getAccessToken();

	              case 4:
	                _context.t2 = _context.sent;
	                _context.t3 = {
	                  method: _context.t0,
	                  url: _context.t1,
	                  access_token: _context.t2
	                };
	                _context.next = 8;
	                return (0, _request2.default)(_context.t3);

	              case 8:
	                response = _context.sent;


	                if (response.body.success) {
	                  resolve(true);
	                } else {
	                  reject(response.body);
	                }

	              case 10:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));
	      return function (_x, _x2) {
	        return ref.apply(this, arguments);
	      };
	    }());
	  };
	};

	exports.sendMsg = sendMsg;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _promise = __webpack_require__(7);

	var _promise2 = _interopRequireDefault(_promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 设置所属行业

	var METHOD = 'GET';
	var URL = 'https://api.weixin.qq.com/cgi-bin/template/api_set_industry?access_token=ACCESS_TOKEN';

	var setIndustry = function setIndustry(core) {
	  return function (options) {
	    return new _promise2.default(function (resolve, reject) {

	      try {

	        resolve(1);
	      } catch (e) {
	        reject(e);
	      }
	    });
	  };
	};

	exports.default = setIndustry;
	module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _material = __webpack_require__(51);

	var _tempMedia = __webpack_require__(52);

	var Media = function Media(core) {
	  return {
	    // material
	    addNews: (0, _material.addNews)(core),
	    uploadMaterial: (0, _material.uploadMaterial)(core),
	    uploadNewsImage: (0, _material.uploadNewsImage)(core),
	    updateNews: (0, _material.updateNews)(core),
	    getMaterialUrl: (0, _material.getMaterialUrl)(core),
	    downloadMaterial: (0, _material.downloadMaterial)(core),
	    getMaterialCount: (0, _material.getMaterialCount)(core),
	    getMaterialList: (0, _material.getMaterialList)(core),
	    deleteMaterial: (0, _material.deleteMaterial)(core),
	    // tempMedia
	    uploadTempMedia: (0, _tempMedia.uploadTempMedia)(core),
	    getTempMediaUrl: (0, _tempMedia.getTempMediaUrl)(core),
	    downloadTempMedia: (0, _tempMedia.downloadTempMedia)(core)
	  };
	};

	exports.default = Media;
	module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deleteMaterial = exports.getMaterialList = exports.getMaterialCount = exports.downloadMaterial = exports.getMaterialUrl = exports.updateNews = exports.uploadNewsImage = exports.uploadMaterial = exports.addNews = undefined;

	var _regenerator = __webpack_require__(5);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _stringify = __webpack_require__(21);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _asyncToGenerator2 = __webpack_require__(6);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _promise = __webpack_require__(7);

	var _promise2 = _interopRequireDefault(_promise);

	var _request = __webpack_require__(8);

	var _request2 = _interopRequireDefault(_request);

	var _awaitify = __webpack_require__(14);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var addNews = function addNews(core) {};

	var updateNews = function updateNews(core) {};

	var uploadNewsImage = function uploadNewsImage(core) {};

	var getMaterialCount = function getMaterialCount(core) {};

	/**
	 * 获取永久素材列表
	 * @param core
	 */
	var getMaterialList = function getMaterialList(core) {

	  var URL = 'https://api.weixin.qq.com/cgi-bin/material/batchget_material';

	  /**
	   * @param options.type
	   * @param options.offset
	   * @param options.count
	   */
	  return function (options) {

	    return new _promise2.default(function () {
	      var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(resolve, reject) {
	        var access_token, body, response, resData;
	        return _regenerator2.default.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.prev = 0;
	                _context.next = 3;
	                return core.getAccessToken();

	              case 3:
	                access_token = _context.sent;
	                body = (0, _stringify2.default)(options);
	                _context.next = 7;
	                return (0, _awaitify.awaitify2)(_request2.default)({
	                  method: 'POST',
	                  url: URL,
	                  qs: {
	                    access_token: access_token
	                  },
	                  body: body
	                });

	              case 7:
	                response = _context.sent;


	                console.log('[wechat sdk] get response from getMaterialList...');
	                console.log(response[1]);
	                resData = JSON.parse(response[1]);

	                if (!resData.errcode) {
	                  _context.next = 13;
	                  break;
	                }

	                return _context.abrupt('return', reject(resData));

	              case 13:
	                resolve(resData);

	                _context.next = 19;
	                break;

	              case 16:
	                _context.prev = 16;
	                _context.t0 = _context['catch'](0);

	                reject(_context.t0);

	              case 19:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this, [[0, 16]]);
	      }));
	      return function (_x, _x2) {
	        return ref.apply(this, arguments);
	      };
	    }());
	  };
	};

	var deleteMaterial = function deleteMaterial(core) {};

	var uploadMaterial = function uploadMaterial(core) {};

	var getMaterialUrl = function getMaterialUrl(core) {

	  var getMaterialURL = 'https://api.weixin.qq.com/cgi-bin/material/get_material';
	};

	var downloadMaterial = function downloadMaterial(core) {

	  var getMaterialURL = 'https://api.weixin.qq.com/cgi-bin/material/get_material';
	};

	exports.addNews = addNews;
	exports.uploadMaterial = uploadMaterial;
	exports.uploadNewsImage = uploadNewsImage;
	exports.updateNews = updateNews;
	exports.getMaterialUrl = getMaterialUrl;
	exports.downloadMaterial = downloadMaterial;
	exports.getMaterialCount = getMaterialCount;
	exports.getMaterialList = getMaterialList;
	exports.deleteMaterial = deleteMaterial;

/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var uploadTempMedia = function uploadTempMedia(core) {

	  var URL = 'https://api.weixin.qq.com/cgi-bin/media/upload';
	};

	var getTempMediaUrl = function getTempMediaUrl(core) {

	  var URL = 'https://api.weixin.qq.com/cgi-bin/media/get';
	};

	var downloadTempMedia = function downloadTempMedia(core) {
	  var URL = 'https://api.weixin.qq.com/cgi-bin/media/get';
	};

	exports.uploadTempMedia = uploadTempMedia;
	exports.getTempMediaUrl = getTempMediaUrl;
	exports.downloadTempMedia = downloadTempMedia;

/***/ }
/******/ ]);