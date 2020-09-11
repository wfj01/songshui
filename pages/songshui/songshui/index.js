// pages/songshui/songshui/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    waterquantity: 1,
    dizhi: "",
    chanpin: "",
    dizhi:"",
  },



  lijipeisongClick() {
    var that = this;
    if (that.data.dizhi == "" && that.data.chanpin == "") {
      wx.navigateTo({
        url: '../../wode/wode_shouhuodizhi/user_address_index/index',
      })
      console.log("两个都为空")
    } else if (that.data.dizhi != "" && that.data.chanpin == "") {
      wx.navigateTo({
        url: '../songshui_xiadan/index',
      })
      console.log("产品为空")
    } else {
      wx.navigateTo({
        url: '../songshui_peisong/index',
      })
      console.log("都不为空")
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (wx.getStorageSync("ccc")) {
      var ddd = wx.getStorageSync("ccc");
      console.log("ddd::::::::", ddd);
      var that = this;
      var chanpintext = "";
      ddd.forEach(function (item, index) {
          chanpintext += `${ddd[index].name}*${ddd[index].number}桶,`
      });
      console.log("chanpintext:", chanpintext)
      if (ddd.length == 0) {
        that.setData({
          chanpin: ""
        })
      } else {
        that.setData({
          chanpin: chanpintext
        })
      }
    }
    if (wx.getStorageSync("dizhi")) {
      var dizhi = wx.getStorageSync("dizhi");
      console.log("eee::::::::", dizhi);
      var that = this;
      var dizhitext = "";
      dizhi.forEach(function (item, index) {
        dizhitext = `${dizhi[index].name},${dizhi[index].address}`
      });
      console.log("dizhitext:", dizhitext)
      if (dizhi.length == 0) {
        that.setData({
          dizhi: ""
        })
      } else {
        that.setData({
          dizhi: dizhitext
        })
      }
    }
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
    console.log("我是onShow")
    if (wx.getStorageSync("chanpin")) {
      var ddd = wx.getStorageSync("chanpin");
      console.log("ddd::::::::", ddd);
      var that = this;
      var chanpintext = "";
      ddd.forEach(function (item, index) {
        chanpintext += `${ddd[index].name}*${ddd[index].number}桶`
      });
      console.log("chanpintext:", chanpintext)
      if (ddd.length == 0) {
        that.setData({
          chanpin: ""
        })
      } else {
        that.setData({
          chanpin: chanpintext
        })
      }
    }
    if (wx.getStorageSync("dizhi")) {
      var dizhi = wx.getStorageSync("dizhi");
      console.log("eee::::::::", dizhi);
      var that = this;
      var dizhitext = "";
      dizhi.forEach(function (item, index) {
        dizhitext = `${dizhi[index].name},${dizhi[index].address}`
      });
      console.log("dizhitext:", dizhitext)
      if (dizhi.length == 0) {
        that.setData({
          dizhi: ""
        })
      } else {
        that.setData({
          dizhi: dizhitext
        })
      }
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

  },

  /**
   * 跳转到电子票界面
   */
  tapOneDialogButton() {
    wx.navigateTo({
      url: '../../wode/wode_dianzipiao/index',
    })
  },

  /**
   * 跳转到地址界面
   */
  openaddress() {
    wx.navigateTo({
      url: '../../wode/wode_shouhuodizhi/user_address_index/index',
    })
  },

  /**
   * 跳转到产品界面
   */
  xuanzechanpin: function () {
    wx.navigateTo({
      url: '../../songshui/songshui_xiadan/index',
    })
  },

  /**
   * 跳转到购票界面
   */
  goupiaoClick() {
    wx.switchTab({
      url: '../../goupiao/goupiao/index',
    })
  },
})