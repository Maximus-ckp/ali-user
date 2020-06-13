const app = getApp();
Component({
  mixins: [],
  data: {
    ori: 200
  },
  props: {
    courseId:'',
    className: '',
    labelList: [],
    imgUrl: '',
    oriPrice: '',
    promotionPrice: ''
  },

  didMount() {
    this.initData()
  },
  didUpdate() { },
  didUnmount() { },
  methods: {
    initData() {
      this.getActivityInfo()
    },
    
    // 获取活动信息
    getActivityInfo() {
      let params = {
        activityId: "1",
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
        url: app.api.getActivityInfo,
        method: "POST",
        data: { ...params },
        success: ({ data }) => {
          console.log("【getActivityInfo】请求结果：", data);
          let { address, businessTime, name, storeMobile, swiperList } = data.data;
          this.setData({
            shopName: name,
            businessHour: businessTime,
            shopAddress: address,
            shopTel: storeMobile,
            swiperList
          })
        }
      });
    },
    goToCourse({ target: { dataset } }) {
      let courseId = dataset.courseId;
      my.navigateTo({
        url: "/pages/course-detail/course-detail?courseId=" + courseId
      });
    }
  }
});
