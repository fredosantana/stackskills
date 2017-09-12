function register(e){
  e.preventDefault();

  var date = document.getElementById('date').value;
  var category = document.getElementById('category').value;
  var issue = document.getElementById('issue').value;
  var solution = document.getElementById('solution').value;
  var resource = document.getElementById('resource').value;
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
