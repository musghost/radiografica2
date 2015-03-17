'use strict';
$('.player').YTPlayer();

$('#description').scrollspy({
  min: $('#description').offset().top - 300,
  max: $('#description').offset().top + 300,
  onEnter: function(element){
    $(element).addClass('fadeina');
  }
});

$('#projects').scrollspy({
  min: $('#projects').offset().top - 300,
  max: $('#projects').offset().top + 300,
  onEnter: function(element){
    $(element).addClass('active');
  }
});

$('#meet-us').scrollspy({
  min: $('#meet-us').offset().top - 400,
  max: $('#meet-us').offset().top + 300,
  onEnter: function(element){
    $(element).addClass('fadeina');
  }
});
