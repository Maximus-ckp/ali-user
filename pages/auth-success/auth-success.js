Page({
  data: {
    url:'sadf'
  },
  onLoad() {
    
  },
  copy(){
    my.setClipboard({
      text: this.data.url,
      success:res=>{
        my.alert({title:'复制成功！'})
      }
    });
  }
});
