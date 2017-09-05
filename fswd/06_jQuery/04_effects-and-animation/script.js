$(document).ready(function(){
  $('#btnHide').click(function(){
    $('.firstP').hide();
  });
  $('#btnShow').click(function(){
    $('.firstP').show();
  });
  $('#btnTog').click(function(){
    $('.firstP').toggle();
  });
  /*
  Effects will not work if 'slim' version of jQuery CDN is used https://stackoverflow.com/questions/934446/why-does-jquery-throw-the-error-fadeout-is-not-a-function
  Number in parentheses next to function represents number of milliseconds for function to complete
   */
  $('#btnFadeOut').click(function(){
    $('.firstP').fadeOut(2000);
  });
  $('#btnFadeIn').click(function(){
    $('.firstP').fadeIn(2000);
  });
  $('#btnFadeTog').click(function(){
    $('.firstP').fadeToggle(2000);
  });
  $('#btnSlideUp').click(function(){
    $('.firstP').slideUp(4000);
  });
  $('#btnSlideDown').click(function(){
    $('.firstP').slideDown();
  });
  $('#btnSlideTog').click(function(){
    $('.firstP').slideToggle();
  });
  $('#btnStop').click(function(){
    $('.firstP').stop();
  });
  $('#anim').click(function(){
    $('.shape').animate({
      // Concatenation can be used to customize animations
      down: '+=250px',
      opacity: '-=0.1',
      height: '+=100px',
      width: '+=100px'
    }, 'slow');
  });
  $('#anim2').click(function(){
    var div = $('.shape2');
    div.animate({
      height: '400px',
      opacity: '0.4'
    }, 'slow');
    div.animate({
      width: '400px',
      opacity: '0.8'
    }, 'slow');
    div.animate({
      height: '100px',
      opacity: '0.4'
    }, 'slow');
    div.animate({
    width: '100px',
      opacity: '0.8'
    }, 'slow');


  });
});
