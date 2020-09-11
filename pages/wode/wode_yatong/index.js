// pages/wode/wode_yatong/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yatongquantity: "1",
    yatongmoney: "100",
    pageNo: 1,
    loadStatus:1,
    pageSize: 20,
    dataList: [],
    listtext: [{
        imagesrc: '../../../image/tongzhuang1.png',
        title: '哇哈哈1',
        price: '￥255.00',
        number: '10',
      },
      {
        imagesrc: '../../../image/tongzhuang2.png',
        title: '哇哈哈',
        price: '￥255.00',
        number: '1',
      }
    ]
  },

  //加载数据
  loaddata() {
    wx.showLoading({
      title: '正在加载中',
    })
    var that = this;
    if (that.data.loadStatus != 1) {
      return;
    }
    wx.request({
      url: 'url',
      method: 'POST',
      data: {
        pageNo: this.data.pageNo,
        pageSize: this.data.pageSize,
      },
      success(res) {
        console.log(res.data);
        if (res.data.code == 1000) {
          //有数据返回
          var _dataList = that.data.dataList.concat(res.data.data);
          that.setData({
            _dataList: dataList,
          })
          //允许加载下一页
          if (res.data.data.length >= that.data.pageSize) {
            that.setData({
              pageNo: that.data.pageNo++
            })
          } else {
            that.setData({
              loadStatus: -1
            })
          }
        } else {
          if (that.data.pageNo == 1) {

          } else {
            // 没有更多了
          }
        }
      }
    })
    wx.hideLoading();
    wx.stopPullDownRefresh();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("我已经加载");
    this.loaddata();
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