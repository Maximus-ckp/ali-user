// mock列表数据
const mockData = [{
  title: '列表1',
  remarksa: '备注1',
  remarksb: '备注2',
  shopName:'南京大排档',
  shopLogo:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1564215117,4275586328&fm=15&gp=0.jpg',
  businessHour:'11:30 - 22:00',
  address:'龙湖长楹天街西区4层',
  position:{
    x:11.2,
    y:233.9,
  }
}, {
  title: '列表2',
  remarksa: '备注1',
  remarksb: '备注2',
  shopName:'大渔铁板烧',
  shopLogo:'https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=1836967696,2807749754&fm=85&app=92&f=JPEG?w=121&h=75&s=7EC3CE1E099065EB1FC9C5DE0300903D',
  businessHour:'14:30 - 21:30',
  address:'龙湖长楹天街东区5层',
  position:{
    x:111.2,
    y:23.9,
  }
}, {
  title: '列表3',
  remarksa: '备注1',
  remarksb: '备注2',
  shopName:'局气',
  shopLogo:'data:image/jpeg;base64,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',
  businessHour:'10:30 - 21:30',
  address:'龙湖长楹天街东区3层',
  position:{
    x:81.2,
    y:213.9,
  }
}, {
  title: '列表4',
  remarksa: '备注1',
  remarksb: '备注2'
}, {
  title: '列表5',
  remarksa: '备注1',
  remarksb: '备注2'
}, {
  title: '列表6',
  remarksa: '备注1',
  remarksb: '备注2'
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