// pages/movie/movie.js

var utils = require("../../utils/utils.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
        // 最终的数据如下
        // top250: {
        //     movies: [{}, {}, {}],
        //     category: "排行榜"
        // },
        // coming_soon: {
        //     movies: [{}, {}, {}],
        //     category: "即将上映"
        // },
        // in_theaters: {
        //     movies: [{}, {}, {}],
        //     category: "正在热映"
        // }
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      utils.http("http://localhost:8888/v2/movie/top250?count=3", this.callback, "top250", "排行榜");
      utils.http("http://localhost:8888/v2/movie/coming_soon?count=3", this.callback, "coming_soon", "即将上映");
      utils.http("http://localhost:8888/v2/movie/in_theaters?count=3", this.callback, "in_theaters", "正在热映");
  },

  callback: function (data, type, category){

      /**
     * 数据过滤
     *  1.大图
     *  2.标题
     *  3.星星
     *  4.评分
     *  5.id
     */
    var movies = [];
    for(var i = 0; i < data.subjects.length; i++){
        var temp = {
            title: data.subjects[i].title,
            large: data.subjects[i].images.large,
            star: utils.star(data.subjects[i].rating.stars),
            average: data.subjects[i].rating.average,
            id: data.subjects[i].id
        }
        movies.push(temp);
    }

    // console.log(movies); // [{},{},{}]
    var moviedata = {};
    moviedata[type] = {
        movies: movies,
        category: category
    }

    console.log(moviedata);
    this.setData(moviedata);
    console.log(this.data);
    

    /**
     *  moviedata:
     * 
     *  {
     *      top250: {
     *         movies: [{}, {}, {}],
     *         category: "排行榜"
     *      },
     *      coming_soon: {
     *          movies: [{}, {}, {}],
     *          category: "即将上映"
     *      },
     *      in_theaters: {
     *          movies: [{}, {}, {}],
     *          category: "正在热映"
     *      }
     *  }
     */

    
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