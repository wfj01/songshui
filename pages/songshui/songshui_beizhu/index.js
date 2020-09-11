// pages/songshui/songshui_beizhu/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 最大字符数
    maxTextLen: 200,
    // 当前文本长度
    textLen: 0,
    // 文本内容
    contentStr: "",
  },
  getWords(e) {
    let page = this;
    // 设置最大字符串长度(为-1时,则不限制)
    let maxTextLen = page.data.maxTextLen;
    // 文本长度
    let textLen = e.detail.value.length;

    page.setData({
      maxTextLen: maxTextLen,
      textLen: textLen,
      contentStr: e.detail.value
    });
  },

  //保存按钮的点击事件
  SavebtnClick() {
    // 将参数传回上一页
    const pages = getCurrentPages()
    const prevPage = pages[pages.length - 2] // 上一页
    // 调用上一个页面的setData 方法，将数据存储
    prevPage.setData({
      contentStr: (this.data.contentStr).toString()
    })
    // 返回上一页
    wx.navigateBack({
      delta: 1
    })
    const contentStr1 = this.data.contentStr;
    const textLen1 = this.data.textLen;
    console.log("this.data.textLen:", this.data.textLen);
    wx.setStorageSync('contentStr', contentStr1);
    wx.setStorageSync('textLen', textLen1);
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
    if (wx.getStorageSync("contentStr")) {
      const aaa = wx.getStorageSync("contentStr");
      this.setData({
        contentStr: aaa
      })
      const bbb = wx.getStorageSync("textLen");
      this.setData({
        textLen: bbb
      })
    }
    else{
      this.setData({
        textLen:0
      })
    }

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