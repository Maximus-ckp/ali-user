import swiperConfig from "/config/swiper-config";
import parse from "mini-html-parser2";
const app = getApp();

Page({
  data: {
    isSign: 1, // 1 已报名 0 未报名
    posterUrl: "",
    activityId: "",
    activityName: "",
    activityTime: "",
    address: "",
    coverImage: "",
    swiperList: [],
    ...swiperConfig,
    nodes: [],
    tel: "",
    bbAge: "",
    bbName: "",
    richText: "",

    showSharePoster: false,

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
      activityId: this.data.activityId
      // activityId: "1"
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
          detail,
          isSign
        } = data.data;
        this.setData({
          activityName,
          activityTime,
          address,
          coverImage,
          posterUrl: coverImage,
          swiperList,
          richText: detail,
          isSign: 0
        });
        this.str2node(this.data.richText || "");
      }
    });
  },
  str2node(htmlTxt) {
    // htmlTxt = htmlTxt.replace(/<br>/gi, "aaa");
    // console.log(htmlTxt);
    htmlTxt = htmlTxt.replace(
      /<img/g,
      "<img style='max-width:100%;border-radius:6px;'"
    );
    parse(htmlTxt, (err, nodes) => {
      if (!err) {
        this.setData({
          nodes
        });
      }
    });
  },
  signup() {
    if (this.data.isSign) {
      return;
    }
    let duration = 200;
    my.pageScrollTo({
      scrollTop: 1,
      duration
    });
    setTimeout(() => {
      this.setData({
        showPopup: true
      });
    }, duration+100);

    // this.data.showPopup = true;
  },
  share() {
    // my.showSharePanel();
    this.showSharePanel();
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
      activityId: this.data.activityId,
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
      },
      fail: function(res) {
        my.alert({
          title: "提示",
          content: "报名失败，请重试！",
          buttonText: "再试试",
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
  },
  closeSharePoster() {
    this.setData({ showSharePoster: false });
  },
  downloadPoster(posterUrl) {
    my.saveImage({
      url: posterUrl,
      showActionSheet: true,
      success: () => {
        my.alert({
          title: "保存成功",
          success: () => {
            this.setData({ showSharePoster: false });
          }
        });
      }
    });
  },
  // 映射 ref 为 posterRef 的组件到 potser
  posterRef(ref) {
    this.poster = ref;
  },
  // 调用子组件方法
  showSharePanel() {
    this.setData({ showSharePoster: true });
    setTimeout(() => {
      this.poster.draw();
    }, 60);
  }
});
