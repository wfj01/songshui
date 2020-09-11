// pages/user_address_index/index.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        rows: [],
        mydata: [{
                id: 1,
                name: '测试人员1',
                phone: '1111111111',
                address: '山东省潍坊市奎文区泽尔庄西苑小区102单元1楼2号',
                ischecked:false,
                hiddenName:false,
            },
            {
                id: 2, 
                name: '测试人员2',
                phone: '2222222222',
                address: "山东省潍坊市奎文区泽尔庄西苑小区202单元1楼2号",
                ischecked:false,
                hiddenName:true,
            },
            {
                id: 3,
                name: '测试人员3',
                phone: '3333333333',
                address: "山东省潍坊市奎文区泽尔庄西苑小区302单元1楼2号",
                ischecked:false,
                hiddenName:true,

            }
        ],
    },
    openAdd() {
        wx.navigateTo({
            url: '../user_address_add/index'
        })
    },

    Selected: function (e) {
        var id = e.currentTarget.dataset.id;
        var that = this;
        this.data.mydata.forEach(function (item, index) {
            var ischeckeds = `mydata[${index}].ischecked`;
            that.setData({
                [ischeckeds]:false
            })
          if (id == item.id) {
            var ischeckeds = `mydata[${index}].ischecked`;
            that.setData({
              [ischeckeds]:true
            })
          }
        })
      },
    
     
    //选择地址
    Selectaddress(e) {
        var arraydizhi = [];
        var id = e.currentTarget.dataset.id;
        var that = this;

   

        that.data.mydata.forEach(function (item, index) {
            var hiddenName ="mydata["+index+"].hiddenName";
            that.setData({
                [hiddenName]:true
            })
            if (id == item.id) {
                that.setData({
                    [hiddenName]:false
                })
                console.log('id:', item.id)
                var dizhi = {};
                dizhi.id = item.id;
                dizhi.name = item.name;
                dizhi.phone = item.phone;
                dizhi.address = item.address;
                arraydizhi.push(dizhi);
            }
            wx.setStorageSync('dizhi', arraydizhi);
            // wx.navigateBack({
            //     delta: 1
            // })
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
        var that = this;
        that.loadData()
    },
    loadData() {

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