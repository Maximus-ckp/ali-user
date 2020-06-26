import api from "/api/api.js";
const app = getApp();

Page({
  data: {
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
    // this.getPhone();
    //this.testRequest();
  },
  onGetAuthorize(res) {
    let that = this;
    my.getOpenUserInfo({
      fail: res => {},
      success: res => {
        let userInfo = JSON.parse(res.response).response; // 以下方的报文格式解析两层 response
        console.log("获取用户授权");
        console.log(userInfo);
        let { avatar, nickName } = userInfo;
        console.log(avatar, nickName);
        app.userInfo.avatar = avatar;
        app.userInfo.nickName = nickName;
        that.setData({
          avatar:avatar,
          nickName:nickName
        });
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
      }
    });
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
