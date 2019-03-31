// pages/news/news.js

// 引入data.js
var data = require("../../data/data.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
      swiperOptions: {
          indicatorDots: true,
          indicatorActiveColor: "#109D59",
          autoplay: true,
          interval: 2000,
          circular: true,
          imgUrls: [
              "../../image/banner1.jpg",
              "../../image/banner2.jpg",
              "../../image/banner3.jpg"
          ]
      },
      news: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // 在页面加载的函数内部,把数据存到data.news中
      // console.log(data);
      this.setData({
          news: data
      });
  },
  
  // 点击新闻跳转事件
  // 自定义属性newsid可以在event事件对象中获取,然后在跳转页面时传参
  detailHandler: function (event){
    //   console.log(event);
      var currentid = event.currentTarget.dataset.newsid;
    //   console.log(currentid);
      wx.navigateTo({
          url: './news-detail/news-detail?id=' + currentid,
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