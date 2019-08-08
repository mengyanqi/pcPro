$(function () {
  var mainOne = $('.main-footer')
  var inputs = $('.main-input')
  var iphone = $('.main-iphone')
  var yellow = $('.yellow')
  var block = $('.block')
  var topDivUlDiv = $('.main-topdiv-ul>div')
  var liDiv = $('.lidiv')
  var inputBlur = $('.input-blur')

  //    第一部分下的隐藏部分隐藏的按钮
  $('#hidediv').click(function () {
    hidediv.hide()
    showbtn.find('p').text('展开添加其他证书')
    showfont.css('width', '150px')
  })
  oneDiv()
  // 第一块区域
  function oneDiv() {
    console.log('1248')
    // 进度条
    ifElse()
    inputs
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
    mainOne
      .show()
      .siblings()
      .hide()

    ifElse()
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

  // 点击第1个区域出现
  $('#nextDiv').click(function () {
    twoDIV()
    // 判断
  })
  // 点击第二个区域出现做出判断
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
      var pattern = /^1[0-9]\d{6}$/;
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


  // 添加内容
  $('#addSincerity').click(function () {
    var Cont = $('.new-img-div').html()
    Cont =
      " <div class='new-img-div'><div class='company-dateils'><div class='companyimg'>" +
      "<img src='imgs/compan_img01.jpg'  /><div class='new-companyimg'><div class='new-companyimg-new'>" +
      " <img src='imgs/upload_icon.png' alt='' /></div><p class='newimg'>点击上传图片</p></div></div>" +
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
  })
  // 删除第二部分
  var deletearea = $('.deltextarea')
  deletearea.click(function () {
    $(this)
      .parents('li')
      .remove()
  })

  $('.main-footer input[type=text]').blur(function () {
    var inputVal = $(this).val()
    if (inputVal == '' || inputVal == ' ') {
      $(this)
        .removeClass('input-box')
        .addClass('borderstyle')
        .parents('.company-infor')
        .find(inputBlur)
        .show()
    } else {
      $(this)
        .addClass('input-box')
        .removeClass('borderstyle')
        .parents('.company-infor')
        .find(inputBlur)
        .hide()
    }
  })

  // 结尾
  function ifElse() {
    var displayStyle = inputs.css('display')
    if (displayStyle == 'block') {
      // type=text
      $('input[type=text]').blur(function () {
        var inputVal = $(this).val()
        if (inputVal == '' || inputVal == ' ') {
          $(this)
            .removeClass('input-box')
            .addClass('borderstyle')
            .parents('li')
            .find(inputBlur)
            .show()
        } else {
          $(this)
            .addClass('input-box')
            .removeClass('borderstyle')
            .parents('li')
            .find(inputBlur)
            .hide()
        }
      })
      // textarea
      $('textarea').blur(function () {
        var textareaVal = $(this).val()
        if (textareaVal == '' || textareaVal == ' ') {
          $(this)
            .removeClass('input-box')
            .addClass('borderstyle')
            .parents('li')
            .find(inputBlur)
            .show()
        } else {
          $(this)
            .addClass('input-box')
            .removeClass('borderstyle')
            .parents('li')
            .find(inputBlur)
            .hide()
        }
      })
      // 网址判断
      $('input[type=url]').blur(function () {
        var inputUrl = $(this).val()
        var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/
        var objExp = new RegExp(Expression)
        if (objExp.test(inputUrl) != true) {
          $(this)
            .removeClass('input-box')
            .addClass('borderstyle')
            .parents('li')
            .find(inputBlur)
            .show()
        } else {
          $(this)
            .addClass('input-box')
            .removeClass('borderstyle')
            .parents('li')
            .find(inputBlur)
            .hide()
        }
      })
      // 失去边框
    }
  }
  //判断结束
  var newTmg = $('.company-new')
  var delImg = $('.company-del')
  var userImg = $('#userImg') //用户输入的图片图片
  var selectImg = $('.selectImg')
  var newImg = $('.new-companyimg')


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
      .attr('src', 'imgs/compan_img01.jpg')
      .next().show()
    $(this).hide().prev().hide()
  })
  // 从新上传
  $('.newfils').change(function () {
    createImgTag(
      $(this).parent().prev(),
      $(this)[0].files[0]
    )
  })

})

