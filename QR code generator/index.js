const qrinput = document.getElementById("qr-input");
const qrImg = document.getElementById("qr-img");
const qrbutton = document.getElementById("qr-button");

qrbutton.addEventListener("click", () => {
  const InputValue = qrinput.value;

  if (!InputValue) {
    alert("please enter a valid URL ");
  } else {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${InputValue}`;
    qrinput.value = "";
  }
});
