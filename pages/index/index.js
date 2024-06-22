// index.js
Page({
  data:{
    item:{},
    hidepopup:true,
  },
  
  wait:function () {
    wx.showToast({
      
      image:'/img/敬请期待 (1).png',
    })
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
   wx.setStorageSync('judge', true)
   wx.setStorageSync('seat', '')
  },
  LeaveSeat:function showloading() {
    wx.showLoading({
      title: '释放座位资源',
    })
    setTimeout(function () {
     wx.hideLoading()
     wx.showToast({
        title: '释放成功',
        duration:1500,
        icon:'success',
      })
   },1500)
  },
  onshowpopup:function() {
    this.setData({
      hidepopup:false
    })
  }
})
