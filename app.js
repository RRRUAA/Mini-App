// app.js
let data= {
  judge: 'false',
  time:0
}
let userInfo=[{
  account:"admin",
  password:"123"
}]
App({
  getdata(){
    return data
  },
  updatedata(time){
    data.time+=time;
  },

  //开始将judge置为false
  startjudge(){
    data.judge='false';
  },

  //将jugdge置为true
  makejudge(){
    data.judge='true';
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    wx.setStorageSync('selectedItem',null)
    wx.setStorageSync('user',null)
    wx.setStorageSync('loginuser',null)
    wx.setStorageSync('user',userInfo)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})

