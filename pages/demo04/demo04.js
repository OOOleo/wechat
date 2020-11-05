Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0
  },
  //输入框的input的执行
  handleInput(e){
    //赋值操作 通过事件源对象获取值
    this.setData({
      num:e.detail.value
    })
  },
  //加减按钮事件
  handletap(e){
    //console.log(e)
    //获取自定义属性  operation
    //通过自定义函数属性的方式传递参数
    const operation=e.currentTarget.dataset.operation;
    this.setData({
      num:this.data.num+operation
    })
  }

})