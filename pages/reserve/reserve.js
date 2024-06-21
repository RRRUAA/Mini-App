// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
index:0,
placearr:['鼎新二楼','鼎新三楼','鼎新四楼','鼎新五楼'],
index1:0,
ztarr:['全部','可预约','已预约'],
array:[1,2,3,4]
  },

  bandpickerchangeplace:function(e) {
    console.log(e.detail.value)
    this.setData({
      index:e.detail.value
    })
  },

  bandpickerchangezt:function(e) {
    console.log(e.detail.value)
    this.setData({
      index1:e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})