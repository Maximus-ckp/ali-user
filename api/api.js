/*
接口文档地址
http://182.92.99.177:7979/swagger-ui.html#/
客户端UI蓝湖
https://lanhuapp.com/web/#/item/project/board?type=share_mark&pid=8b58cba8-e444-454f-86e6-6929432a254f&activeSectionId=&teamId=cf38a533-a7df-4a5e-8a9f-e1413b405dab&param=e3d1ca51-439b-4f03-8ee9-215169439639
商家PC蓝湖
https://lanhuapp.com/web/#/item/project/board?fid=all&commonly=all&tid=cf38a533-a7df-4a5e-8a9f-e1413b405dab&project_id=775c4922-c005-486d-a56c-58a11fc651ef&image_id=f5f7e872-8b34-4f4b-9579-d53af5828245&from=nav
https://lanhuapp.com/url/9YoXk-lIDhX
*/
const BASE_URL = "https://toker.dmivip.top/";

// 1000 小程序应用注册接口
let registerApplication = BASE_URL + "/api/application/security/1000/v1/registerApplication"
// 用户登录接口
let customerLogin = BASE_URL + "/api/customer/v1/login"

// 用户登录接口
let getCustomerMobile = BASE_URL + "/api/customer/1003/v1/getCustomerMobile"
// 保存用户信息接口
let updateStoreCustomer = BASE_URL + "/api/customer/1004/v1/updateStoreCustomer"
// 1001 获取用户报名活动列表接口
let findCustomerActivityList = BASE_URL + "/api/customer/1001/v1/findCustomerActivityList"
// 1002 获取用户报名活动列表接口
let findCustomerCourseList = BASE_URL + "/api/customer/1002/v1/findCustomerCourseList"


// 2000 获取商户信息接口 ok
let getStoreInfo = BASE_URL + "/api/store/2000/v1/getStoreInfo";
// 2001 首页获取课程活动接口 ok
let indexActivityCourseList = BASE_URL + "/api/store/2001/v1/indexActivityCourseList";

// 3000 获取商户活动详情接口 ok
let getActivityInfo = BASE_URL + "/api/activity/3000/v1/getActivityInfo"
// 3001 商户活动报名接口
let saveActivitySign = BASE_URL + "/api/activity/3001/v1/saveActivitySign"
// 3002 查询课程活动列表接口
let findActivityList = BASE_URL + "/api/activity/3002/v1/findActivityList"

// 4000 获取商户课程详情接口 ok
let getCourseInfo = BASE_URL + "/api/course/4000/v1/getCourseInfo"
// 4001 查询商户课程接口
let findCourseList = BASE_URL + "/api/course/4001/v1/findCourseList"

// 5000 提交订单接口
let saveStoreOrder = BASE_URL + "/api/order/5000/v1/saveStoreOrder"

const COMMON_PARAMS = {
  lang: 'CN',
  latitude: 0,
  longitude: 0,
  mobileInfo: {
    did: 'testdid',
    emulatordid: 'emulatordid',
    imei: 'testimei',
    platform: 'ios',
    smDid: 'testsmDid',
    src: 'testsrc'
  },
  ver: '1.0'

}

export default {
  registerApplication,
  customerLogin,
  getCustomerMobile,
  updateStoreCustomer,
  findCustomerActivityList,
  findCustomerCourseList,
  getStoreInfo,
  indexActivityCourseList,
  getActivityInfo,
  saveActivitySign,
  findActivityList,
  getCourseInfo,
  findCourseList,
  saveStoreOrder,
  COMMON_PARAMS
}