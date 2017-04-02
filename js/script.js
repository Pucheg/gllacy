

var feed_open = document.querySelector(".feedback-btn");
var feed_modal = document.querySelector(".pop-up_feedback");
var feed_close = feed_modal.querySelector(".close-popup");
var feed_form = feed_modal.querySelector("form");
var feed_login = feed_modal.querySelector(".feedback [name=user-name]");
feed_mail = feed_modal.querySelector(".feedback [name=email]");
var index_banner = document.querySelector(".page-bg");

feed_open.addEventListener("click", function(event){
    event.preventDefault();
    feed_modal.classList.add("show-modal");
    feed_login.focus();
});

feed_close.addEventListener("click", function(event){
    event.preventDefault();
    feed_modal.classList.remove("show-modal");
    if (feed_modal.classList.contains("modal-error")) {
        feed_modal.classList.remove("modal-error");}
});

window.addEventListener("keydown", function(event) {
if (event.keyCode === 27) {
    if (feed_modal.classList.contains("show-modal")) {
        feed_modal.classList.remove("show-modal");}
    if (feed_modal.classList.contains("modal-error")) {
        feed_modal.classList.remove("modal-error");}
}
});

feed_form.addEventListener("submit", function(event) {
     if (!feed_login.value || !feed_mail.value) {
        event.preventDefault();
        feed_modal.classList.add("modal-error");
    }
});





(function () {

  ymaps.ready(init);
  var myMap;

  function init() {
    myMap = new ymaps.Map('map', {
        center: [59.938429885190054, 30.32991749740603],
        zoom: [16],
        controls: []
      }),
      myMap.behaviors.disable('scrollZoom');
    myMap.controls.add('zoomControl');

    myPlacemark = new ymaps.Placemark([59.93866675783276,30.32307250000002], {
      hintContent: 'г. Санкт-Петербург, ул. Б. Конюшенная, д. 19/8',
    }, {
      iconLayout: 'default#image',
      iconImageHref: './img/map_marker.png',
      iconImageSize: [218, 142],
      iconImageOffset: [-38, -125]
    });

    myMap.geoObjects.add(myPlacemark);
  }
  })();
