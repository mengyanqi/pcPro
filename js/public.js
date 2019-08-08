$(document).ready(function () {
  var navbg = $('.nav-ul li')
  var cardList = $('.cardmain-list')
  cardList.mouseenter(function () {
    $(this)
      .find('.cardmain-more')
      .show()
  })
  cardList.mouseleave(function () {
    $(this)
      .find('.cardmain-more')
      .hide()
  })
  // 成功案例的小件托
  var listRight =
    "<div class='hoverimg'><img src='imgs/list_right.png' alt=''></div>"
  $('.card').hover(
    function () {
      $(this)
        .find('.cardyellowtitle')
        .after(listRight)
    },
    function () {
      $(this)
        .find('.hoverimg')
        .remove()
    }
  )
})
