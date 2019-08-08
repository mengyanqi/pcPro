$(document).ready(function () {
  var hidediv = $('#hideCer')
  var showbtn = $('#showCer')
  var showfont = $('.show-certificate')
  hidediv.hide()
  showfont.css('width', '150px')
  showbtn.toggle(
    function () {
      hidediv.slideDown()
      $(this)
        .find('p')
        .text('收起证书')
      showfont.css('width', '80px')
    },
    function () {
      hidediv.slideUp()
      $(this)
        .find('p')
        .text('展开添加其他证书')
      showfont.css('width', '150px')
    }
  )
  //    第一部分下的隐藏部分隐藏的按钮
  $('#hidediv').click(function () {
    hidediv.hide()
    showbtn.find('p').text('展开添加其他证书')
    showfont.css('width', '150px')
  })

  var mainOne = $('.main-footer')
  var inputs = $('.main-input')
  var iphone = $('.main-iphone')
  var yellow = $('.yellow')
  var block = $('.block')
  var topDivUlDiv = $('.main-topdiv-ul>div')
  var liDiv = $('.lidiv')

  function textTnput() {
    // text
    $('input[type=text]').blur(function () {
      var inputVal = $(this).val()
      if (inputVal == '' || inputVal == ' ') {
        console.log('548')
        $(this)
          .removeClass('input-box')
          .addClass('borderstyle')
          .parents('li')
          .find('.input-blur')
          .show()
      } else {
        $(this)
          .addClass('input-box')
          .removeClass('borderstyle')
          .parents('li')
          .find('.input-blur')
          .hide()
      }
    })
  }
  // textarea
  function textArea() {
    $('textarea').blur(function () {
      var textareaVal = $(this).val()
      if (textareaVal == '' || textareaVal == ' ') {
        console.log('548')
        $(this)
          .addClass('borderstyle')
          .parents('li')
          .find('.input-blur')
          .show()
      } else {
        $(this)
          .addClass('input-box')
          .removeClass('borderstyle')
          .parents('li')
          .find('.input-blur')
          .hide()
      }
    })
  }
  // 网址判断
  function urlInput() {
    $('input[type=url]').blur(function () {
      var inputUrl = $(this).val()
      var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/
      var objExp = new RegExp(Expression)
      if (objExp.test(inputUrl) != true) {
        console.log('548')
        $(this)
          .addClass('borderstyle')
          .parents('li')
          .find('.input-blur')
          .show()
      } else {
        $(this)
          .addClass('input-box')
          .removeClass('borderstyle')
          .parents('li')
          .find('.input-blur')
          .hide()
      }
    })
  }

  oneDiv()
  // 第一块区域
  function oneDiv() {
    // 进度条
    mainOne
      .show()
      .siblings()
      .hide()
    topDivUlDiv
      .eq(0)
      .addClass('yellowfont')
      .siblings()
      .removeClass('yellowfont')
    liDiv
      .eq(0)
      .css('background-color', '#EABB47')
      .siblings()
      .css('background-color', '#e7e7e7')
    yellow.animate({ width: '140px' })
    block.animate({ width: '460px' })
  }
  // 第二块区域
  function twoDIV() {
    inputs
      .show()
      .siblings()
      .hide()
    liDiv.eq(1).css('background-color', '#EABB47')
    liDiv.eq(0).css('background-color', '#EABB47')
    liDiv.eq(2).css('background-color', '#e7e7e7')
    topDivUlDiv
      .eq(1)
      .addClass('yellowfont')
      .siblings()
      .removeClass('yellowfont')
    yellow.animate({ width: '420px' })
    block.animate({ width: '180px' })
  }
  // 第三款区域
  function thereDiv() {
    iphone
      .show()
      .siblings()
      .hide()
    liDiv.css('background-color', '#EABB47')
    topDivUlDiv
      .eq(2)
      .addClass('yellowfont')
      .siblings()
      .removeClass('yellowfont')
    yellow.animate({ width: '600px' })
    block.animate({ width: '0%' })
  }

  // 点击第二个区域出现  判断
  $('#nextDiv').click(function () {
    twoDIV()
    // 判断显示输入框开始判断
    var displayStyle = inputs.css('display')
    if (displayStyle == 'block') {
      textTnput()
      textArea()
      urlInput()
    }
    // 点击第二个区域出现做出判断
  })
  // 第二个返回第一个
  $('#upBtnFooterShow').click(function () {
    oneDiv()
  })
  // 第三个出现
  $('#nexttel').click(function () {
    thereDiv()

    // 验证码
    var Code = $('#unmberCode')
    $(function () {
      Code.createCode({
        len: 4
      });
    });
    $('.input-code').blur(function () {
      if ($(this).val().toLowerCase() !== Code.children('input').val().toLowerCase()) {
        $(this)
          .removeClass('input-box')
          .addClass('borderstyle')
          .parents('li')
          .find('.input-blur')
          .show()
      } else {
        $(this)
          .addClass('input-box')
          .removeClass('borderstyle')
          .parents('li')
          .find('.input-blur')
          .hide()
      }
    })

    // 手机号
    $('#myTel').blur(function () {
      var inputVal = $(this).val()
      var pattern = /^1[34578]\d{9}$/;
      var telVal = pattern.test(inputVal);
      if (telVal != true) {
        $(this)
          .removeClass('input-box')
          .addClass('borderstyle')
          .parents('li')
          .find('.input-blur')
          .show()
      } else {
        $(this)
          .addClass('input-box')
          .removeClass('borderstyle')
          .parents('li')
          .find('.input-blur')
          .hide()
      }
    })
    // 验证码
    $('#iphoneNumber').blur(function () {
      var inputVal = $(this).val()
      var pattern = /^1[34578]\d{6}$/;
      var telVal = pattern.test(inputVal);
      if (telVal != true) {
        $(this)
          .removeClass('input-box')
          .addClass('borderstyle')
          .parents('li')
          .find('.input-blur')
          .show()
      } else {
        $(this)
          .addClass('input-box')
          .removeClass('borderstyle')
          .parents('li')
          .find('.input-blur')
          .hide()
      }
    })
  })
  // 第三个返回上一步
  $('#upbtnInputShow').click(function () {
    twoDIV()
  })

  // 删除 第一部分
  $('.company-del').click(function () {
    $(this)
      .parents('.company-infor')
      .find('.company-logo img')
      .remove()
  })
  // 添加内容
  $('#addSincerity').click(function () {
    var Cont = $('.new-img-div').html()
    Cont =
      " <div class='new-img-div'><div class='company-dateils'><div class='companyimg'>" +
      "<img src='imgs/compan_img01.jpg' /><div class='new-companyimg'><div class='new-companyimg-new'>" +
      "<img src='imgs/upload_icon.png' alt='' /></div><p class='newimg'>点击上传图片</p></div></div>" +
      "<div class='company-new'><img src='imgs/upload_icon.png' alt='' />从新上传</div>" +
      "<div class='company-del'><img src='imgs/icon_delete.png' alt='' />删除</div></div>" +
      "<p class='remind'>（ JPG、PNG、GIF格式，大小在5M以内 ）</p></div>"
    $('.footer-btnmore').before(Cont)
  })
  // 添加的第二部分
  $('#addNewInput').click(function () {
    var newLi = $('#nemeLi').html()
    newLi =
      '<li>' +
      "<div class='company-name'><input type='text' placeholder='请输入标题' required /></div>" +
      "<div class='company-content'><textarea placeholder='请输入描述' required></textarea>" +
      "<img src='imgs/icon_del.png' alt='' class='deltextarea'/></div></li>"
    $('#addLiUp').before(newLi)
    delArea()
  })
  delArea()
  function delArea() {
    // 删除第二部分
    var deleteArea = $('.deltextarea')
    deleteArea.click(function () {
      $(this)
        .parents('li')
        .detach()
    })
  }

  //判断结束
  var newTmg = $('.company-new')
  var delImg = $('.company-del')
  var selectImg = $('.selectImg')
  var newImg = $('.new-companyimg')
  var newSelect = $('.newfils')
  var imgSrc = 'imgs/compan_img01.jpg'

  // 从新上传
  newSelect.change(function () {
    console.log('3238')
    createImgTag(
      $(this).parent().prev(),
      $(this)[0].files[0]
    )
  })

  selectImg.change(function () {
    createImgTag(
      $(this)
        .parent()
        .parent(),
      $(this)[0].files[0]
    )
  })
  function createImgTag(parentNode, file) {
    var reader = new FileReader()
    reader.onload = function (evt) {
      // 文件过去到的内容
      var imgUrl = evt.target.result
      // parentNode.html(`<img src=${imgUrl} >`)
      var parentValue = parentNode.find(newImg)//就是当前元素的父元素
      parentValue.prev().attr('src', imgUrl) //parentValue.prev()[0]
      parentValue.hide()
      parentNode.siblings().show()

    }
    reader.readAsDataURL(file)
  }

  // 删除
  delImg.click(function () {
    $(this).parent().find('.bgimg')
      .attr('src', imgSrc)
      .next().show()
    $(this).hide().prev().hide()
  })

  // 结尾
})

