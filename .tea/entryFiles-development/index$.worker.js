if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
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
require('../../pages/index/components/ActivityCard/ActivityCard?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/components/ClassCard/ClassCard?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/list/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/list/list-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/index?hash=936cdbd122b9dce42e98d109b60ffd1c384ea347');
require('../../pages/course-detail/course-detail?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../pages/course-order/course-order?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../pages/my/my?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../pages/activity-detail/activity-detail?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../pages/my-activity/my-activity?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../pages/my-course/my-course?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}