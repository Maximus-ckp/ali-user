// 获取全局 app 实例
const app = getApp();
console.log(app);

Page({
  data: {
    activityList: [],
    orderBy: "string",
    orderStatus: 0,
    pageNo: 0,
    pageSize: 6,
    showLoadMore:false,
  },
  onLoad(query) {
    console.log(query);
    this.initData();
  },
  async initData() {
    try {
      this.findCustomerActivityList();
    } catch (e) {
      console.log("mySchedulde执行异常:", e);
    }
  },
  findCustomerActivityList() {
    let params = {
      ...app.api.COMMON_PARAMS,
      customerId: 1,
      orderBy: "string",
      pageNo: 1,
      pageSize: 6,
    }
    my.request({
      url: app.api.findCustomerActivityList,
      method: "POST",
      data: { ...params },
      success: ({ data }) => {
        console.log("【findCustomerActivityList】请求结果：", data);
        this.setData({
          activityList: [...data.data,...data.data,...data.data,...data.data,...data.data],
        })
      }
    });
  },
  loadMore(){
    console.log(Date.now())
    let newList = this.data.activityList;
    newList.push(newList[0]);
    this.setData({showLoadMore:true})
    setTimeout(()=>{
      this.setData({
        activityList:newList,
        showLoadMore:false
      })
    },1000)
    
    console.log(this.data.activityList.length)
  }
});
