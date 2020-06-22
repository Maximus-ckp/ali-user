import api from "/api/api.js";
const app = getApp();

Page({
  data: {
    user: {},
    avatar: app.userInfo.avatar,
    nickName: app.userInfo.nickName,
    baseUrl: "https://toker.dmivip.top/",
    show: false, // 是否显示加载动画
    tel: "",
    navList: [
      {
        name: "我的课程",
        onClick: () => {
          my.navigateTo({
            url: "/pages/my-course/my-course"
          });
        }
      },
      {
        name: "我的活动",
        onClick: () => {
          my.navigateTo({
            url: "/pages/my-activity/my-activity"
          });
        }
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
  onShow() {
    //this.initData();
    // this.getPhone();
    //this.testRequest();
  },
  getPhone() {
    my.getPhoneNumber({
      success: res => {
        this.setData({ tel: res.response });
      },
      fail: res => {
        console.log("getPhoneNumber_fail");
      }
    });
  },
  testRequest() {
    let params = {
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
      storeId: 2,
      ver: "1.0"
    };
    console.log(JSON.stringify(params));
    // my.request({
    //   url: api.getStoreInfo,
    //   method: "POST",
    //   data: { ...params },
    //   success: result => {
    //     console.log("请求结果：");
    //     console.log(result);
    //   }
    // });
  },
  async initData() {
    var that = this;
    if(!app.userInfo.nickName){
      my.showLoading({
        content: '获取用户信息...',
        delay: '300',
      });
      try {
        that.getUserInfo();
        // setTimeout(() => {
        //   this.getUserInfo();
        // }, 300);
        // let timer = setTimeout(() => {
        //   if (!this.data.avatar) {
        //     this.getUserInfo();
        //   } else {
        //     clearTimeout(timer);
        //   }
        // }, 2000);
      } catch (e) {
        console.log("mySchedulde执行异常:", e);
      }
    }
  },
  async getUserInfo() {
    await app.getUserInfo().then(
      user => {
        my.hideLoading();
        this.setData({
          user
        });
        let { avatar, nickName } = user;
        console.log(avatar, nickName);
        this.setData({
          avatar,
          nickName
        });
        app.userInfo.avatar = avatar;
        app.userInfo.nickName = nickName;
        let params = {
          ...app.api.COMMON_PARAMS,
          openId: app.userInfo.openId,
          avatar: avatar,
          nickName: nickName
        };
        my.request({
          url: app.api.updateStoreCustomer,
          method: "POST",
          data: { ...params },
          success: ({ data }) => {
            my.hideLoading();
            console.log("【updateStoreCustomer】请求结果：", data);
          }
        });
      },
      () => {
        // 获取用户信息失败
      }
    );
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
      if (!this.data.avatar) {
        this.getUserInfo();
        return;
      }
      onClick();
    }
  }
});
