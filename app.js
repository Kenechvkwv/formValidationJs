const fname = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorName = document.getElementById("errorname");
const errorPassword = document.getElementById("errorpassword");

form.addEventListener("submit", (e) => {
  let messagesName = [];
  let messagesPassword = [];
  if (fname.value === "" || fname.value == null) {
    messagesName.push("Name is Required");
  }
  if (password.value.length <= 6) {
    messagesPassword.push("Password Length is too short");
  }

  if (messagesName.length > 0) {
    e.preventDefault();
    errorName.style.display = "block";
    errorName.innerText = messagesName.join(", ");
  }
  if (messagesPassword.length > 0) {
    errorPassword.style.display = "block";
    errorPassword.style.marginBottom = "10px";
    e.preventDefault();
    errorPassword.innerText = messagesPassword.join(", ");
  }
});
