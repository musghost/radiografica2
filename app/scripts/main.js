'use strict';

(function(){
  $('.player').YTPlayer();

  if($('#description').length !== 0){
    $('#description').scrollspy({
      min: $('#description').offset().top - 300,
      max: $('#description').offset().top + 300,
      onEnter: function(element){
        $(element).addClass('fadeina');
      }
    });
  }

  if($('#projects').length !== 0){

    $('#projects').scrollspy({
      min: $('#projects').offset().top - 300,
      max: $('#projects').offset().top + 300,
      onEnter: function(element){
        $(element).addClass('active');
      }
    });
  }

  if($('#meet-us').length !== 0){

    $('#meet-us').scrollspy({
      min: $('#meet-us').offset().top - 400,
      max: $('#meet-us').offset().top + 300,
      onEnter: function(element){
        $(element).addClass('fadeina');
      }
    });
  }
})();

(function(){
  $('#send-form').submit(function(a){
    a.preventDefault();
    var form = $('#form');
    var message = $('#message').val();
    $('#message').val('');
    $(this).find('button').attr('disabled', 'disabled');
    $.ajax({
      type: 'POST',
      data: 'message=' + message,
      url: 'mail.php',
      success: function(msg){
        if(msg === 'ok'){
          form.find('.success').css('display', 'inline-block');
        } else {
          form.find('.error').css('display', 'inline-block');
        }
      },
      error: function(){
        form.find('.error').css('display', 'inline-block');
      }
    });
  });
})();


// Red
var sliders = $('.image-slider');
if(sliders.length > 0){
  var imgs = sliders.find('img'),
    len = imgs.length,
    current = 0;

  var change = function() {
    var next;
    if(current + 1 >= len) {
      next = 0;
    } else {
      next = current+ 1;
    }
    imgs.eq(current).animate({
      opacity: 0.5
    }, 500, function(){
      $(this).removeClass('active').removeAttr('style');
      imgs.eq(next).css({
        display: 'block',
        opacity: 0.5
      }).animate({
        opacity: 1
      }, 500, function(){
        $(this).addClass('active').removeAttr('style');
        current = next;
        setTimeout(function(){
          change();
        }, 5000);
      });
    });
  };

  setTimeout(function(){
    change();
  }, 5000);
}
