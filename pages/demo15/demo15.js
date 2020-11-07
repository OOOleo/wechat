Page({

  /**
   * 页面的初始数据
   */
  data: {
    gender:""
  },
  handleChange(e){
    //获取单选框的值
    let gender=e.detail.value;
    //把值 赋给data中的数据
    this.setData({
      gender
    })
  }
})