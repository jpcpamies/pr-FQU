var map;
var ctaLayer
function inicio() {
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(40.596500, 0.445445),
    disableDefaultUI: true
  };

  map = new google.maps.Map(document.getElementById('mapa'),mapOptions);
  ctaLayer = new google.maps.KmlLayer({
    url: 'http://gmaps-samples.googlecode.com/svn/trunk/ggeoxml/cta.kml'
  });
  ctaLayer.setMap(map);
};

google.maps.event.addDomListener(window, 'load', inicio);
