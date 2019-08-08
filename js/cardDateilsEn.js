$(document).ready(function () {
  var listdiv = $('.companymain-rigth-bottom-list')
  listdiv
    .eq(2)
    .find('.glod')
    .hide()
    .next()
    .show()
  console.log('123')
  listdiv.on('click', function () {
    $(this)
      .find('.glod')
      .hide()
      .next()
      .show()
      .next()
      .addClass('yellowfont')
    $(this)
      .siblings()
      .find('.glod')
      .show()
      .next()
      .hide()
      .next()
      .removeClass('yellowfont')
  })

  var btn = $('#imgBtn')
  btn.hover(function () {
    $('.sincerity').slideToggle()
  })

})
