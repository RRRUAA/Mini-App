// pages/category/category.js
Page({
  balance:function() {
    var app=getApp()
    wx.showModal({
      title: '余额',
      content: '您的余额剩余'+app.getdata().time+'小时',
      showCancel:false,
      complete: (res) => {
        if (res.cancel) {
          
        }
    
        if (res.confirm) {
          
        }
      }
    })
  },
  logout:function(){
    wx.redirectTo({
      url: '/pages/login/login',
    })
  }
})