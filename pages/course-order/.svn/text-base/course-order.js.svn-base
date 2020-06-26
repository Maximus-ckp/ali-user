const app = getApp();

Page({
  data: {
    orderId: "",
    courseId: "",
    courseName: "",
    courseCoverImage: "",
    orderMoney: "",
    effectiveEndTime: "",
    deadlineTime: ""
  },
  getDeadlineTime() {
    // if (this.data.effectiveTime) {
    //   let now = new Date();
    //   let nowTime = now.getTime();
    //   let effectiveTime = this.data.effectiveTime * 24 * 3600 * 1000;
    //   let deadlineTime = new Date(nowTime + effectiveTime);
    //   let y = deadlineTime.getFullYear();
    //   let m = deadlineTime.getMonth() + 1;
    //   let d = deadlineTime.getDate();
    //   console.log(effectiveTime);
    //   console.log(deadlineTime);
    //   return `${y}年${m}月${d}日`;
    // }
    return "-";
  },
  onLoad(query) {
    console.log(query);
    let { orderId } = query;
    console.log(orderId);
    this.setData({
      orderId
    });
    this.initData();
  },
  async initData() {
    try {
      this.getSimpleStoreOrder();
    } catch (e) {
      console.log("mySchedulde执行异常:", e);
    }
  },
  // 获取课程信息
  getSimpleStoreOrder() {
    let params = {
      ...app.api.COMMON_PARAMS,
      orderId: this.data.orderId,
      openId: app.userInfo.openId
    };
    my.request({
      url: app.api.getSimpleStoreOrder,
      method: "POST",
      data: { ...params },
      success: ({ data }) => {
        console.log("【getSimpleStoreOrder】请求结果：", data);
        let {
          courseId,
          courseName,
          courseCoverImage,
          orderMoney,
          effectiveEndTime
        } = data.data;
        this.setData({
          courseId,
          courseName,
          courseCoverImage,
          orderMoney,
          effectiveEndTime
        });
        // let deadlineTime = this.getDeadlineTime();
        // this.setData({
        //   deadlineTime
        // });
      }
    });
  },
  payOrder() {
    var that = this;
    my.showLoading({
      content: '加载中...',
      delay: '500',
    });
    let params = {
      authAppId: app.globalData.authAppId,
      orderId: that.data.orderId,
      openId: app.userInfo.openId,
      orderMoney: that.data.orderMoney
    };
    my.request({
      url: app.api.payStoreOrder,
      method: "POST",
      data: { ...params },
      success: ({ data }) => {
        my.hideLoading();
        console.log("【payStoreOrder】请求结果：", data);
        let { tradeNo } = data.data;
        my.tradePay({
          // 调用统一收单交易创建接口（alipay.trade.create），获得返回字段支付宝交易号trade_no
          tradeNO: tradeNo,
          success: (res) => {
            my.alert({
              content: JSON.stringify(res)
            });
            my.navigateTo({
              url: "/pages/course-detail/course-detail?courseId=" + this.data.courseId
            });
          },
          fail: (res) => {
            my.alert({
              content: JSON.stringify(res),
            });
          }
        });
      }
    });
  },
  pay() {
    my.alert({
      title: "体验版暂无支付功能"
    });
  }
});
