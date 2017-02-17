(function(){
  var map, marker;

  function initMap(){
    map = new google.maps.Map(document.querySelector('.map-wrapper'), {center : { lat: 42.983233, lng: -81.250866}, zoom:14});

    marker = new google.maps.Marker({
      position: { lat: 42.983233, lng: -81.250866},
      map: map,
      title: "Hello world!"
    });
  }

  initMap();

})();
