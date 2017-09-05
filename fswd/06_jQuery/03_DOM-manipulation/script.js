$(document).ready(function(){
  // Displays text from 'first' id
  $('#first').text('Say word?');
  // Displays text from 'second' id with HTML attribute
  $('#second').html('<h1>Word!</h1>');
  // Places text within .val attribute in an input field
  $('#inputItOnMe').val('This text is here by default');
  //alert($('#first').text());
  // Adds a class in the 'first' id without having to add it on to HTML file
  $('#first').attr('class', 'aClass');
  // Removes aforementioned class
  $('#first').removeAttr('class');
  // Adds another list item to the 'firstLast' id; append attribute places the item in the end
  $('#firstList').append('<li>Number 6</li>');
  // Adds another list item to the 'firstLast' id; prepend attribute places the item in the beginning
  $('#firstList').prepend('<li>Number 1</li>');
  // Places the item before the 'firstList' list
  $('#firstList').before('<h3>Here\'s a random list</h3>');
  // Places the item after the 'firstList' list
  $('#firstList').after('<h3>Thanks for checking this out!</h3>');
  /* Removes the list entirely
  $('#firstList').remove();
     Empties children elements
  $('#firstList').empty(); */
  // Applies style class
  $('#first').addClass('red');
  // Removes style class; overrides HTML
  $('#second').removeClass('green');
  // Style applied when button is pushed
  $('#pushMe').click(function() {
    $('#second').toggleClass('green');
  });
  // CSS attribute; overrides rule set in style.css file
  $('#first').css('background', 'pink');
  // Manipulate size; works on second id after 'Push Me!' button is clicked
  $('#second').width('500');
  $('#first').height('100');
  /* Replaces content of second id; overrides HTML
  $('#second').replaceWith('<h1>A different heading!</h1>');*/
  // Moves element outside of its parent (ul in this case)
  $('li').unwrap();
  // Adds a new div to an id element
  $('second').wrap('<div></div>');
});
