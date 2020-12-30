App({
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  globalData: {
    hasLogin: false,
    baseUrl: 'http://localhost:8099/shopping-b'
    // baseUrl: 'http://123.57.80.168:8099/shopping-b'
  }
})
