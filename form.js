function formValidation() {
  var passid = document.registration.passid;
  var uname = document.registration.username;
  var uadd = document.registration.address;
  var ucountry = document.registration.country;
  var uzip = document.registration.zip;
  var uemail = document.registration.email;
  var umsex = document.registration.msex;
  var ufsex = document.registration.fsex;
  if (passid_validation(passid, 7, 12)) {
    if (allLetter(uname)) {
      if (alphanumeric(uadd)) {
        if (countryselect(ucountry)) {
          if (allnumeric(uzip)) {
            if (ValidateEmail(uemail)) {}
          }
        }
      }
    }
  }
  return false;
}


function passid_validation(passid, mx, my) {
  var passid_len = passid.value.length;
  if (passid_len == 0 || passid_len >= my || passid_len < mx) {
    alert("Password should not be empty / length be between " + mx + " to " + my);
    passid.focus();
    return false;
  }
  return true;
}

function allLetter(uname) {
  var letters = /^[A-Za-z]+$/;
  if (uname.value.match(letters)) {
    return true;
  } else {
    alert('Username must have alphabet characters only');
    uname.focus();
    return false;
  }
}

function alphanumeric(uadd) {
  var letters = /^[0-9a-zA-Z]+$/;
  if (uadd.value.match(letters)) {
    return true;
  } else {
    alert('User address must have alphanumeric characters only');
    uadd.focus();
    return false;
  }
}

function countryselect(ucountry) {
  if (ucountry.value == "Default") {
    alert('Select your country from the list');
    ucountry.focus();
    return false;
  } else {
    return true;
  }
}

function allnumeric(uzip) {
  var numbers = /^[0-9]+$/;
  if (uzip.value.match(numbers)) {
    return true;
  } else {
    alert('ZIP code must have numeric characters only');
    uzip.focus();
    return false;
  }
}

function ValidateEmail(uemail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    uemail.focus();
    return false;
  }
}

function getValues() {
  var pass = document.getElementById('user-pass').value,
      name = document.getElementById('user-name').value,
      address = document.getElementById('user-address').value,
      country = document.getElementById('user-country').value,
      zip = document.getElementById('user-zip').value,
      email = document.getElementById('user-email').value,
      desc = document.getElementById('user-desc').value;
      alert(
        ` User's name: ${name}; \n User's address: ${address}, \n User's country: ${country} \n User's zip: ${zip}; \n User's email: ${email} \n User's desc: ${desc}`
      );
}
