// pages/goupiao/goupiao_xiangqing/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chanpinname: "测试1",
    shouchu: "9999",
    unitPrice : "28",
    totalPrice:"",
    guige: [{
        id: '1',
        name: '买10送1',
        number:'10',
        totalnumber:'11',
        isChecked: true
      },
      {
        id: '2',
        name: "买20送3",
        number:'20',
        totalnumber:'23',
        isChecked: false
      },
      {
        id: "3",
        name: "买30送5",
        number:'30',
        totalnumber:'35',
        isChecked: false
      }
    ],
    guige_index:0

  },

  //点击我显示底部弹出框
  clickme: function () {
    this.showModal();
  },

  //显示对话框
  showModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },
  serviceSelection:function(e){
    var index = e.currentTarget.dataset.index;
    var that = this;
    this.setData({
          guige_index: index,
          totalPrice:(that.data.guige[index].number)*(that.data.unitPrice)
       })
    
  },
  // serviceSelection: function (e) {
  //   var id = e.currentTarget.dataset.id;
  //   var that = this;
  //   that.data.guige.forEach(function (item,index) {
  //     var isCheckeda = "guige[" + index + "].isChecked";
  //     console.log("index",index);
  //     that.setData({
  //       [isCheckeda]: false,
  //     })
  //     if (id == item.id) {
  //       that.setData({
  //         [isCheckeda]: true,
  //         totalPrice:(that.data.guige[index].number)*(that.data.unitPrice)
  //       })
  //     }
  //   })
  // },

  chongzhi: function () {
    var aaa =[];
    var bbb = {};
    var that = this;
    that.data.guige.forEach(function (item, index) {
      if (item.isChecked == true) {
        bbb.id = item.id;
        bbb.name = item.name;
        bbb.totalnumber = item.totalnumber;
        bbb.isChecked = item.isChecked;
      }
    });
    bbb.chanpinname = that.data.chanpinname;
    bbb.totalPrice = that.data.totalPrice;
    aaa.push(bbb);
    console.log("bbbbbbb:",aaa);
    var model = JSON.stringify(aaa);
    wx.navigateTo({
      url: '../goupiao_chongzhi/index?model='+model,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.serviceSelection()
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

  tanchu: function () {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
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