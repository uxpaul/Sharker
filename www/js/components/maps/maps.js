((app) => {

  app.component('map', {
    templateUrl: 'js/components/maps/maps.html',
    bindings: {
      onCreate: "&"
    },
    controller: function($scope) {

      function initialize() {

        var myLatlng = new google.maps.LatLng(43.07493, -89.381388)

        var mapOptions = {
          center: new google.maps.LatLng(43.07493, -89.381388),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map($element[0], mapOptions);

        $scope.onCreate({
          map: map
        });

        // Stop the side bar from dragging when mousedown/tapdown on the map
        google.maps.event.addDomListener($element[0], 'mousedown', function(e) {
          e.preventDefault();
          return false;
        });

      }


      if (document.readyState === "complete") {
        initialize();
      } else {
        google.maps.event.addDomListener(window, 'load', initialize);
      }

    }
  })

})(angular.module('app.maps'))
