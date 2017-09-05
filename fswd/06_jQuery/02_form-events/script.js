$(document).ready(function(){
  // Focus and Blur Events
  $('#appleCinnamonCherrios input').focus(function() {
    $(this).css('background', 'pink');
    $(this).blur(function(){
      $(this).css('background', 'none');
    });
  });
  // Change Events
  $('#appleCinnamonCherrios select').change(function() {
    var cat = "";
    $('select option:selected').each(function() {
      cat += $(this).text() + " ";
    });
    $('#frostedFlakes').text(cat);
  });
  // Select Events
  $(':input').select(function(){
    $('#frostedFlakes').text('You chose something!').show();
  });
  // Submit Event
  $('#appleCinnamonCherrios').submit(function(e) {
    e.preventDefault();
    $('#frostedFlakes').text('Form Submitted');
  });
  // Key Up and Key Down Events
  $('#appleCinnamonCherrios input').keydown(function(){
    $('#frostedFlakes').text('You are typing');
    $(this).keyup(function() {
      $('#frostedFlakes').text('');
    });
  });
});
