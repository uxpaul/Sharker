angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicLoading, $compile) {

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
infowindow.open(map,marker);
});


//----

google.maps.event.addDomListener(window, 'load');

$scope.clickTest = function() {
   alert(`Tu es à ${myLatlng}`)
 };




    navigator.geolocation.getCurrentPosition(function (pos) {
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
      infowindow.open(map,marker);
      });
      //----

      google.maps.event.addDomListener(window, 'load');

    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });


  };

})



.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  $scope.$on('$ionicView.enter', function(e) {
  });

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, $ionicActionSheet, $ionicModal) {
  $scope.chat = Chats.get($stateParams.chatId);

  $scope.showActionSheet = function(){
    $ionicActionSheet.show ({
      buttons : [{
        text : '<b>Share </b>'
      }, {
        text : 'Move'
      }],
      destructiveText : 'Delete',
      cancelText:'Cancel',
      titleText: 'Modify your album',
      cancel : function(){
        alert("Cancel clicked")
      },
      destructiveButtonClicked : function(){
        alert("*** Deleted  ***")
      },
      buttonClicked: function(index, buttonObj) {
        if(index === 0) {
          alert("Clicked Share");
          return false;
        }
          alert('Clicked Move');
        }

    })
  }

  $ionicModal.fromTemplateUrl('my-modal.html',{
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal){
    $scope.modal = modal
  })

  $scope.openModal = function(){
    $scope.modal.show()
  }

  $scope.closeModal = function(){
    $scope.modal.hide()
  }


})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
