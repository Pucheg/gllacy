

var feed_open = document.querySelector(".feedback-btn");
var feed_modal = document.querySelector(".pop-up_feedback");
var feed_close = feed_modal.querySelector(".close-popup");
var feed_form = feed_modal.querySelector("form");
var feed_login = feed_modal.querySelector(".feedback [name=user-name]");
var feed_mail = feed_modal.querySelector(".feedback [name=email]");
var overlay = document.querySelector(".feed-overlay");
var index_banner = document.querySelector(".page-bg");
var toggle_banner = document.querySelectorAll(".slide-toggle_item");

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

overlay.addEventListener("click", function(event){
    event.preventDefault();
    if (feed_modal.classList.contains("show-modal")) {
        feed_modal.classList.remove("show-modal");}
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

banner_toggle=function() {
    var num = this.dataset.numb;
    for (var i = 0; i < toggle_banner.length; i++) {
        toggle_banner[i].classList.remove("current");
        var del_num = i + 1;
        index_banner.classList.remove("slide" + del_num);
    }
    this.classList.add("current");
    index_banner.classList.add("slide" + num);
    }
for (var i = 0; i < toggle_banner.length; i++){
    toggle_banner[i].setAttribute('data-numb', i+1);
    toggle_banner[i].addEventListener('click', banner_toggle);
}

// YANDEX MAP
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
      iconImageHref: '..img/map_marker.png',
      iconImageSize: [218, 142],
      iconImageOffset: [-38, -125]
    });

    myMap.geoObjects.add(myPlacemark);
  }
