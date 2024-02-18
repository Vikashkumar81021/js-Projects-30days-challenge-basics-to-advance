
const InputVal = document.getElementById("password");
const outputVal = document.getElementById("output");

InputVal.addEventListener("input", () => {

  let password = InputVal.value;
  
  if (password.length < 8) {
    outputVal.innerHTML = "password is short";
    outputVal.style.color = "red";
  } else if (password.search(/[a-z]/) == -1) {
    outputVal.innerHTML = "password is missing lowercase";
    outputVal.style.color = "red";
  } else if (password.search(/[A-Z]/) == -1) {
    outputVal.innerHTML = "Password is missing uppercase";
    outputVal.style.color = "red";
  } else if (password.search(/[0-9]/) == -1) {
    outputVal.innerHTML = "Password is missing numeric letter";
    outputVal.style.color = "red";
  } else if (password.search(/[!@#$%^&*()_+{}[]|:;<>,.?"]/) == -1) {
    outputVal.innerHTML = "Password is missing special character";
    outputVal.style.color = "red";
  } else {
    outputVal.innerHTML = "Password is strong";
    outputVal.style.color = "green";
  }
});
