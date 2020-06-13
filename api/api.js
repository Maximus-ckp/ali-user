const BASE_URL = "http://toker.dmivip.top/";

// 1000 小程序应用注册接口
let registerApplication = BASE_URL + "/api/application/security/1000/v1/registerApplication"
// 2000 获取商户信息接口 ok
let getStoreInfo = BASE_URL + "/api/store/2000/v1/getStoreInfo";
// 2001 首页获取课程活动接口 ok
let indexActivityCourseList = BASE_URL + "/api/store/2001/v1/indexActivityCourseList";
// 3000 获取商户活动详情接口
let getActivityInfo = BASE_URL + "/api/activity/3000/v1/getActivityInfo"
// 4000 获取商户课程详情接口
let getCourseInfo = BASE_URL + "/api/course/4000/v1/getCourseInfo"
// 5000 提交订单接口
let saveStoreOrder = BASE_URL + "/api/order/5000/v1/saveStoreOrder"


export default {
  registerApplication,
  getStoreInfo,
  indexActivityCourseList,
  getActivityInfo,
  getCourseInfo,
  saveStoreOrder
}