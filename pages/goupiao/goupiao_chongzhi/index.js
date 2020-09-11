// pages/goupiao/goupiao_chongzhi/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:"",
    name:'',
    cname:"",
    totalPrice:'',
    totalnumber:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var list = JSON.parse(options.model);
    console.log('名字'+list[0].id);
    console.log('名字'+list[0].name);
    console.log('名字'+list[0].chanpinname);
    console.log("111:",list[0].price);
    var that = this;
    that.setData({
      id : list[0].id,
      name:list[0].name,
      totalnumber:list[0].totalnumber,
      chanpinname : list[0].chanpinname,
      totalPrice:list[0].totalPrice,
    })
    console.log( that.data.name)
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