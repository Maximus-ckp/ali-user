import swiperConfig from "/config/swiper-config"
import parse from 'mini-html-parser2';
const app = getApp();

Page({
  data: {
    isLoading:true,
    courseId:'',
    promotionPrice: '',
    oriPrice: '',
    courseName: '',
    swiperList: [
      // { imgUrl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1564215117,4275586328&fm=15&gp=0.jpg" },
      // { imgUrl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1564215117,4275586328&fm=15&gp=0.jpg" },
      // { imgUrl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1564215117,4275586328&fm=15&gp=0.jpg" },
    ],
    labelList: [],
    effectiveTime: '',
    orderStatus:0, //3 为已购买

    ...swiperConfig,

    inputValue: '',
    richText:'',
    nodes: []
  },
  onLoad(query) {
    console.log(query);
    let { courseId } = query
    console.log(courseId)
    this.setData({
      courseId
    })
    this.initData();
  },

  async initData() {
    this.getCourseInfo();
  },
  // 获取课程信息
  getCourseInfo() {
    my.showLoading({
      content: '加载中...',
      delay: '500',
    });
    let params = {
      ...app.api.COMMON_PARAMS,
      courseId: this.data.courseId,
    }
    my.request({
      url: app.api.getCourseInfo,
      method: "POST",
      data: { ...params },
      success: ({ data }) => {
        my.hideLoading();
        console.log("【getCourseInfo】请求结果：", data);
        let { courseName, discountPrice, originalPrice, swiperList, effectiveTime,orderStatus,labelList, detail} = data.data;
        this.setData({
          isLoading:false,
          courseName,
          swiperList,
          oriPrice: originalPrice,
          promotionPrice: discountPrice, effectiveTime,
          orderStatus,
          labelList,
          richText: detail
        });
        this.str2node(this.data.richText || "");
      }
    });
  },
  bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },
  str2node(htmlTxt) {
    // htmlTxt = htmlTxt.replace(/<br>/gi, "aaa");
    console.log('htmlTxt');
    console.log(htmlTxt);
    htmlTxt = htmlTxt.replace(/<img/g,"<img style='max-width:100%;border-radius:6px;'");
    parse(htmlTxt, (err, nodes) => {
      console.log(err)
      if (!err) {
        
        this.setData({
          nodes
        });
      }
    });
  },
  buyCourse() {
    console.log('gobuy')
    if(app.userInfo.mobile){
      
    } else {
      my.getPhoneNumber({
          protocols:{
            // 小程序模板所属的三方应用appId        
          isvAppId: '2021001168631584'    
      },
          success: (res) => {
            let params = {
              openId: app.userInfo.openId,
              encryptedData: res.response
            };
            my.request({
                url: app.api.getCustomerMobile,
                method: "POST",
                data: { ...params },
                success: ({ data }) => {
                              
                }
            });
          },
          fail: (res) => {
              console.log(res);
              console.log('getPhoneNumber_fail');
        },
      });
    }
    my.navigateTo({
      url: "/pages/course-order/course-order?courseId=" + this.data.courseId
    });
  },
});
