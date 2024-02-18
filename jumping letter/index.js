const span = document.querySelectorAll("span");

span.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
