function myFunction() {
  var inpObj = document.getElementById("zip");
    if (inpObj.checkValidity() == false) {
      document.getElementById("demo").innerHTML = inpObj.validationMessage;
    } else {
      document.getElementById("demo").innerHTML = "Input OK";
    }
}
