var mapModule = (function ($) {
  function bindEvents() {
    google.maps.event.addDomListener(window, 'load', load);
  }

  function load() {
    var mapOptions = {
      center: {
        lat: 50.172715,
        lng: 18.896748
      },
      zoom: 15,
      scrollwheel: false,
      panControl: false
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var latlng = new google.maps.LatLng(50.172715, 18.896748);
    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title: 'PUH BOMA'
    });
  }

  var init = function () {
    bindEvents();
  };

  return {
    init: init
  };
}(jQuery));
