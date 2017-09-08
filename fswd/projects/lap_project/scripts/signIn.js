function register(e){
  e.preventDefault();

  var uname = document.getElementById('uname').value;
  var psw = document.getElementById('psw').value;
  var psw2 = document.getElementById('psw2').value;
  var message = document.getElementById('message');

  if(uname == '' || psw == '' || psw2 == '') {
    message.className = "alert alert-danger"
    message.innerHTML = 'Please fill out all fields';
  } else {
      if(uname.length < 3){
        message.className = "alert alert-danger";
        message.innerHTML = 'Name must be at least 3 characters';
      } else {
            if(psw != psw2){
              message.className = "alert alert-danger";
              message.innerHTML = 'Passwords do not match';
            } else {
              //SUCCESS
              message.className = "alert alert-success";
              message.className = "alert alert-success"
              message.innerHTML = uname + " successfully signed-in!";
          }
        }
      }
    }

document.getElementById('regForm').addEventListener('submit', register, false);
