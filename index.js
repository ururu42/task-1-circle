let circle = window.document.querySelector("div");

circle.addEventListener("click", function () {
  circle.remove();
});

circle.addEventListener("mouseover", function () {
  circle.style.backgroundColor = "green";
});
