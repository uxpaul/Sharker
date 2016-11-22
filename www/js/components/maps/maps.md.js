((app)=>{

  app.config(['$stateProvider', ($stateProvider)=>{
    $stateProvider.state('tab.maps', {
      url:'/maps',
      template:'<map/>'
    })
  }])

})(angular.module('app.maps', []))
