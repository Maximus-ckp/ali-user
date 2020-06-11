import mock from "./mock"
console.log(mock)
// mock列表数据

// mock列表总数
const mockTotal = 60;
Page({
  data: {
    classList:mock.classList,
    shopList:mock.shopList,
    activityList:mock.activityList,
    show: false, // 是否显示加载动画
    page: 1, // 当前页数
    list: [], // 页面List数据
    background: ["blue", "red", "yellow"],
    background: mock.background,
    indicatorDots: true,
    autoplay: false,
    vertical: false,
    interval: 1000,
    circular: false
  },
  onLoad() {
    this.mySchedulde();
  },
  goToShop({ target: { dataset } }) {
    let shopId = dataset.shopId;
    my.navigateTo({
      url: "/pages/shop/shop?shopId=" + shopId
    });
  },
  goToShop({ target: { dataset } }) {
    let shopId = dataset.shopId;
    my.navigateTo({
      url: "/pages/class-detail/class-detail?shopId=" + shopId
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
      console.log(list.length);
      console.log(mockTotal);
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
        console.log(data)
        for (let i = 0; i < data.length; i++) {
          // let newObj = { title:'下拉家在', remarksa: `我是第${page}页` };
          let newObj = { ...data[i], remarksa: `我是第${page}页` };
          list.push(newObj);
          console.log(newObj)
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
