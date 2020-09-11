
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    shoppingdata:[
    {
        id:'1',
        Orderno:'1212121215154151515112121',
        Orderstatus:'已取消',
        imagesrc:'../../../image/goupiao01.png',
        chanpinname:'贵族之泉',
        chanpinleixing:'共10桶',
        creationtime:'2020-05-06 13:40:10',
        totalprice:'150.00',
    },
    {
        id:'2',
        Orderno:'1561541651516316454545445',
        Orderstatus:'已完成',
        imagesrc:'../../../image/goupiao01.png',
        chanpinname:'贵族之泉',
        chanpinleixing:'共20桶',
        creationtime:'2020-05-06 13:40:10',
        totalprice:'300.00',
    }
    ],
    rechargedata:[
      {
        id:'1',
        Orderno:'4454845484545215484545454',
        Orderstatus:'已取消',
        imagesrc:'../../../image/goupiao02.png',
        chanpinname:'贵族之泉',
        chanpinleixing:'非常好非常好非常好非常好',
        creationtime:'2020-05-06 13:40:10',
        totalprice:'150.00',
      },
      {
        id:'2',
        Orderno:'1544841548452454545454545',
        Orderstatus:'已完成',
        imagesrc:'../../../image/dingdan02.png',
        chanpinname:'大桶水',
        chanpinshuoming:'一般一般一般一般一般一般',
        creationtime:'2020-05-04 13:40:10',
        totalprice:'200.00',
      }
    ]
    
  },
  
  //swiper切换时会调用
  pagechange: function (e) {   
    if ("touch" === e.detail.source) {
      let currentPageIndex = this.data.currentIndex
      currentPageIndex = (currentPageIndex + 1) % 2
      this.setData({
        currentIndex: currentPageIndex
      })
    } 
  }, 
  //用户点击tab时调用
  titleClick: function (e) { 
    let currentPageIndex =
      this.setData({
        //拿到当前索引并动态改变
        currentIndex: e.currentTarget.dataset.idx
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