const app = getApp();
import parse from 'mini-html-parser2';

Page({
  data: {
    show: false, // 是否显示加载动画
    inputValue:'', // 富文本转节点
    nodes: [
      {
        name: "div",
        attrs: {
          class: "wrapper",
          style: "color: orange;"
        },
        children: [
          {
            type: "text",
            text: "Hello&nbsp;World!"
          }
        ]
      }
    ]
  },
  onLoad(query) {
    console.log(query);
    this.initData();
  },
  bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },
  str2node(){
    console.log(this.data.inputValue)
    parse(this.data.inputValue, (err, nodes) => {
      if (!err) {
        this.setData({
          nodes,
        });
      }
    })
    console.log(this.data.nodes)
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
      console.log("mySchedulde执行异常:", e);
    }
  },
  onListClick(e) {
    let {
      target: { dataset }
    } = e;
    console.log(e);
    // console.log('target:')
    // console.log(target)
    console.log("dataset:");
    console.log(dataset);
    const { onClick } = this.data.navList[dataset.index];
    if (onClick) {
      onClick();
    }
  }
});
