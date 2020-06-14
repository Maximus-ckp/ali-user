const app = getApp();
Component({
  mixins: [],
  data: {
    statusList:["待付款","已付款","未使用","已使用","已过期"]
  },
  props: {
    courseId:'',
    orderNo:'',
    payTime: '',
    orderStatus: '',
    coverImage: '',
    courseName: '',
    discountPrice: '',
    effectiveEndTime: '',
    redeemCode: '',
  },

  didMount() {
    this.initData()
  },
  didUpdate() { },
  didUnmount() { },
  methods: {
    initData() {
      // this.getActivityInfo()
    },
    
    
    goToCourse({ target: { dataset } }) {
      let courseId = dataset.courseId;
      my.navigateTo({
        url: "/pages/course-detail/course-detail?courseId=" + courseId
      });
    }
  }
});
