$(document).ready(function() {
  var cardList = $('.cardmain-list')
  cardList.mouseenter(function() {
    $(this)
      .find('.cardmain-more')
      .show()
  })
  cardList.mouseleave(function() {
    $(this)
      .find('.cardmain-more')
      .hide()
  })

  var ad = $('.main-advert')
  var vip = $('#vipPlan .close-advert')
  ad.click(function() {
    $(this)
      .hide()
      .next()
      .show()
  })
  vip.click(function() {
    $('#vipPlan').hide()
  })
})
