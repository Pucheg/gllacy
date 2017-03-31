
(function() {
var open_feed = document.querySelector(".feedback-btn");
var modal_feed = document.querySelector(".pop-up_feedback");
var close_feed = modal_feed.querySelector(".close-popup");
var feed_login = modal_feed.querySelector("[name=user-name]");
open_feed.addEventListener("click", function(event){
    event.preventDefault();
    modal_feed.classList.add("show-modal");
    feed_login.focus();
});
close_feed.addEventListener("click", function(event){
    event.preventDefault();
    modal_feed.classList.remove("show-modal");
});
})();

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
