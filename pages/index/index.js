Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 事件
   * 什么是事件
   * 事件是视图层到逻辑层的通讯方式。
   * 事件可以将用户的行为反馈到逻辑层进行处理。
   * 事件可以绑定在组件上，当达到触发事件，就会执行逻辑层中对应的事件处理函数。
   * 事件对象可以携带额外信息，如 id, dataset, touches。
   * 
   * 事件的使用方式
   * 1.在组件上绑定事件
   * 2.在相应的Page定义中写上相应的事件处理函数，参数是event。
   * 
   * 事件详解
   *     事件分类
   *     事件分为冒泡事件和非冒泡事件：
   * 
   *     冒泡事件：当一个组件上的事件被触发后，该事件会向父节点传递。
   *     非冒泡事件：当一个组件上的事件被触发后，该事件不会向父节点传递。
   * 
   * touchstart	手指触摸动作开始
   * touchmove	手指触摸后移动
   * touchcancel	手指触摸动作被打断，如来电提醒，弹窗
   * touchend	手指触摸动作结束
   * tap	手指触摸后马上离开
   * 
   * 事件绑定和冒泡
   * 事件绑定的写法同组件的属性，以 key、value 的形式。
   *
   * key 以bind或catch开头，然后跟上事件的类型，如bindtap、catchtouchstart。自基础库版本 1.5.0 起 
   * 在非原生组件中，bind和catch后可以紧跟一个冒号，其含义不变，如bind:tap、catch:touchstart。
   * value 是一个字符串，需要在对应的 Page 中定义同名的函数。不然当触发事件的时候会报错。
   * bind事件绑定不会阻止冒泡事件向上冒泡，catch事件绑定可以阻止冒泡事件向上冒泡。
   */

   /*
    wx.navigateTo(Object object)
    保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面。小程序中页面栈最多十层。
    */

  newsHandler: function (event){
    //   console.log(event);
    // wx.navigateTo({
    //     url: '../news/news'
    // })
    
    // 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
    wx.switchTab({
        url: '../news/news',
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})