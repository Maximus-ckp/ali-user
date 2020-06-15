import parse from "mini-html-parser2";
// 获取全局 app 实例
const app = getApp();
console.log(app);

Page({
  data: {
    activityId: "",
    activityName: "",
    activityTime: "",
    address: "",
    coverImage: "",
    swiperList: [],
    indicatorDots: true,
    autoplay: true,
    vertical: false,
    interval: 3000,
    circular: true,
    nodes: [],
    tel: "",
    bbAge: "",
    bbName: "",

    area: {
      x: 100,
      y: 100,
      w: 100,
      h: 100
    },
    img: "",
    url: ""
  },
  onLoad(query) {
    console.log(query);
    let { activityId } = query;
    console.log(activityId);
    this.setData({
      activityId
    });
    this.initData();
  },
  async initData() {
    try {
      this.getActivityInfo();
    } catch (e) {
      console.log("mySchedulde执行异常:", e);
    }
  },
  // 获取活动信息
  getActivityInfo() {
    let params = {
      ...app.api.COMMON_PARAMS,
      // TODO
      // activityId: this.data.activityId,
      activityId: 1
    };
    my.request({
      url: app.api.getActivityInfo,
      method: "POST",
      data: { ...params },
      success: ({ data }) => {
        console.log("【getActivityInfo】请求结果：", data);
        let {
          activityName,
          activityTime,
          address,
          coverImage,
          swiperList,
          detail
        } = data.data;
        this.setData({
          activityName,
          activityTime,
          address,
          coverImage,
          swiperList,
          richText: detail
        });
        this.str2node(this.data.richText || "");
      }
    });
  },
  str2node(htmlTxt) {
    htmlTxt = htmlTxt.replace(/<br>/gi, "aaa");
    console.log(htmlTxt);

    parse(htmlTxt, (err, nodes) => {
      if (!err) {
        this.setData({
          nodes
        });
      }
    });
  },
  signup() {
    this.setData({
      showPopup: true
    });
    // this.data.showPopup = true;
  },
  share() {
    my.showSharePanel();
    // let { url } = this.data;
    // my.saveImage({
    //   // url: "http://caibaojian.com/d/uploads/2014/08/20110820223646_656.jpg",
    //   url,
    //   showActionSheet: true,
    //   success: () => {
    //     my.alert({
    //       title: "保存成功"
    //     });
    //   }
    // });
  },
  onShareAppMessage() {
    return {
      title: "分享 View 组件",
      desc: "View 组件很通用"
      // path: 'page/component/view/view',
    };
  },
  onPopupClose() {
    this.setData({
      showPopup: false
    });
  },
  onInputTel(e) {
    this.setData({
      tel: e.detail.value
    });
  },
  onInputAge(e) {
    this.setData({
      bbAge: e.detail.value
    });
  },
  onInputName(e) {
    this.setData({
      bbName: e.detail.value
    });
  },

  async checkForm() {
    let result = { validated: true, msg: "chenggong" };
    if (!this.data.tel || !/^\d{11}$/.test(this.data.tel)) {
      result.validated = false;
      result.msg = "请正确填写您的手机号";
      return result;
    }
    if (!this.data.bbAge || !/^\d{1,2}$/.test(this.data.bbAge)) {
      result.validated = false;
      result.msg = "请正确填写宝宝年龄";
      return result;
    }
    if (!this.data.bbName) {
      result.validated = false;
      result.msg = "请正确填写宝宝姓名";
      return result;
    }
    return result;
  },
  submit() {
    // console.log(
    //   this.startClip().then(url => {
    //     console.log(url);
    //     this.setData({ url });
    //   })
    // );
    this.checkForm().then(res => {
      if (!res.validated) {
        my.alert({
          title: "提示",
          content: res.msg,
          buttonText: "好的"
        });
        return false;
      }
      this.saveActivitySign();
    });
  },
  saveActivitySign() {
    let params = {
      ...app.api.COMMON_PARAMS,
      // TODO
      activityId: "1",
      babyAge: this.data.bbAge,
      babyName: this.data.babyName,
      userMobile: this.data.tel,
      userName: "ckp"
    };
    my.request({
      url: app.api.saveActivitySign,
      method: "POST",
      data: { ...params },
      success: ({ data }) => {
        console.log("saveActivitySign");
        console.log(data);
        my.alert({
          title: "提示",
          content: "报名成功！",
          buttonText: "好的",
          success: () => {
            this.setData({
              showPopup: false
            });
          }
        });
      }
    });
  },
  startClip() {
    let canvasCtx = my.createCanvasContext("canvas");
    canvasCtx.fillRect(20, 20, 250, 80);
    canvasCtx.setFillStyle("blue");
    canvasCtx.draw();
    console.log(canvasCtx);
    let data = canvasCtx.getImageData({
      x: 0,
      y: 0,
      width: 100,
      height: 600,
      success(res) {
        console.log(res.width); // 100
        console.log(res.height); // 100
        console.log(res.data instanceof Uint8ClampedArray); // true
        console.log(res.data.length); // 100 * 100 * 4
      }
    });
    // console.log(data);
    // canvasCtx.putImageData(data, 0, 0);
    return canvasCtx.toDataURL("image/png");
  }
});
