// pages/wode/wode_tuiguanyuan/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 返回首页
   */
  backshouye(){
    wx.reLaunch({
      url: '../../songshui/songshui/index',
    })
  },

  /**
   * 客户列表模块
   */
  showModal(){
    wx.navigateTo({
      url: '../wode_wodekehu/index',
    })
  },
})