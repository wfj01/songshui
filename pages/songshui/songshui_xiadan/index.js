// pages/songshui/songshui_xiadan/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mydata: [{
        id: 1,
        img: "../../../image/banner2.png",
        name: '大桶水',
        price: '1.00',
        number: '0',
        ischecked: false,
      },
      {
        id: 6,
        img: "../../../image/banner2.png",
        name: '哇哈哈大桶水',
        price: '1.00',
        number: '0',
        ischecked: false,
      },
      {
        id: 3,
        img: "../../../image/banner2.png",
        name: '哇哈哈大桶水',
        price: '1.00',
        number: '0',
        ischecked: false,
      }
    ],
  },

  UnSelected: function (e) {
    var id = e.currentTarget.dataset.id;
    var that = this;
    this.data.mydata.forEach(function (item, index) {
      var ischeckeds = `mydata[${index}].ischecked`;
      var numbers = `mydata[${index}].number`;
      var numbera = Number(that.data.mydata[index].number);
     
      if (id != item.id) {
        that.setData({
          [ischeckeds]: false,
          [numbers]: 0
        })
      }
      if (id == item.id) {
        if(numbera>=1){
        that.setData({
          [ischeckeds]: false,
          [numbers]: 0
        })
      }else{
        that.setData({
          [ischeckeds]: true,
          [numbers]: 1 
        })
      }
      }
    })
  },

  /**
   * 增加数量
   */
  jiafaClick: function (e) {
    var id = e.currentTarget.dataset.id;
    var that = this;
    this.data.mydata.forEach(function (item, index) {

      var ischeckeds = `mydata[${index}].ischecked`;
      var numbers = `mydata[${index}].number`;
      var numbera = Number(that.data.mydata[index].number);
      if (id != item.id) {
        that.setData({
          [ischeckeds]: false,
          [numbers]: 0
        })
      }
      if (id == item.id) {
        if (numbera >= 0) {
          that.setData({
            [ischeckeds]: true,
            [numbers]: numbera += 1
          })
        }
      }
    })
  },

  /**
   * 减少数量
   */
  jianfaClick: function (e) {
    var id = e.currentTarget.dataset.id;
    var that = this;
    this.data.mydata.forEach(function (item, index) {
      if (id == item.id) {
        var ischeckeds = `mydata[${index}].ischecked`;
        var numbers = `mydata[${index}].number`;
        var numbera = Number(that.data.mydata[index].number);
        if (numbera > 0) {
          that.setData({
            [numbers]: numbera -= 1
          })
        }
        if (numbera == 0) {
          that.setData({
            [ischeckeds]: false
          })
        }
      }
    })
  },
  ascertainClick: function () {
    var aaa = [];
    var that = this;
    this.data.mydata.forEach(function (item, index) {
      if (item.ischecked == true) {
        var bbb = {};
        bbb.id = item.id;
        bbb.name = item.name;
        bbb.price = item.price;
        bbb.number = item.number;
        bbb.ischecked = item.ischecked;
        aaa.push(bbb)
      }
      wx.setStorageSync('chanpin', aaa);
      wx.navigateBack({
        delta: 1
      })
    });
  },

  cancelClick() {
    wx.reLaunch({
      url: '../songshui/index',
    })
  },

  loaddata:function(){
    if (wx.getStorageSync("ccc")) {
      var ddd = wx.getStorageSync("ccc");
      console.log(ddd)
      var that = this;
      that.data.mydata.forEach(function (item, index) {
        var ischeckeds = `mydata[${index}].ischecked`;
        var numbers = `mydata[${index}].number`;
        var itemid = item.id;
        var ddd_shuju =ddd[0];
        if(ddd_shuju!=undefined){
          if (itemid == ddd_shuju.id) { 
            that.setData({
              [numbers]: ddd_shuju.number,
              [ischeckeds]:ddd_shuju.ischecked
            })
          }
        }
      }); 
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.loaddata()
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