const app = getApp();

Page({
  data: {
    courseId: "",
    courseName: "",
    coverImage: "",
    discountPrice: "",
    effectiveTime: "",
    deadlineTime: ""
  },
  getDeadlineTime() {
    if (this.data.effectiveTime) {
      let now = new Date();
      let nowTime = now.getTime();
      let effectiveTime = this.data.effectiveTime * 24 * 3600 * 1000;
      let deadlineTime = new Date(nowTime + effectiveTime);
      let y = deadlineTime.getFullYear();
      let m = deadlineTime.getMonth() + 1;
      let d = deadlineTime.getDate();
      console.log(effectiveTime);
      console.log(deadlineTime);
      return `${y}年${m}月${d}日`;
    }
    return "-";
  },
  onLoad(query) {
    console.log(query);
    let { courseId } = query;
    console.log(courseId);
    this.setData({
      courseId
    });
    this.initData();
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
      courseId: this.data.courseId
    };
    my.request({
      url: app.api.getCourseInfo,
      method: "POST",
      data: { ...params },
      success: ({ data }) => {
        console.log("【getCourseInfo】请求结果：", data);
        let {
          courseName,
          coverImage,
          discountPrice,
          effectiveTime
        } = data.data;
        this.setData({
          courseName,
          coverImage,
          discountPrice,
          effectiveTime
        });
        let deadlineTime = this.getDeadlineTime();
        this.setData({
          deadlineTime
        });
      }
    });
  },
  payOrder() {
    my.showLoading({
      content: '加载中...',
      delay: '500',
    });
    let params = {
      courseId: "1",
      lang: "CN",
      latitude: 0,
      longitude: 0,
      mobileInfo: {
        did: "testdid",
        emulatordid: "emulatordid",
        imei: "testimei",
        platform: "ios",
        smDid: "testsmDid",
        src: "testsrc"
      },
      orderMoney: 0,
      payMoney: 0,
      quantity: 0,
      ver: "1.0"
    };
    my.request({
      url: app.api.saveStoreOrder,
      method: "POST",
      data: { ...params },
      success: ({ data }) => {
        my.hideLoading();
        console.log("【saveStoreOrder】请求结果：", data);
        let { code } = data;
        console.log(code);
        let {
          address,
          businessTime,
          name,
          storeMobile,
          swiperList
        } = data.data;
        // this.setData({        })
      }
    });
  },
  pay() {
    my.alert({
      title: "体验版暂无支付功能"
    });
  }
});
