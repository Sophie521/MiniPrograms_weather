Page({
  data: {
    news_id: "id",
    news_title: "我是新闻标题"
  },
  onLoad() {    

    //列表页
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data: {
        type: 'gn'
      },
      success: res => {
        console.log(res)
        let result = res.data.result
        let news_list_date = result[0].date
        let news_list_image = result[0].firstImage
        let news_list_id = result[0].id
        let news_list_title = result[0].title
        console.log(news_list_date, news_list_id, news_list_image,news_list_title)
      }
    }),

    //详情页
      wx.request({
        url: 'https://test-miniprogram.com/api/news/detail',
        data: {
          id: '1523074607642'
        },
        success: res => {
          console.log(res)
          let result = res.data.result.content
          let news_detail_id = result[0].id
          let news_detail_text = result[0].text
          let news_detail_type = result[0].type
          console.log(news_detail_id, news_detail_text, news_detail_type)
        }
      })
  }
})