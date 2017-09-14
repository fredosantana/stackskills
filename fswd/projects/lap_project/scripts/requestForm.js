function requestForm(e) {
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
  var date_submitted = document.getElementById('date_submitted').value;
  var date_requested = document.getElementById('date_requested').value;
  var appointment_time = document.getElementById('appointment_time').value;
  var language = document.getElementById('language').value;
  var request_type = document.getElementById('request_type').value;
  var interpretation = document.getElementById('interpretation').value;
  var message = document.getElementById('message');

  if (firstName == '' || lastName == '' || address == '' || city == '' || state == '' || zip == '' || phone == '' || ss == '' || program == '' || date_submitted == '' || date_requested == '' || appointment_time == '' || language == '' || request_type == '' || interpretation == '') {
    // BLANK FIELDS
    message.className = "alert alert-danger";
    message.innerHTML = 'Please fill form completely';
  } else {
      if(firstName.length < 3 || lastName.length < 3) {
        message.className = "alert alert-danger";
        message.innerHTML = 'First and last name must be at least 3 characters';
      } else {
          if(zip.length < 5 || zip.length < 5) {
            message.className = "alert alert-danger";
            message.innerHTML = 'Zip code must be five digits';
          } else {
              if(ss.length < 4 || ss.length > 4) {
                message.className = "alert alert-danger";
                message.innerHTML = 'SS number must be four digits';
              } else {
            // SUCCESS
                message.className = "alert alert-success";
                alert('Client name: ' + firstName + ' ' + lastName + '\nAddress: ' + address + ' ' + city + ', ' + state + ' ' + zip + '\nPhone number: ' + phone + '\nID number: ' + ss + '\nProgram name: ' + program + '\nDate Submitted: ' + date_submitted + '\nDate Requested: ' + date_requested + '\nAppointment Time: ' + appointment_time + '\nLanguage: ' + language + '\nRequest Type: ' + request_type + '\nMeeting Type: ' + interpretation);
             }
            }
          }
        }
      }

document.getElementById('requestForm').addEventListener('submit', requestForm, false);
