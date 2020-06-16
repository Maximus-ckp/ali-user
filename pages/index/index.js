import mock from "./mock";
import swiperConfig from "/config/swiper-config";
const app = getApp();
// mock列表数据

// mock列表总数
const mockTotal = 60;
Page({
  data: {
    shopName: "",
    businessHour: "",
    shopAddress: "",
    shopTel: "",
    courseList: mock.classList,
    activityList: mock.activityList,
    show: false, // 是否显示加载动画
    page: 1, // 当前页数
    list: [], // 页面List数据
    swiperList: [],
    ...swiperConfig
  },
  onLoad() {
    this.initData();
  },
  initData() {
    this.getStoreInfo();
    this.findCourseList();
    this.findActivityList();
  },
  // 获取商户信息
  getStoreInfo() {
    let params = {
      ...app.api.COMMON_PARAMS,
      storeId: 1
    };
    my.request({
      url: app.api.getStoreInfo,
      method: "POST",
      data: { ...params },
      success: ({ data }) => {
        console.log("【getStoreInfo】请求结果：", data);
        let {
          address,
          businessTime,
          name,
          storeMobile,
          swiperList
        } = data.data;
        this.setData({
          shopName: name,
          businessHour: businessTime,
          shopAddress: address,
          shopTel: storeMobile,
          swiperList
        });
      }
    });
  },
  findCourseList() {
    let params = {
      ...app.api.COMMON_PARAMS,
      storeId: 1
    };
    my.request({
      url: app.api.findCourseList,
      method: "POST",
      data: { ...params },
      success: ({ data }) => {
        console.log("【findCourseList】请求结果：", data);
        this.setData({
          courseList: data.data
        });
      }
    });
  },
  findActivityList() {
    let params = {
      ...app.api.COMMON_PARAMS,
      storeId: 1
    };
    my.request({
      url: app.api.findActivityList,
      method: "POST",
      data: { ...params },
      success: ({ data }) => {
        console.log("【findActivityList】请求结果：", data);
        this.setData({
          activityList: data.data
        });
      }
    });
  },

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
      let list = this.data.activityList;
      // 模拟请求拿到数据进行更新data
      setTimeout(() => {
        let data = this.data.activityList;
        for (let i = 0; i < 3; i++) {
          // let newObj = { title:'下拉家在', remarksa: `我是第${page}页` };
          let newObj = { ...data[i] };
          list.push(newObj);
        }
        this.setData({
          activityList: list,
          show: false
        });
      }, 1000);
    } catch (e) {
      console.log("mySchedulde执行异常:", e);
    }
  }
});
