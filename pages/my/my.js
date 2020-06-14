import api from "/api/api.js"
// 获取全局 app 实例
const app = getApp();
console.log(app);

Page({
  data: {
    user:{},
    baseUrl: "http://toker.dmivip.top/",
    show: false, // 是否显示加载动画
    tel:'',
    navList: [
      {
        name: "我的课程",
        onClick: () =>
          my.navigateTo({
            url: "/pages/my-course/my-course"
          })
      },
      {
        name: "我的活动",
        onClick: () =>
          my.navigateTo({
            url: "/pages/my-activity/my-activity"
          })
      }
    ],
    nodes: [
      {
        name: "div",
        attrs: {
          class: "wrapper",
          style: "color: orange;"
        },
        children: [
          {
            type: "text",
            text: "Hello&nbsp;World!"
          }
        ]
      }
    ]
  },
  onLoad() {
    this.initData();
    // this.getPhone();
    this.testRequest();
  },
  getPhone(){
    my.getPhoneNumber({
    success: (res) => {
        console.log( res.response)
        this.setData({tel:res.response})
       
    },
    fail: (res) => {
        console.log(res);
        console.log('getPhoneNumber_fail');
    },
});
  },
  testRequest() {
    let params = {
      lang:'CN',
      latitude:0,
      longitude:0,
      mobileInfo:{
        did:'testdid',
        emulatordid:'emulatordid',
        imei:'testimei',
        platform:'ios',
        smDid:'testsmDid',
        src:'testsrc'
      },
      storeId:1,
      ver:'1.0'
    }
    console.log(api.indexActivityCourseList)
    console.log(JSON.stringify(params))
    my.request({
      url: api.getStoreInfo,
      method: "POST",
      data: {...params},
      success: result => {
        console.log("请求结果：");
        console.log(result);
      }
    });
  },
  async initData() {
    try {
      setTimeout(() => {
        // 获取用户信息并存储数据
        app.getUserInfo().then(
          user => {
            this.setData({
              user
            });
            console.log(user);
          },
          () => {
            // 获取用户信息失败
          }
        );
      }, 1000);
    } catch (e) {
      console.log("mySchedulde执行异常:", e);
    }
  },
  onListClick(e) {
    let {
      target: { dataset }
    } = e;
    console.log(e);
    console.log("dataset:");
    console.log(dataset);
    const { onClick } = this.data.navList[dataset.index];
    if (onClick) {
      onClick();
    }
  }
});
