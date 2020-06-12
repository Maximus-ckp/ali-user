// 获取全局 app 实例
const app = getApp();
console.log(app);

Page({
  data: {
    promotionPrice:'19',
    oriPrice:'59',
    className:'优质早教课程实地体验不限定日期体验',
    validDays:'30天',
    bannerList:[
      {imgUrl:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1564215117,4275586328&fm=15&gp=0.jpg"},
      {imgUrl:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1564215117,4275586328&fm=15&gp=0.jpg"},
      {imgUrl:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1564215117,4275586328&fm=15&gp=0.jpg"},
    ],
    classTags:['0-6岁','4节课','1-6人'],
  },
  onLoad(query) {
    console.log(query);
    this.initData();
  },

  async initData() {
    try {
      setTimeout(() => {
        // 获取用户信息并存储数据
        app.getUserInfo().then(
          user => {
            this.setData({
              user
            });
            console.log(user);
          },
          () => {
            // 获取用户信息失败
          }
        );
      }, 1000);
    } catch (e) {
      console.log("执行异常:", e);
    }
  }
});
