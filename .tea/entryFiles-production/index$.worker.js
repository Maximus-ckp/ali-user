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
require('../../pages/index/components/ActivityCard/ActivityCard?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/components/ClassCard/ClassCard?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/popup/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/list/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/list/list-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/am-icon/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/input-item/index?hash=5a0c180d5ccf7c9d483dd4817cdab5489824013c');
require('../../pages/my-course/components/CourseCard/CourseCard?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/my-activity/components/ActivityCard/ActivityCard?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/index?hash=936cdbd122b9dce42e98d109b60ffd1c384ea347');
require('../../pages/activity-detail/activity-detail?hash=61445d909d5cfe1524f4b71c136ef6849c6d8c32');
require('../../pages/my-course/my-course?hash=648d762e57bc50e936f23cfd1f14486ef6e6c538');
require('../../pages/my-activity/my-activity?hash=5748add3881b16e8e784d386e16e57bb2afb405f');
require('../../pages/course-detail/course-detail?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../pages/course-order/course-order?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../pages/my/my?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}