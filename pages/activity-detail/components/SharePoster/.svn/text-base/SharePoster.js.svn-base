Component({
  mixins: [],
  data: {
    posterUrl: "",
    isSaving: false,
    btnTxt: ""
  },
  props: {
    showSharePoster: false,
    timeStamp: "",
    shopName: "娱乐贝贝（朝阳门店）",
    coverUrl: "",
    activityName: "佳佳乐早教幼儿六一练习表演诗歌嘉年华",
    activityTime: "2020.4.18  15:00 -18:00",
    activityAddress: "海淀区西直门凯德茂MALL大厦B一层大厅",
    activityQR: "/assets/QR.png"
  },
  didMount() {
    console.log("didMount" + Date.now());
    this.$page.poster = this;
    this.ctx = my.createCanvasContext("canvas");
  },
  didUpdate() {
    // console.log(this.props.timeStamp)
    console.log("didUpdate" + Date.now());
    // this.draw()
  },
  didUnmount() {},
  methods: {
    close() {
      console.log(this.props);
      // this.$page 为组件所在页面实例 调用夫页面方法 根本不用props传参！！！
      this.$page.closeSharePoster();
    },
    save() {
      this.setData({ isSaving: true, btnTxt: "保存中" });
      console.log("saving");
      this.$page.downloadPoster(this.data.posterUrl);
      setTimeout(() => {
        this.setData({ isSaving: false, btnTxt: "下载海报到相册" });
      }, 2000);
    },
    // 556 650
    draw() {
      console.log(this.props.coverUrl);
      const { ctx } = this;
      // 橘黄背景
      ctx.setFillStyle("#FF943D");
      ctx.fillRect(0, 0, 1112, 1100);
      // 图片白框 底部扫码白框
      ctx.setFillStyle("#FFF");
      ctx.fillRect(102, 272, 906, 740);
      ctx.fillRect(0, 1100, 1112, 200);
      // 店铺名称
      ctx.setFillStyle("#202224");
      ctx.setFontSize(48);
      ctx.fillText(this.props.shopName, 122, 150);
      ctx.setFontSize(40);
      ctx.setFillStyle("#343434");
      ctx.fillText("发起了一个有趣的活动推荐给您！", 122, 210);
      // 海报图片
      // let posterImg = new Image();
      // posterImg.src = this.props.coverUrl;
      // posterImg.onload = () => {
      // console.log(posterImg.src)
      ctx.drawImage(this.props.coverUrl, 126, 296, 860, 488);
      // };
      // ctx.drawImage(posterImg, 126, 296, 860, 488);

      // 活动名称
      ctx.setFillStyle("#000");
      ctx.setFontSize(46);
      ctx.fillText(this.props.activityName, 126, 850);
      // 分割线
      ctx.beginPath();
      ctx.moveTo(126, 884);
      ctx.lineTo(986, 884);
      ctx.setStrokeStyle("#EBEBEB");
      ctx.stroke();
      // 小图标
      ctx.drawImage("/assets/icon-calendar.png", 126, 910, 36, 36);
      ctx.drawImage("/assets/icon-address.png", 126, 950, 36, 36);
      // 时间 地点
      ctx.setFontSize(36);
      ctx.setFillStyle("#4E5056");
      ctx.fillText(this.props.activityTime, 176, 940);
      ctx.fillText(this.props.activityAddress, 176, 980);

      // 扫码文字
      ctx.setFillStyle("#818A92");
      ctx.setFontSize(42);
      ctx.fillText("支付宝扫一扫", 126, 1190);
      ctx.fillText("免费报名参加", 126, 1250);
      // 二维码
      ctx.drawImage(this.props.activityQR, 800, 1120, 200, 170);
      ctx.draw();
      this.setData({ isSaving: true, btnTxt: "生成海报中" });
      setTimeout(() => {
        ctx
          .toDataURL({
            x: 0,
            y: 0,
            width: 1112,
            height: 1300,
            quality: 0.1,
            fillType: "png"
          })
          .then(res => {
            this.setData({
              posterUrl: res,
              isSaving: false,
              btnTxt: "下载海报到相册"
            });
          });
      }, 300);
    }
  }
});
