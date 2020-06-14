// 获取全局 app 实例
const app = getApp();
console.log(app);

Page({
  data: {
    courseId:'',
    courseName:'',
    coverImage:'',
    discountPrice:'',
    effectiveTime:'',
    deadlineTime:'',
  },
  getDeadlineTime(){
    if(this.data.effectiveTime){
      let now = new Date();
      let nowTime = now.getTime();
      let effectiveTime = this.data.effectiveTime*24*3600*1000;
      let deadlineTime = new Date(nowTime+effectiveTime);
      let y = deadlineTime.getFullYear();
      let m = deadlineTime.getMonth()+1;
      let d = deadlineTime.getDate();
      console.log(effectiveTime)
      console.log(deadlineTime)
      return `${y}年${m}月${d}日`;
    }
    return '-'
  },
  onLoad(query) {
    console.log(query);
    this.initData();
    let { courseId } = query
    console.log(courseId)
    this.setData({
      courseId
    })
  },
  async initData() {
    try {
      this.getCourseInfo();
    } catch (e) {
      console.log("mySchedulde执行异常:", e);
    }
  },
  // 获取课程信息
  getCourseInfo() {
    let params = {
      ...app.api.COMMON_PARAMS,
      courseId: "1",
    }
    my.request({
      url: app.api.getCourseInfo,
      method: "POST",
      data: { ...params },
      success: ({ data }) => {
        console.log("【getCourseInfo】请求结果：", data);
        let { courseName, coverImage, discountPrice, effectiveTime } = data.data;
        this.setData({
          courseName,
          coverImage,
          discountPrice,
          effectiveTime
        })
        let deadlineTime = this.getDeadlineTime();
        this.setData({
          deadlineTime
        })
      }
    });
  },
  payOrder() {
    let params = {
      courseId: "1",
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
      orderMoney: 0,
      payMoney: 0,
      quantity: 0,
      ver: '1.0'
    }
    my.request({
      url: app.api.saveStoreOrder,
      method: "POST",
      data: { ...params },
      success: ({ data }) => {
        console.log("【saveStoreOrder】请求结果：", data);
        let { code } = data;
        console.log(code)
        let { address, businessTime, name, storeMobile, swiperList } = data.data;
        // this.setData({        })
      }
    });
  },
});