$(document).ready(function() {
  $('.alertbody').hide()
  // 总的设置
  var close = $('.close')
  close.click(function() {
    $('.alertbody').hide()
  })
  //免费服务
  $('#free').click(function() {
    $('.alertbody').show()
    $('#jointel')
      .show()
      .next()
      .hide()
  })
  // vip服务
  $('#vipBtn').click(function() {
    $('.alertbody').show()
    $('#joinqr')
      .show()
      .prve()
      .hide()
  })
})
