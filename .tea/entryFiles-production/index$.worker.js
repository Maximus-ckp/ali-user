if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');
require('./importScripts$');

var AFAppX = self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;


if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../pages/index/components/ShopInfo/ShopInfo?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/list/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/list/list-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/index?hash=67f146af7481ae0c46ddb52544728e4b7d9a2bb5');
require('../../pages/my/my?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../pages/shop/shop?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}