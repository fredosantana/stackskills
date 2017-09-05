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
  // Select Event
});
