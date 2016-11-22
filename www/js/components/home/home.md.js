((app)=>{

  app.config(['$stateProvider', ($stateProvider)=>{
    $stateProvider.state('tab.home', {
      url: '/',
      views: {
        'tab-home': {
          template: '<home></home>'
        }
      }
    })
  }])

})(angular.module('app.home', []))
