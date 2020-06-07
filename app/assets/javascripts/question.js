$(function() {

  $('#page-title').hover(function(){
      $(this).css('background-color', '#558585');
    });

  $('#page-title').hover(
    function() {
      $(this).animate({
        'font-size':'75px'
      },1000);
    },
    function() {
      $(this).animate({
        'font-size':'50px'
      },1000);
    },2000
  );

  $('.page-title').hover(
    function(){
      $('#page-title').fadeIn(1500);
    },
    function(){
      $('#page-title').text('You can do it.');
    },
  );

  $('#question-box').hover(
    function(){
      $(this).css('background-color', '#5caaaa');
    },
    function(){
      $(this).css('background-color', '#82aaaa');
    },
  );

  $('#question-box').click(function(){
    $('#question-modal').show();
  });

  $('#submit-btn').hover(
    function(){
      $(this).css('background-color', '#5caaaa');
    },
    function(){
      $(this).css('background-color', '#82aaaa');
    },
  );

  $('.fa-times').hover(
    function(){
      $(this).css('color', 'rgb(49, 46, 46, 0.8)');
    },
    function(){
      $(this).css('color', 'rgba(44, 39, 39, 0.46)');
    },
  );

  $('.close-modal').click(function(){
    $('#question-modal').fadeOut();
  });

  $('.header__user-show').hover(
    function(){
      $(this).css('background-color', 'rgb(200, 200, 200, 0.5)');
    },
    function(){
      $(this).css('background-color', 'white');
    },
  );

  $('.header__navi--hover').hover(
    function(){
      $(this).css('background-color', 'rgb(200, 200, 200, 0.5)');
    },
    function(){
      $(this).css('background-color', 'white');
    },
  );

});