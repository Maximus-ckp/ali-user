const app = getApp();

Page({
  data: {
    tabIdx: 0,
    totalList: [1, 2, 3],
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
      this.findCustomerCourseList();
    } catch (e) {
      console.log("mySchedulde执行异常:", e);
    }
  },
  findCustomerCourseList(orderType = 0) {
    let params = {
      ...app.api.COMMON_PARAMS,
      customerId: 2,
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
            unusedList: data.data
          });
        } else {
          this.setData({
            totalList: data.data
          });
        }
      }
    });
  }
});
