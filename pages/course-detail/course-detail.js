import parse from 'mini-html-parser2';
// 获取全局 app 实例
const app = getApp();
console.log(app);

Page({
  data: {
    promotionPrice: '19',
    oriPrice: '59',
    courseName: '优质早教课程实地体验不限定日期体验',
    validDays: '30天',
    swiperList: [
      { imgUrl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1564215117,4275586328&fm=15&gp=0.jpg" },
      { imgUrl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1564215117,4275586328&fm=15&gp=0.jpg" },
      { imgUrl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1564215117,4275586328&fm=15&gp=0.jpg" },
    ],
    courseTags: ['0-6岁', '4节课', '1-6人'],
    effectiveTime: '',

    indicatorDots: true,
    autoplay: true,
    vertical: false,
    interval: 3000,
    circular: true,

    inputValue:'',
    nodes:[]
  },
  onLoad(query) {
    console.log(query);
    this.initData();
  },

  async initData() {
    this.getCourseInfo();
  },
  // 获取课程信息
  getCourseInfo() {
    let params = {
      courseId: "1",
      lang: 'CN',
      latitude: 0,
      longitude: 0,
      mobileInfo: {
        did: 'testdid',
        emulatordid: 'emulatordid',
        imei: 'testimei',
        platform: 'ios',
        smDid: 'testsmDid',
        src: 'testsrc'
      },
      ver: '1.0'
    }
    my.request({
      url: app.api.getCourseInfo,
      method: "POST",
      data: { ...params },
      success: ({ data }) => {
        console.log("【getCourseInfo】请求结果：", data);
        //       promotionPrice:'19',
        // oriPrice:'59',
        // className:'优质早教课程实地体验不限定日期体验',
        // validDays:'30天',
        // bannerList:[
        //   {imgUrl:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1564215117,4275586328&fm=15&gp=0.jpg"},
        //   {imgUrl:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1564215117,4275586328&fm=15&gp=0.jpg"},
        //   {imgUrl:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1564215117,4275586328&fm=15&gp=0.jpg"},
        // // ],
        // classTags:['0-6岁','4节课','1-6人'],
        let { courseName, discountPrice, originalPrice, swiperList, effectiveTime } = data.data;
        this.setData({
          courseName,
          swiperList,
          oriPrice: originalPrice,
          promotionPrice: discountPrice, effectiveTime
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
});
