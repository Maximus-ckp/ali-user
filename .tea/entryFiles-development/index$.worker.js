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
require('../../node_modules/ant-skeleton/components/skeleton/skeleton?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/components/ShopInfo/ShopInfo?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/components/ActivityCard/ActivityCard?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/components/ClassCard/ClassCard?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/components/ckp-skeleton/ckp-skeleton?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/popup/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/list/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/list/list-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/am-icon/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/input-item/index?hash=5a0c180d5ccf7c9d483dd4817cdab5489824013c');
require('../../pages/activity-detail/components/SharePoster/SharePoster?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/my-course/components/CourseCard/CourseCard?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/empty/empty?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/my-activity/components/ActivityCard/ActivityCard?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/index?hash=d59a02ded02df728ca8d1ed8ab7177514d02dc11');
require('../../pages/activity-detail/activity-detail?hash=3c6bfa607dbd76deff3e5a7f97814c59181b54de');
require('../../pages/my-course/my-course?hash=e428cc7eccca5a2d114fea8274f3803e494e667f');
require('../../pages/my-activity/my-activity?hash=b2feead39b704915ed305528303ba7ab98a6b300');
require('../../pages/course-detail/course-detail?hash=23c5b4da2717aaa7a0c17ae8cb99dc23ed61d274');
require('../../pages/course-order/course-order?hash=23c5b4da2717aaa7a0c17ae8cb99dc23ed61d274');
require('../../pages/my/my?hash=23c5b4da2717aaa7a0c17ae8cb99dc23ed61d274');
require('../../pages/auth-success/auth-success?hash=fea1de5c880ec48e28eae7ad8d363834ba150e55');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}