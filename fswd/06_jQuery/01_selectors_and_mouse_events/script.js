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
  */
  $('#touchIt').dblclick(function(){
    //alert('BAM!!!');
    $('.p1').toggle();
    $('.p2').toggle();
  });
});
