// pages/user_address_amp/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        lat:'',
        lng:'',
        province:'',
        city:'',
        county:'',
        address:'',
        address_detail:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    getLocation(){
        var that = this;
        wx.getLocation({
            type: 'wgs84',
            success (res) {
                that.setData({
                    lat:res.latitude,
                    lng:res.longitude
                })
                that.getCity()
            }
        })
    },
    getCity(){
        var that = this;
        var latlng = that.data.lat+','+that.data.lng;
        wx.request({
            url: 'https://apis.map.qq.com/ws/geocoder/v1/?location='+latlng+'&key=N6RBZ-XQF6P-GCPDF-V3ZBJ-JOE3T-TEBT2',
            method: 'GET',
            success(res) {
                if(res.data.result){
                    that.setData({
                        province:res.data.result.address_component.province,
                        city:res.data.result.address_component.city,
                        county:res.data.result.address_component.district,
                        address:res.data.result.address_reference?res.data.result.address_reference.crossroad.title:''
                    })
                    that.getAddressList()
                }
            },
            fail(err){
                wx.hideLoading()
            }
        })
    },
    getAddressList(){
        var that = this;
        console.log(that.data.city)
        wx.request({
            url: 'https://apis.map.qq.com/ws/place/v1/search&keyword=小区&boundary='+region(that.data.city,0)+'&page_index=1&page_size=50&key=N6RBZ-XQF6P-GCPDF-V3ZBJ-JOE3T-TEBT2',
            method: 'GET',
            success(res) {
                console.log(res)
                if(res.data.result){
                    
                }
            },
            fail(err){
                wx.hideLoading()
            }
        })
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
        this.getLocation()
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