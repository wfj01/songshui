// pages/user_address_edit/index.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        address_id:'',
        postData:{}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this;
        that.setData({
            address_id: options.address_id
        })
        that.loadData()
    },
    openAddressSelect(){
        var that = this;
        wx.chooseLocation({
            success(res){
                if(res.latitude){
                    var postData = that.data.postData;
                    var lat = 'postData.lat';
                    var lng = 'postData.lng';
                    var address = 'postData.address';
                    var addressName = 'postData.address_name';
                    that.setData({
                        [lat]:res.latitude,
                        [lng]:res.longitude,
                        [address]:res.address,
                        [addressName]:res.name
                    })
                    that.getAddress()
                }
            }
        });
        // wx.navigateTo({
        //     url: '/pages/user_address_map/index'
        // })
    },
    getAddress(){
        var that = this;
        var latlng = that.data.postData.lat+','+that.data.postData.lng;
        wx.request({
            url: 'https://apis.map.qq.com/ws/geocoder/v1/?location='+latlng+'&key=N6RBZ-XQF6P-GCPDF-V3ZBJ-JOE3T-TEBT2',
            method: 'GET',
            success(res) {
                console.log(res.data.result)
                if(res.data.result){
                    var postData = that.data.postData;
                    var province = 'postData.province';
                    var city = 'postData.city';
                    var county = 'postData.county';
                    that.setData({
                        [province]:res.data.result.address_component.province,
                        [city]:res.data.result.address_component.city,
                        [county]:res.data.result.address_component.district
                    })
                }
            },
            fail(err){
                wx.hideLoading()
            }
        })
    },
    loadData(){
        let that = this
        wx.showLoading()
        var token = wx.getStorageSync('USER_TOKEN');
        wx.request({
            url: app.globalData.baseUrl + '/recycle/ApiUser/addressInfo',
            data: {
                token:token,
                address_id: that.data.address_id
            },
            method: 'POST',
            success(res) {
                wx.hideLoading()
                if (res && res.data.code == 1000) {
                    that.setData({
                        postData: res.data.data
                    })
                }
            },
            fail(err){
                wx.hideLoading()
            }
        })
    },
    bindPickerChange: function(e) {
        var postData = this.data.postData;
        var province = 'postData.province';
        var city = 'postData.city';
        var county = 'postData.county';
        this.setData({
            [province]:e.detail.value[0],
            [city]:e.detail.value[1],
            [county]:e.detail.value[2],
        })
        this.getLatLng()
    },
    bindInput(e){
        var field = e.currentTarget.dataset.field;
        var postData = this.data.postData;
        var name = 'postData.'+field
        this.setData({
            [name]:e.detail.value
        })
        if(field == 'address'){
            this.getLatLng()
        }
    },
    defaultChange(e){
        var that = this;
        var postData = that.data.postData;
        var name = 'postData.default';
        if(postData.default == 1){
            that.setData({
                [name]:-1,
            })
        }else{
            that.setData({
                [name]:1,
            })
        }
    },
    getLatLng(){
        var that = this;
        var _address = that.data.postData.province+that.data.postData.city+that.data.postData.county+that.data.postData.address;
        wx.request({
            url: 'https://apis.map.qq.com/ws/geocoder/v1/?address='+_address+'&key=N6RBZ-XQF6P-GCPDF-V3ZBJ-JOE3T-TEBT2',
            method: 'GET',
            success(res) {
                if(res.data.result && res.data.result.location){
                    var postData = that.data.postData;
                        var _lat = 'postData.lat';
                        var _lng = 'postData.lng';
                        that.setData({
                            [_lat]:res.data.result.location.lat,
                            [_lng]:res.data.result.location.lng
                        })
                }

            },
            fail(err){
                wx.hideLoading()
            }
        })
    },
    doSave(){
        var that = this;
        wx.showLoading()
        var postData = that.data.postData;
        postData['token'] = wx.getStorageSync('USER_TOKEN');
        wx.request({
            url: app.globalData.baseUrl + '/recycle/ApiUser/addressEdit',
            data: that.data.postData,
            method: 'POST',
            success(res) {
                wx.hideLoading()
                if (res.data.code == 1000) {
                    wx.showToast({
                        title: res.data.msg,
                        icon: 'success',
                        duration: 2000
                    })
                    setTimeout(() => {
                        wx.navigateBack({
                            delta: 1
                        })
                    }, 1000);
                }else{
                    wx.showToast({
                        title: res.data.msg,
                        icon: 'none',
                        duration: 2000
                    })
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