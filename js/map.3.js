$(document).ready(function () {
  $("#map_it").click(function (event) {
    
    //destination of the toystore
    var destinationLatLng = new google.maps.LatLng(37.739045, -122.468293);
    // these are the properties for the map I want to create
    
    var myMapDiv = document.getElementById("googleMap");
    if(myMapDiv) {
      myMapDiv.style.display = "block";
    }
    
    navigator.geolocation.getCurrentPosition(function (pos) {
       
      //get the current lat and lng of user
      var lat = pos.coords.latitude;
      var lng = pos.coords.longitude;
      $("#googleMap").before("<p><br>latitude: " + lat + " <br>longitude: " + lng + "</p>");
      //format these values to use when creating google map
      var currentLatLng = new google.maps.LatLng(lat, lng);
      var mapProp = {
        center: currentLatLng,
        zoom: 19,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      //this will be the newly created map inside the div
      var currentMap = new google.maps.Map(myMapDiv, mapProp);
      
      //add a marker to the current map
      new google.maps.Marker(
        {
          map: currentMap,
          animation: google.maps.Animation.DROP,
          position: currentLatLng
        });
     var directionsDisplay = 
      new google.maps.DirectionsRenderer({ map: currentMap });
     var request = {
       destination: destinationLatLng,
       origin: currentLatLng,
       travelMode: google.maps.TravelMode.DRIVING
      };
      
      var directionsService = new google.maps.DirectionsService();
      directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          // Display the route on the map.
          directionsDisplay.setDirections(response);
        }
      });// end of direcection service.route
    });// end of getCurrentPosition


    event.preventDefault(); // prevent page default behavior

  });//end of click event listener*/

});//end of document.ready(); 
