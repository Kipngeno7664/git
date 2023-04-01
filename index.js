// Validate login form
function validateLoginForm() {
  var username = document.forms["loginForm"]["username"].value;
  var password = document.forms["loginForm"]["password"].value;
  if (username == "" || password == "") {
    alert("Please fill in all fields.");
    return false;
  }
}

// Display account balance
function displayBalance() {
  var balance = document.getElementById("balance").value;
  alert("Your account");
}
