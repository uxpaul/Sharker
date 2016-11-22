((app) => {

  app.component('home', {
    templateUrl: 'js/components/home/home.html',
    controller: function($scope, $ionicLoading, $compile) {


      var myLatlng = new google.maps.LatLng(43.07493, -89.381388)

      $scope.mapCreated = function(map) {
        $scope.map = map;


        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Voir les détails</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Test'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map, marker);
        });


        //----

        google.maps.event.addDomListener(window, 'load');

        $scope.clickTest = function() {
          alert(`Tu es à ${myLatlng}`)
        };




        navigator.geolocation.getCurrentPosition(function(pos) {
          console.log('Got pos', pos);
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $ionicLoading.hide();

          var marker = new google.maps.Marker({
            position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
            map: map,
            title: 'test'
          });

          var infowindow = new google.maps.InfoWindow({
            content: "Ici, c'est là où tu te trouve"
          });


          google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
          });
          //----

          google.maps.event.addDomListener(window, 'load');

        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });


      };



    }

  })


})(angular.module('app.home'))
