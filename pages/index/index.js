// mock列表数据
const mockData = [{
  shopName:'南京大排档',
  shopLogo:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1564215117,4275586328&fm=15&gp=0.jpg',
  businessHour:'11:30 - 22:00',
  address:'龙湖长楹天街西区4层',
  position:{
    x:11.2,
    y:233.9,
  }
}, {
  shopName:'大渔铁板烧',
  shopLogo:'https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=1836967696,2807749754&fm=85&app=92&f=JPEG?w=121&h=75&s=7EC3CE1E099065EB1FC9C5DE0300903D',
  businessHour:'14:30 - 21:30',
  address:'龙湖长楹天街东区5层',
  position:{
    x:111.2,
    y:23.9,
  }
}, {
  shopName:'局气',
  shopLogo:'https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=3190474743,1963742887&fm=74&app=80&f=JPEG&size=f121,90?sec=1880279984&t=0ee307c3aae5990eb83ec50854e23068',
  businessHour:'10:30 - 21:30',
  address:'龙湖长楹天街东区3层',
  position:{
    x:81.2,
    y:213.9,
  }
},{
  shopName:'南京大排档',
  shopLogo:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1564215117,4275586328&fm=15&gp=0.jpg',
  businessHour:'11:30 - 22:00',
  address:'龙湖长楹天街西区4层',
  position:{
    x:11.2,
    y:233.9,
  }
},{
  shopName:'南京大排档',
  shopLogo:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1564215117,4275586328&fm=15&gp=0.jpg',
  businessHour:'11:30 - 22:00',
  address:'龙湖长楹天街西区4层',
  position:{
    x:11.2,
    y:233.9,
  }
}];
// mock列表总数
const mockTotal = 60;
Page({
  data: {
    show: false, // 是否显示加载动画
    page: 1, // 当前页数
    list: [] // 页面List数据
  },
  onLoad() {
    this.mySchedulde();
  },
  goToShop({target:{dataset}}){
    let shopId = dataset.shopId;
    my.navigateTo({
      url: '/pages/shop/shop?shopId=' + shopId
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
      const { page, list, } = this.data;
      // 判断是否还有数据需要加载
      console.log(list.length)
      console.log(mockTotal)
      if (list.length < mockTotal) {
        this.setData({ show: true });
        const newPage = page + 1;
        this.mySchedulde(newPage);
      }
    } catch (e) {
      this.setData({ show: false });
      console.log('scrollMytrip执行异常:', e);
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
        let data = mockData;
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
      console.log('mySchedulde执行异常:', e);
    }
  }
});