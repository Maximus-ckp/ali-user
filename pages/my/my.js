// 获取全局 app 实例
const app = getApp();
console.log(app);

Page({
  data: {
    baseUrl: "//toker.dmivip.top/",
    show: false, // 是否显示加载动画
    tel:'',
    navList: [
      {
        name: "我的订单",
        thumb:
          "https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*Y8BATYqMN78AAAAAAAAAAABkARQnAQ",
        onClick: () =>
          my.navigateTo({
            url: "/pages/my-order/my-order"
          })
      },
      {
        name: "我的券",
        thumb:
          "https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*9RqXQaxLeCEAAAAAAAAAAABkARQnAQ",
        onClick: () =>
          my.navigateTo({
            url: "/pages/my-ticket/my-ticket"
          })
      },
      {
        name: "关于",
        thumb:
          "https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*-Lp1TZDggnoAAAAAAAAAAABkARQnAQ",
        onClick: () => {}
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
    this.getPhone();
    // this.testRequest();
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
      latitude:'23.5',
      longitude:'233.8',
      mobileInfo:{
        did:'testdid',
        emulatordid:'emulatordid',
        imei:'testimei',
        platform:'ios',
        smDid:'testsmDid',
        src:'testsrc'
      },
      ver:'1.0'
    }
    console.log(this.data.baseUrl + "toker/api/store/2000/v1/getStoreInfo")
    console.log(JSON.stringify(params))
    my.request({
      url: this.data.baseUrl + "api/store/2000/v1/getStoreInfo",
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
    // console.log('target:')
    // console.log(target)
    console.log("dataset:");
    console.log(dataset);
    const { onClick } = this.data.navList[dataset.index];
    if (onClick) {
      onClick();
    }
  }
});
