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
