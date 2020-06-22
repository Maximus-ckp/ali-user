import api from "/api/api.js";
App({
  api,
  userInfo:{
    avatar:'',
    nickName:'',
    mobile:'',
    openId:''
  },
  globalData:{
    authAppId: '',
    appVersion: '',
    storeId:''
   },
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info("App onLaunch");
    var that = this;
    that.globalData.authAppId = my.getAppIdSync().appId;
    console.log(that.globalData.authAppId);
    my.getRunScene({
      success(result) {
        that.globalData.appVersion = result.envVersion;
        console.log(that.globalData.appVersion);
      },
    });
    my.getAuthCode({
      scopes: 'auth_user',
      success: (res) => {
        // my.alert({
        //   content: res.authCode,
        // });
        let params = {
          ...this.api.COMMON_PARAMS,
          authAppId: this.globalData.authAppId,
          authCode: res.authCode
        };
        my.request({
          url: this.api.customerLogin,
          method: "POST",
          data: { ...params },
          success: ({ data }) => {
            console.log("【customerLogin】请求结果：", data);
            var result = data.data;
            if(result){
              that.userInfo.nickName = result.nickName;
              that.userInfo.avatar = result.avatar;
              that.userInfo.mobile = result.mobile;
              that.userInfo.openId = result.openId;
            }
          }
        });
      },
    });
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
  getUserInfo() {
    return new Promise((resolve, reject) => {
      if (this.userInfo) resolve(this.userInfo);

      // my.getAuthCode({
      //   scopes: ["auth_user"],
      //   success: authcode => {
      //     console.info(authcode);

          my.getAuthUserInfo({
            success: res => {
              this.userInfo = res;
              resolve(this.userInfo);
            },
            fail: () => {
              reject({});
            }
          });
        // }
      //   fail: () => {
      //     reject({});
      //   }
      // });
    });
  }
});
