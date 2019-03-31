// pages/news/news-detail/news-detail.js

// 引入data.js
var data = require("../../../data/data.js");



Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentNews: {},
    collected: false,
    newsid: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //   console.log(options.id);
    // console.log(data[options.id]);
    this.setData({
        currentNews: data[options.id],
        newsid: options.id // 方便点击收藏按钮时调用
    })


    /**
     *  存储格式: 
     *  {
     *      0: true,
     *      1: false,
     *      2: true
     *  }
     * 
     */

    // 在onload方法中检测收藏状态
    // 取出storage
    var collections = wx.getStorageSync('collections');
    // console.log(collections);

    // 判断是否能取到数据
    if (collections){
        // 代表能取出值,已经存过了
        this.setData({
            collected: collections[options.id]
        });

    }else{
        // 取不出内容,说明没有存过,就是都没有收藏,直接把当前这条数据的值(false)存起来
        /**
         *  collections: {}
         *  假如进入的是第0条新闻详情,把0存起来
         *  collections: { 0: false}
         */
        var collections = {};
        collections[options.id] = false;
        wx.setStorageSync('collections', collections);
    }

  },
  
  // 点击收藏按钮
  collectHandler: function (event) {
      // 取出storage
      var collections = wx.getStorageSync('collections');

      // 取出本条数据
      var collection = collections[this.data.newsid];
      // 取反
      collection = !collection;
      // 赋值回去
      collections[this.data.newsid] = collection;
      // 存起来
      wx.setStorageSync('collections', collections);

      // 更新数据
      this.setData({
          collected: collection
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