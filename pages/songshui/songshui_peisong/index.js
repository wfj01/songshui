// pages/songshui/songshui_peisong/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentStr:"",
    peisongfei:"5.00",
    totalprice:"",
    totalnumber:"",
    orderfrom: [{
        ida: "1",
        name: "送达日期",
        mydata: [{
            id: "1",
            name: "今天",
            isChecked: false
          },
          {
            id: "2",
            name: '明天',
            isChecked: false
          },
          {
            id: "3",
            name: '后天',
            isChecked: false
          }
        ],
      },
      {
        ida: "2",
        name: "送达时间",
        mydata: [{
            id: " 1",
            name: '上午',
            isChecked: false
          },
          {
            id: "2",
            name: '下午',
            isChecked: false
          }
        ],
      },
      {
        ida: "3",
        name: "打赏送水小哥",
        mydata: [{
            id: "1",
            name: "打赏3元",
            isChecked: false
          },
          {
            id: "2",
            name: "打赏5元",
            isChecked: false
          },
          {
            id: "3",
            name: "残忍拒绝",
            isChecked: false
          }
        ],
      }
    ],
    isChecked: false,
    id: 1,
    chanpin:[{
      name:'',
      price:"",
      number:"",
    }],
    addresslist: [
      {
      address: "",
      phone: "",
      name: ""
    }]
  },

  //跳转到地址页面
  dizhiClick:function(){
    wx.navigateTo({
      url: '../../wode/wode_shouhuodizhi/user_address_index/index',
    })
  },

  /**
   * 增加数量
   */
  jiafaClick: function (e) {
    var id = e.currentTarget.dataset.id;
    var that = this;
    this.data.chanpin.forEach(function (item, index) {
      var ischeckeds = `chanpin[${index}].ischecked`;
      var numbers = `chanpin[${index}].number`;
      var numbera = Number(that.data.chanpin[index].number);
      var price = Number(that.data.chanpin[index].price);
      if (id != item.id) {
        that.setData({
          [ischeckeds]: false,
          [numbers]: 0
        })
      }
      if (id == item.id) {
        if (numbera >= 0) {
          that.setData({
            totalprice:(numbera+1)*(price),
            totalnumber:that.data.totalprice+"5.00",
            [ischeckeds]: true,
            [numbers]: numbera += 1
          })
          console.log("totalprice:totalpricetotalpricetotalpricetotalprice",that.data.totalprice)
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
    this.data.chanpin.forEach(function (item, index) {
      if (id == item.id) {
        var ischeckeds = `chanpin[${index}].ischecked`;
        var numbers = `chanpin[${index}].number`;
        var numbera = Number(that.data.chanpin[index].number);
        var price = Number(that.data.chanpin[index].price);
        if (numbera > 0) {
          that.setData({
            totalprice:(numbera-1)*(price),
            totalnumber:that.data.totalprice+"5.00",
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

  beizhuclick:function(){
    wx.navigateTo({
      url: '../songshui_beizhu/index',
    })
  },
  serviceSelection: function (e) {
    var ida = e.currentTarget.dataset.ida;
    var id = e.currentTarget.dataset.id;
    var that = this;
    var aaa = [];
    that.data.orderfrom.forEach(function (item, index) {
      //循环orderfrom
      if (ida == item.ida) {
        //循环orderfrom 时候如果点击的 父元素 也就是 哪一个 mydata 
        item.mydata.forEach(function (item, index2) {
          //二次循环  找到 3个 mydata 下的每个对象
          var xuanxiang = "orderfrom[" + index + "].mydata[" + index2 + "].isChecked";
          //这个 xuanxiang 是
          //找到orderfrom 下面 的下表为循环出来的index [0,1,2] 里面的mydata 的 二次循环 下表为index2[0,1,2]里的
          ///isChecked路径 赋给 xuanxiang
          ///因为 that.setdata  的时候  变量不是直接写在data一级下的。需要 用中括号 里面写上 数组下的真实路径
          var xuanxiang_zhi = that.data.orderfrom[index].mydata[index2].isChecked;
          //这个 xuanxiang_zhi 找到  that.data.orderfrom 下表 里面].mydata 下表下的 isChecked 取反的时候用
          that.setData({
            [xuanxiang]: false
          })
        })
      }
      if (ida == item.ida) {
        item.mydata.forEach(function (item, index2) {
          var xuanxiang = "orderfrom[" + index + "].mydata[" + index2 + "].isChecked";
          var xuanxiang_zhi = that.data.orderfrom[index].mydata[index2].isChecked;
          if (id == item.id) {
            that.setData({
              [xuanxiang]: !xuanxiang_zhi
            })
          }
        })
      }
    })
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

  //显示对话框
  dianzipiao_showModal: function () {
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
      dianzipiao_showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  dianzipiao_hideModal: function () {
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
        dianzipiao_showModalStatus: false
      })
    }.bind(this), 200)
  },



  //显示对话框
  youhuiquan_showModal: function () {
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
      youhuiquan_showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  youhuiquan_hideModal: function () {
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
        youhuiquan_showModalStatus: false
      })
    }.bind(this), 200)
  },

  chongzhi(){
    wx.removeStorage({
      key:'contentStr'
    })

    wx.switchTab({
      url:"../songshui/index"
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var dizhi = wx.getStorageSync("dizhi");
    var chanpin = wx.getStorageSync("chanpin");
    var that = this;
    that.setData({
      addresslist:dizhi
    })
    that.setData({
      chanpin:chanpin
    })

    this.data.chanpin.forEach(function (item, index) {
      var ischeckeds = `chanpin[${index}].ischecked`;
      var numbers = `chanpin[${index}].number`;
      var numbera = Number(that.data.chanpin[index].number);
      var price = Number(that.data.chanpin[index].price);
          that.setData({
            totalprice:(numbera)*(price),
          })
          that.setData({
            totalnumber:Number(that.data.totalprice)+Number(that.data.peisongfei),
          })
          console.log("totalprice:totalpricetotalpricetotalpricetotalprice",that.data.totalprice+5.00)
          console.log("totalnumber:",that.data.totalnumber)
      }
    )
    console.log("that.data.mydata:", that.data.addresslist);
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
    const pages = getCurrentPages()
    const currPage = pages[pages.length - 1]  // 当前页
    console.log(currPage.data)  // data中会含有testdata
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