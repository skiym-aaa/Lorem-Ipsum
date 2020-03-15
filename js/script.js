$(function() {
 
  $('.menu-trigger').on('click', function() {
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    return false;
  });
  
  $('.menu a[href]').on('click', function() {
    $('.menu-trigger').toggleClass('active');
    $('#sp-menu').fadeToggle();
  });

  $('#back a').on('click',function(){
    $('body, html').animate({
      scrollTop:0
    }, 800);
      return false;
  });
 });