/*
function sayWord() {
  alert('Word!');
}


function sayWord(anything = 'What\'s', everything = 'Up', something = "Wil!" ){
  alert(anything + '-' + everything + '-' + something);
}

sayWord("BOOM", "SHAKA", "LAKA!!!!");

var sum = getSum(4, 5);

function getSum(pizza, cheeseburger){
  return pizza + cheeseburger;
}

console.log('The answer is ' + getSum(78947923947, 7987894823427));
*/

function todaysDate() {
  var date = new Date();
  document.getElementById('showDate').innerHTML = date;
}

function submitForm() {
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  alert("My first name is " + firstName + " and my last name is " + lastName + ". My email address is " + email + ".");
}

document.getElementById('myForm').addEventListener('submit', submitForm, false);
