$(document).ready(function(){
  $('.p1').hide();
  $('.p2').hide();
  $('#touchIt').dblclick(function(){
    $('.p1').toggle();
    $('.p2').toggle();
  });

  $('#rectangle1').hover(function(){
    $(this).html('<h1>Now move the mouse away.</h1>');
  }, function() {
      $(this).html('<h1 id="oldSchool">Here\'s an Atari-looking font!</h1>');
    }
  );

  $('#rectangle2').mouseenter(function() {
    $(this).html('<h1>Now move the mouse away</h1>');
    $(this).mouseout(function() {
      $(this).html('<h1 id="barcode">Here\'s a random barcode.</h1>');
    });
  });

  $('#rectangle3').mousedown(function() {
    $(this).html('<h1>Now take your smelly finger off the mouse</h1>');
    $(this).mouseup(function() {
      $(this).html('<h1 id="strangeFont">Here\'s some funky looking font!</h1>');
    });
  });

  $('#rectangle4').mousemove(function(event){
    var proteinShake = "Mouse position - ";
    proteinShake += event.pageX + " " + event.pageY;
    $('#alarmClock').html('<div>' + proteinShake + '</div>');
  });
});
