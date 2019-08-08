$(document).ready(function() {
  // casearry = [
  //   {
  //     index: 1
  //   },
  //   {
  //     index: 2
  //   },
  //   {
  //     index: 3
  //   }
  // ]
  // var successDiv = $('.topthree')
  // console.log(casearry)
  // $('#ThreeDiv')
  //   .tmpl(casearry)
  //   .appendTo(successDiv)

  var clickLook = $('.click-dateil') //点击出现详情
  var line = $('.topother-div-right-line') //线条
  var fourDiv = $('.topother-div-right') //变换的div
  var bigdiv = $('.topother-div') //最外面de div  index
  //
  // 追加浮动
  fourDiv.addClass('floatstyle')
  line.show()
  clickLook.show()
  //
  // 循环遍历每一行
  for (var i = 0; i < bigdiv.length; i++) {
    var bigdivIndex = bigdiv.eq(i)
    console.log(bigdivIndex)
    var pHeight = bigdivIndex.find('.rightcont p').height()
    console.log(pHeight)
    if (pHeight <= 135) {
      bigdivIndex.find(clickLook).hide()
    }
    if (pHeight > 135) {
      // 点击展开
      bigdivIndex.find('.click-dateil').click(function() {
        $(this)
          .parents(fourDiv)
          .removeClass('floatstyle')
        $(this)
          .parent('.topother-div-right-top')
          .next(line)
          .hide()
          .next('.clickhide')
          .show()
        // 内容高度的改变
        $(this)
          .prev()
          .addClass('autostyle')
        $(this).hide()
      })

      // 点击收起收起
      bigdivIndex.find('.clickhide').click(function() {
        console.log('487987')
        $(this)
          .parent(fourDiv)
          .addClass('floatstyle')
          .find(line)
          .show()
          .prev()
          .find('.rightcont')
          .removeClass('autostyle')
          .next(clickLook)
          .show()
        $(this).hide()
      })
    }
  }
  //

  // 前三个滑动条
  var topThree = $('.topthree-div')
  var pDivCont = $('.pcontent')
  var pStyle = $('.contentdiv')
  for (var i = 0; i < topThree.length; i++) {
    var threeIndex = topThree.eq(i)
    // 获取文本的高度
    var pHeight = threeIndex.find(pStyle).height()
    // p外面的div高度
    var pDivHeight = threeIndex.find(pDivCont).height()
    //
    threeIndex.find(pDivCont).addClass('srollhidden')
    if (pHeight <= pDivHeight) {
      threeIndex.find('#lookDateils').hide()
    } else {
      threeIndex.find('#lookDateils').show()
      threeIndex.find('#lookDateils').click(function() {
        $(this)
          .prev()
          .find(pDivCont)
          .removeClass('srollhidden')
          .addClass('srollshow')
      })
    }
  }
  //
})
