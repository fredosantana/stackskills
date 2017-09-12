function signIn(e){
  e.preventDefault();
  var uname = document.getElementById('uname').value;
  var psw = document.getElementById('psw').value;
  var psw2 = document.getElementById('psw2').value;
  var message = document.getElementById('message');

  if (uname == '' || psw == '' || psw2 == '') {
    message.className = "alert alert-danger"
    message.innerHTML = 'Stop giving me blanks. I need more!!';
  } else {
      if(uname != 'wil.santana@mbhp.org') {
        message.className = "alert alert-danger"
        message.innerHTML = 'I don\'t even know you. STRANGER!!!';
      } else {
          if(psw != 'Kw071517!' && psw2 != 'Kw071517!'){
            message.className = "alert alert-danger";
            message.innerHTML = 'It\'s gotta match for me to turn on';
          } else {
              //SUCCESS
              window.location = "forms/request.html";
            }
          }
        }
      }

document.getElementById('regForm').addEventListener('submit', signIn, false);
