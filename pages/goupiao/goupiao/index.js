// pages/goupiao/goupiao/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    givetext:"",
    mydata: [{
        id:"1",
        imagesrc: '../../../image/geren_banner01.png',
        name: '贵族之泉',
        discount: '买5送1,买10送2,买20送5',
        price: '10'
      },
      {
        id:"2",
        imagesrc: "../../../image/gerenzhongxin01.png",
        name: '大桶矿泉水',
        discount: '买10送2,买20送5',
        price: '100'
      }
    ]
  },

  xiangqingClick() {
    wx.navigateTo({
      url: '../goupiao_xiangqing/index',
    })
  },

  chongzhiClick() {
    wx.navigateTo({
      url: '../goupiao_chongzhi/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  onUnload: function () {},

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