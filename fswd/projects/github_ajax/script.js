function getProfile() {
  var userName = 'fredosantana';

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if(xhttp.readyState == 4 && xhttp.status == 200 ) {
      var user = JSON.parse(xhttp.responseText);
      document.getElementById('profile').innerHTML = user.login;
    }
  }
  xhttp.open('GET', 'https://api.github.com/users/' + userName, true);
  xhttp.send();
}

getProfile();
