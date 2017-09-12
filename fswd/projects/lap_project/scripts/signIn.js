function signIn(e){
  e.preventDefault();
  var uname = document.getElementById('uname').value;
  var psw = document.getElementById('psw').value;
  var psw2 = document.getElementById('psw2').value;
  var message = document.getElementById('message');

  if(uname != 'wil.santana@mbhp.org') {
    message.className = "alert alert-danger"
    message.innerHTML = 'Username incorrect';
  } else {
      if(psw != 'Kw071517!' && psw2 != 'Kw071517!'){
        message.className = "alert alert-danger";
        message.innerHTML = 'Passwords do not match';
        } else {
              //SUCCESS
              window.location = "forms/request.html";
        }
      }
    }

document.getElementById('regForm').addEventListener('submit', signIn, false);
