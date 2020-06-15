import swiperConfig from "/config/swiper-config"
import parse from 'mini-html-parser2';
// 获取全局 app 实例
const app = getApp();
console.log(app);

Page({
  data: {
    courseId:'',
    promotionPrice: '',
    oriPrice: '',
    courseName: '',
    swiperList: [
      // { imgUrl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1564215117,4275586328&fm=15&gp=0.jpg" },
      // { imgUrl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1564215117,4275586328&fm=15&gp=0.jpg" },
      // { imgUrl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1564215117,4275586328&fm=15&gp=0.jpg" },
    ],
    courseTags: [],
    effectiveTime: '',
    orderStatus:0, //3 为已购买

    ...swiperConfig,

    inputValue: '',
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
    let params = {
      ...app.api.COMMON_PARAMS,
      courseId: this.data.courseId,
    }
    my.request({
      url: app.api.getCourseInfo,
      method: "POST",
      data: { ...params },
      success: ({ data }) => {
        console.log("【getCourseInfo】请求结果：", data);
        let { courseName, discountPrice, originalPrice, swiperList, effectiveTime,orderStatus } = data.data;
        this.setData({
          courseName,
          swiperList,
          oriPrice: originalPrice,
          promotionPrice: discountPrice, effectiveTime,
          orderStatus
        })
      }
    });
  },
  bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },
  str2node() {
    console.log(this.data.inputValue)
    parse(this.data.inputValue, (err, nodes) => {
      if (!err) {
        this.setData({
          nodes,
        });
      }
    })
    console.log(this.data.nodes)
  },
  buyCourse() {
    console.log('gobuy')
    my.navigateTo({
      url: "/pages/course-order/course-order?courseId=" + this.data.courseId
    });
  },
});
