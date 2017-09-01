/* Function validation for zip code
   Intended to accept only five digits
   Will accept all number lower than 99999
   Needs to be fixed as of 8/20/2017
*/

function myFunction() {
  var inpObj = document.getElementById("zip");
    if (inpObj.checkValidity() == false) {
      document.getElementById("demo").innerHTML = inpObj.validationMessage;
    } else {
      document.getElementById("demo").innerHTML = "Zip OK";
    }
}

/* Function validation for ss number
   Intended to accept only four digits
   Works on its own but can't work together with myFunction
   Needs to be fixed as of 8/20/2017

function thisFunction() {
  var inpObj = document.getElementById("ss");
    if (inpObj.checkValidity() == false) {
      document.getElementById("ssmessage").innerHTML = inpObj.validationMessage;
    } else {
      document.getElementById("ssmessage").innerHTML = "SS OK";
    }
}

*/

function submitForm() {
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  alert("My first name is " + firstName + " and my last name is " + lastName + ". My email address is " + email + ".");
}

document.getElementById('clientInfo').addEventListener('submit', submitForm, false);
