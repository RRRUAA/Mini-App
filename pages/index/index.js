// index.js
Page({
  data:{
    item:{},
    hidepopup:true
  },
  LoadSeat:function showloading() {
    wx.showLoading({
      title: '加载座位信息',
    })
    setTimeout(function () {
       wx.navigateTo({
      url: '/pages/reserve/reserve',
    })
      wx.hideLoading()
    },1500)
   
  },
  LeaveSeat:function showloading() {
    wx.showLoading({
      title: '释放座位资源',
    })
    setTimeout(function () {
      wx.showToast({
        title: '释放成功',
        duration:1000,
        icon:'success',
        mask:true
      })
     wx.hideLoading()
   },1500)
  },
  onshowpopup:function() {
    this.setData({
      hidepopup:false
    })
  }
})
