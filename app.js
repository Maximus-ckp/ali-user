import api from "/api/api.js";
App({
  api,
  userInfo:{
    avatar:'testAvatar',
    nickName:'CKP',
    tel:'1326'
  },
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info("App onLaunch");
    
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
  getUserInfo() {
    return new Promise((resolve, reject) => {
      if (this.userInfo) resolve(this.userInfo);

      my.getAuthCode({
        scopes: ["auth_user"],
        success: authcode => {
          console.info(authcode);

          my.getAuthUserInfo({
            success: res => {
              this.userInfo = res;
              resolve(this.userInfo);
            },
            fail: () => {
              reject({});
            }
          });
        },
        fail: () => {
          reject({});
        }
      });
    });
  }
});
