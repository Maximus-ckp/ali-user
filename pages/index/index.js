import mock from "./mock"
const app = getApp();
// mock列表数据

// mock列表总数
const mockTotal = 60;
Page({
  data: {
    shopName: '',
    businessHour: '',
    shopAddress: '',
    shopTel: '',
    courseList: mock.classList,
    activityList: mock.activityList,
    show: false, // 是否显示加载动画
    page: 1, // 当前页数
    list: [], // 页面List数据
    background: mock.background,
    swiperList:[],
    indicatorDots: true,
    autoplay: true,
    vertical: false,
    interval: 3000,
    circular: true
  },
  onLoad() {
    this.mySchedulde();
    this.initData();
  },
  initData() {
    this.getStoreInfo();
    this.indexActivityCourseList();
  },
  // 获取商户信息
  getStoreInfo() {
    let params = {
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
      storeId: 1,
      ver: '1.0'
    }
    my.request({
      url: app.api.getStoreInfo,
      method: "POST",
      data: { ...params },
      success: ({ data }) => {
        console.log("【getStoreInfo】请求结果：",data);
        let { address, businessTime, name, storeMobile,swiperList } = data.data;
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
  indexActivityCourseList() {
    let params = {
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
      storeId: 1,
      ver: '1.0'
    }
    my.request({
      url: app.api.indexActivityCourseList,
      method: "POST",
      data: { ...params },
      success: ({ data }) => {
        console.log("【indexActivityCourseList】请求结果：",data);
        this.setData({
          courseList:data.data.courseList,
          activityList:data.data.activityList,
        })
      }
    });
  },
  // goToShop({ target: { dataset } }) {
  //   let shopId = dataset.shopId;
  //   my.navigateTo({
  //     url: "/pages/shop/shop?shopId=" + shopId
  //   });
  // },
  goToCourse({ target: { dataset } }) {
    let courseId = dataset.courseId;
    my.navigateTo({
      url: "/pages/course-detail/course-detail?courseId=" + courseId
    });
  },
  /**
   * scroll-view滑到底部触发事件
   * @method scrollMytrip
   */
  async scrollMytrip() {
    // my.alert({
    //   title: '亲',
    //   content: '您本月的账单已出',
    //   buttonText: '我知道了',
    //   success: () => {
    //     my.alert({
    //       title: '您点击了「我知道了」',
    //     });
    //   }
    // });
    try {
      const { page, list } = this.data;
      // 判断是否还有数据需要加载
      if (list.length < mockTotal) {
        this.setData({ show: true });
        const newPage = page + 1;
        this.mySchedulde(newPage);
      }
    } catch (e) {
      this.setData({ show: false });
      console.log("scrollMytrip执行异常:", e);
    }
  },
  /**
   * 模拟请求服务端查询数据并渲染页面
   * @method mySchedulde
   * @param {int} page 分页,默认第1页
   */
  async mySchedulde(page = 1) {
    try {
      let list = this.data.list;
      // 模拟请求拿到数据进行更新data
      setTimeout(() => {
        let data = this.data.activityList;
        for (let i = 0; i < data.length; i++) {
          // let newObj = { title:'下拉家在', remarksa: `我是第${page}页` };
          let newObj = { ...data[i], remarksa: `我是第${page}页` };
          list.push(newObj);
        }
        this.setData({
          list,
          page,
          show: false
        });
      }, 1000);
    } catch (e) {
      console.log("mySchedulde执行异常:", e);
    }
  }
});
