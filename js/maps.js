var map;
function inicio() {
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(40.596500, 0.445445),
    disableDefaultUI: true
  };

  map = new google.maps.Map(document.getElementById('mapa'),mapOptions);
};

google.maps.event.addDomListener(window, 'load', inicio);