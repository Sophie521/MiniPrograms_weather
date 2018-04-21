
Page({
  onLoad() {
    console.log("hello world~!"),
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data: {
        type: 'gn'
      },
      success: res => {
        console.log(res)
      }
    }),
      wx.request({
        url: 'https://test-miniprogram.com/api/news/detail',
        data: {
          id: '1523074607642'
        },
        success: res => {
          console.log(res)
        }
      })
  }
})