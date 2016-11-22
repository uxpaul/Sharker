((app)=>{
  'use strict'
  app.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider)=>{
    $urlRouterProvider.otherwise('/')
    $stateProvider.state('tab', {
    url: '',
    abstract: true,
    template: '<tabs></tabs>'

    })
  }])
})(angular.module('app.tab'))
