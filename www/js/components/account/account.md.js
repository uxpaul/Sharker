((app)=>{

  app.config(['$stateProvider', ($stateProvider)=>{
    $stateProvider.state('tab.account', {
      url:'/account',
      views: {
        'tab-account': {
          template:'<account/>'
        }
      }
    })
  }])

})(angular.module('app.account', []))
