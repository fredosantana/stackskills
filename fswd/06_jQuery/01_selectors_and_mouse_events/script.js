$(document).ready(function(){
  /*
  alert(1);
  $('.p1').hide();
  $('p').show();

  $('#touchIt').click(function(){
    //alert('BAM!!!');
    $('.p1').toggle();
    //$('.p2').show('Test');
  });

  $('#touchIt').dblclick(function(){
    //alert('BAM!!!');
    $('.p1').toggle();
    $('.p2').toggle();
  });
  $('#rectangle').hover(function(){
    $(this).text("HOLLA!!!");
  }, function() {
      $(this).text("COME BACK!!");
    }
  );

  $('#rectangle').mouseenter(function() {
    $(this).text('VANDALAYY!!!');
    $(this).mouseout(function() {
      $(this).text('SAY VANDALAY!!!');
    });
  });

  $('#rectangle').mousedown(function() {
    $(this).text('NOW TAKE YOUR SMELLY FINGER OFF THE MOUSE!!!!!');
    $(this).mouseup(function() {
      $(this).text('AND CLICK IT DOWN AGAIN!!!');
    });
  });
  */
  $('#rectangle2').mousemove(function(event){
    var proteinShake = "Mouse position - ";
    proteinShake += event.pageX + " " + event.pageY;
    $('#alarmClock').html('<div>' + proteinShake + '</div>');
  });
});
