function getProfile(e) {
  e.preventDefault();
  console.log('Fetching...');
  var userName = document.getElementById('userName').value;
  if(!userName || userName == '') {
    userName = 'fredosantana';
  }

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if(xhttp.readyState == 4 && xhttp.status == 200 ) {
      var user = JSON.parse(xhttp.responseText);
      /* Use `` after innerHTML to display content; ES6 */
      document.getElementById('profile').innerHTML = `<div class="card">
                                                        <div class="card-header" >
                                                          ${user.login}
                                                        </div>
                                                        <div class="card-block">
                                                          <div class="row">
                                                            <div class="col-md-3">
                                                              <img src="${user.avatar_url}">
                                                            </div>
                                                            <div class="col-md-9">
                                                              <span class="badge badge-primary"><h4>Public Repos: ${user.public_repos}</h4></span>
                                                              <span class="badge badge-danger"><h4>Public Gists: ${user.public_gists}</h4></span>
                                                              <br><br>
                                                              <ul class="list-group">
                                                                <li class="list-group-item">Name: ${user.name}</li>
                                                                <li class="list-group-item">Location: ${user.location}</li>
                                                                <li class="list-group-item">Bio: ${user.bio}</li>
                                                              </ul>
                                                              <br>
                                                              <a href="${user.html_url}" target="_blank"><i class="fa fa-github-alt fa-3x" aria-hidden="true"></i></a>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>`;
    }
  }
  xhttp.open('GET', 'https://api.github.com/users/' + userName, true);
  xhttp.send();
}

document.getElementById('userForm').addEventListener('submit', getProfile, false);

getProfile();
