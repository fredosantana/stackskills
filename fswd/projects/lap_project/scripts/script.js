function register(e){
  e.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var password2 = document.getElementById('password2').value;
  var message = document.getElementById('message');

  if(name == '' || email == '' || password == '' || password2 == '') {
    message.className = "alert alert-danger";
    message.className = "alert alert-danger"
    message.innerHTML = 'Please fill out all fields';
  } else {
      if(name.length < 3){
        message.className = "alert alert-danger";
        message.innerHTML = 'Name must be at least 3 characters';
      } else {
          var atpos = email.indexOf("@");
          var dotpos = email.lastIndexOf(".");
          if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
            message.className = "alert alert-danger";
            message.innerHTML = 'Plese use valid email';
          } else {
            if(password != password2){
              message.className = "alert alert-danger";
              message.innerHTML = 'Passwords do no match';
            } else {
              //SUCCESS
              message.className = "alert alert-success";
              message.className = "alert alert-success"
              message.innerHTML = name + " is registered with email " + email;
          }
        }
      }
    }
  }

document.getElementById('regForm').addEventListener('submit', register, false);


function clientForm(e) {
  e.preventDefault();

  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var address = document.getElementById('address').value;
  var city = document.getElementById('city').value;
  var state = document.getElementById('state').value;
  var zip = document.getElementById('zip').value;
  var phone = document.getElementById('phone').value;
  var ss = document.getElementById('ss').value;
  var program = document.getElementById('program').value;
  var message = document.getElementById('message');

  if (firstName == '' || lastName == '' || address == '' || city == '' || state == '' || zip == '' || phone == '' || ss == '' || program == '') {
    // BLANK FIELDS
    message.className = "alert alert-danger";
    message.innerHTML = 'Please fill form completely';
  } else {
      if(firstName.length < 3 && lastName.length < 3) {
        message.className = "alert alert-danger";
        message.innerHTML = 'First and last name must be at least 3 characters';
      } else {
          if(zip.length < 5 || zip.length > 5) {
            message.className = "alert alert-danger";
            message.innerHTML = 'Zip code must be five numbers';
          } else {
              if(ss.length < 4 || ss.length > 4) {
                message.className = "alert alert-danger";
                message.innerHTML = 'SS number must be four digits';
              } else {
            // SUCCESS
                message.className = "alert alert-success";
                message.innerHTML = ('Client name: ' + firstName + ' ' + lastName + '\nAddress: ' + address + ' ' + city + ', ' + state + ' ' + zip + '\nPhone number: ' + phone + '\nID number: ' + ss + '\nProgram name: ' + program);
             }
            }
          }
        }
      }

document.getElementById('clientInfo').addEventListener('submit', clientForm, false);
