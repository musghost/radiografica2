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
