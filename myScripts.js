var btn_down1 = document.querySelector(".btn-down1");
var btn_down2 = document.querySelector(".btn-down2");
var btn_down3 = document.querySelector(".btn-down3");
var btn_down4 = document.querySelector(".btn-down4");
var btn_down5 = document.querySelector(".btn-down5");
var btn_up1 = document.querySelector(".btn-up1");
var btn_up2 = document.querySelector(".btn-up2");
var btn_up3 = document.querySelector(".btn-up3");
var btn_up4 = document.querySelector(".btn-up4");
var btn_up5 = document.querySelector(".btn-up5");
var ans1 = document.querySelector(".ans1");
var ans2 = document.querySelector(".ans2");
var ans3 = document.querySelector(".ans3");
var ans4 = document.querySelector(".ans4");
var ans5 = document.querySelector(".ans5");
var Q1 = document.querySelector(".Q1");
var Q2 = document.querySelector(".Q2");
var Q3 = document.querySelector(".Q3");
var Q4 = document.querySelector(".Q4");
var Q5 = document.querySelector(".Q5");

//functionality in btn1...........
btn_down1.addEventListener("click", function () {
  btn_down1.classList.add("btn-down");
  Q1.style.fontWeight = "bold";
  btn_up1.classList.remove("btn-up");
  ans1.classList.remove("ANS");
});
btn_up1.addEventListener("click", function () {
  btn_down1.classList.remove("btn-down");
  Q1.style.fontWeight = "normal";
  btn_up1.classList.add("btn-up");
  ans1.classList.add("ANS");
});

//functionality in btn2...........
btn_down2.addEventListener("click", function () {
  btn_down2.classList.add("btn-down");
  Q2.style.fontWeight = "bold";
  btn_up2.classList.remove("btn-up");
  ans2.classList.remove("ANS");
});
btn_up2.addEventListener("click", function () {
  btn_down2.classList.remove("btn-down");
  Q2.style.fontWeight = "normal";
  btn_up2.classList.add("btn-up");
  ans2.classList.add("ANS");
});

//functionality in btn3...........
btn_down3.addEventListener("click", function () {
  btn_down3.classList.add("btn-down");
  Q3.style.fontWeight = "bold";
  btn_up3.classList.remove("btn-up");
  ans3.classList.remove("ANS");
});
btn_up3.addEventListener("click", function () {
  btn_down3.classList.remove("btn-down");
  Q3.style.fontWeight = "normal";
  btn_up3.classList.add("btn-up");
  ans3.classList.add("ANS");
});

//functionality in btn4...........
btn_down4.addEventListener("click", function () {
  btn_down4.classList.add("btn-down");
  Q4.style.fontWeight = "bold";
  btn_up4.classList.remove("btn-up");
  ans4.classList.remove("ANS");
});
btn_up4.addEventListener("click", function () {
  btn_down4.classList.remove("btn-down");
  Q4.style.fontWeight = "normal";
  btn_up4.classList.add("btn-up");
  ans4.classList.add("ANS");
});

//functionality in btn5...........
btn_down5.addEventListener("click", function () {
  btn_down5.classList.add("btn-down");
  Q5.style.fontWeight = "bold";
  btn_up5.classList.remove("btn-up");
  ans5.classList.remove("ANS");
});
btn_up5.addEventListener("click", function () {
  btn_down5.classList.remove("btn-down");
  Q5.style.fontWeight = "normal";
  btn_up5.classList.add("btn-up");
  ans5.classList.add("ANS");
});
