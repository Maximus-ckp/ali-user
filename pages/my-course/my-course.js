const app = getApp();

Page({
  data: {
    isLoading:true,
    tabIdx: 0,
    totalList: [],
    unusedList: [],
    orderBy: "string",
    orderStatus: 0,
    pageNo: 0,
    pageSize: 6
  },
  onLoad(query) {
    console.log(query);
    this.initData();
  },
  switchTab({ target: { dataset } }) {
    let tabIdx = dataset.tabIdx;
    this.setData({
      tabIdx
    });
    this.findCustomerCourseList(tabIdx);
  },
  async initData() {
    try {
      if(app.userInfo.openId){
        this.findCustomerCourseList();
      }
    } catch (e) {
      console.log("mySchedulde执行异常:", e);
    }
  },
  findCustomerCourseList(orderType = 0) {
    let params = {
      ...app.api.COMMON_PARAMS,
      // 变为动态
      // customerId: 2,
      openId: app.userInfo.openId,
      orderBy: "string",
      // orderStatus: 3,
      pageNo: 1,
      pageSize: 6
    };
    // 未消费列表
    if (orderType === 1) {
      params = { ...params, ...{ orderStatus: 3 } };
    }
    my.request({
      url: app.api.findCustomerCourseList,
      method: "POST",
      data: { ...params },
      success: ({ data }) => {
        console.log("【findCustomerCourseList】请求结果：", data);
        if (orderType === 1) {
          this.setData({
            isLoading:false,
            unusedList: data.data
          });
        } else {
          this.setData({
            isLoading:false,
            totalList: data.data
          });
        }
      }
    });
  }
});
