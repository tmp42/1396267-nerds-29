const loginLink = document.querySelector(".js-modal");
const loginPopup = document.querySelector(".popup");
const loginClose = loginPopup.querySelector(".modal-close");
const popupForm = document.querySelector(".appointment-form");

popupForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if(popupForm.name.value==="" || popupForm.email.value===""){
    loginPopup.classList.remove("modal-error");
    loginPopup.classList.add("modal-error");
  }
});

loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");
  document.body.style.overflow="hidden";
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
  loginPopup.classList.remove("modal-error");
  document.body.style.overflow="unset";
});

const sliderControls = document.querySelectorAll(".slider-controls button"),
  sliderElement=document.querySelectorAll(".banner-slide");

function clearClass(element, className) {
  element.forEach(function (item) {
    item.classList.remove(className);
  });
}

sliderControls.forEach(function (button, indexControl) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    //Очистка
    clearClass(sliderControls, 'current');
    clearClass(sliderElement, 'slide-current');
    sliderElement.forEach(function (slide, slideIndex) {
      if(indexControl===slideIndex){
        slide.classList.add("slide-current");
      }
    });
    //добавление
    button.classList.add("current");
  });
});

//карта
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [59.938635, 30.323118],
      zoom: 20
    }, {
      searchControlProvider: 'yandex#search'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Собственный значок метки',
      balloonContent: 'Это красивая метка'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/map-marker.png',
      // Размеры метки.
      iconImageSize: [231, 190],
    });

  myMap.geoObjects
    .add(myPlacemark);
});
