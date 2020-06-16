Component({
  mixins: [],
  data: {
    posterUrl: '',
    isSaving: false,
  },
  props: {
    showSharePoster: false,
    coverUrl: '',
    timeStamp: ''
  },
  didMount() {
    this.$page.poster = this;
    this.ctx = my.createCanvasContext('canvas');

    console.log('zhanshi')
  },

  didUpdate() {
    console.log(this.props.timeStamp)
    this.draw()
  },
  didUnmount() {

  },
  methods: {
    close() {
      console.log(this.props)
      // this.$page 为组件所在页面实例 调用夫页面方法 根本不用props传参！！！
      this.$page.closeSharePoster()
    },
    save() {
      this.setData({ isSaving: true })
      this.$page.downloadPoster(this.data.posterUrl)
      setTimeout(() => {
        this.setData({ isSaving: false })

      }, 2000)

      
    },
    // 556 650
    draw() {
      console.log(this.props.coverUrl)
      const { ctx } = this;
      ctx.setFillStyle('#FF943D');
      ctx.fillRect(0, 0, 1112, 1100);
      ctx.setFillStyle('#FFF');

      ctx.fillRect(102, 322, 906, 700);
      ctx.fillRect(0, 1100, 1112, 200);
      ctx.drawImage(this.props.coverUrl, 126, 346, 860, 488)
      ctx.setFillStyle('#000');
      ctx.setFontSize(48)
      ctx.fillText('佳佳乐早教幼儿六一练习表演诗歌嘉年华', 126, 880);
      ctx.setFillStyle('#818A92');
      ctx.setFontSize(52)
      ctx.fillText('支付宝扫一扫', 126, 1190);
      ctx.fillText('免费报名参加', 126, 1240);
      ctx.draw();

      ctx.toDataURL(0, 0, 610, 610).then(res => { this.setData({ posterUrl: res }) })

    },
  }
});
