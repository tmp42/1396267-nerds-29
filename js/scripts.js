const loginLink = document.querySelector(".js-modal");
const loginPopup = document.querySelector(".popup");
const loginClose = loginPopup.querySelector(".modal-close");
const btn_slide1 = document.querySelector(".button1");
const btn_slide2 = document.querySelector(".button2");
const btn_slide3 = document.querySelector(".button3");
const slide1 = document.querySelector(".banner-slide-1");
const slide2 = document.querySelector(".banner-slide-2");
const slide3 = document.querySelector(".banner-slide-3");

loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");

  if (storage) {
    loginLogin.value = storage;
    loginPassword.focus();
  } else {
    loginLogin.focus();
  }
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
  loginPopup.classList.remove("modal-error");
});

btn_slide1.addEventListener("click", function (evt) {
  evt.preventDefault();
  btn_slide1.classList.add("remove");
  btn_slide2.classList.remove("current");
  btn_slide3.classList.remove("current");
  slide1.classList.add("slide-current");
  slide2.classList.remove("slide-current");
  slide3.classList.remove("slide-current");
});

btn_slide2.addEventListener("click", function (evt) {
  evt.preventDefault();
  btn_slide1.classList.remove("remove");
  btn_slide2.classList.add("current");
  btn_slide3.classList.remove("current");
  slide1.classList.remove("slide-current");
  slide2.classList.add("slide-current");
  slide3.classList.remove("slide-current");
});

btn_slide3.addEventListener("click", function (evt) {
  evt.preventDefault();
  btn_slide1.classList.remove("remove");
  btn_slide2.classList.remove("current");
  btn_slide3.classList.add("current");
  slide1.classList.remove("slide-current");
  slide2.classList.remove("slide-current");
  slide3.classList.add("slide-current");
});
