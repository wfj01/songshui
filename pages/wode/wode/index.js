// pages/wode/wode/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 跳转到领券页面
   */
  lingquanOnClick(){
    wx.navigateTo({
      url: '../wode_lingquan/index',
    })
  },

  /**
   * 跳转到设置
   */
  shezhiClick() {
    wx.navigateTo({
      url: '../wode_shezhi/index',
    })
  },

  /**
   * 跳转到推广员
   */
  opentuiguangyuan(){
    wx.navigateTo({
      url:'../wode_tuiguanyuan/index',
    })
  },

  /**
   * 跳转到地址管理
   */
  openAddress(){
    wx.navigateTo({
      url: '../wode_shouhuodizhi/user_address_index/index',
    })
  },

  /**
   * 跳转到欠桶页面
   */
  qiantongClick(){
    wx.navigateTo({
      url: '../wode_qiantong/index',
    })
  },

  /**
   * 跳转到押桶页面
   */
  yatongClick(){
    wx.navigateTo({
      url: '../wode_yatong/index',
    })
  },

  /**
   * 优惠券
   */
  youhuiquanClick(){
    wx.navigateTo({
      url: '../wode_youhuiquan/index',
    })
  },

  /**
   * 电子票列表
   */
  dianzipiaoClick(){
    wx.navigateTo({
      url: '../wode_dianzipiao/index',
    })
  },
  
  openlianxi() {
    wx.showModal({
      title: '提示',
      content: '欢迎拨打客服热线110',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定');
          wx.makePhoneCall({
            phoneNumber: '110' //仅为示例，并非真实的电话号码
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
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