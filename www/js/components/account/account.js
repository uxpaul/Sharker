((app)=>{

  app.component('account', {
    templateUrl:'js/components/account/account.html',
    controller:function(){

      this.settings = {
          enableFriends: true
        };

    }
  })
})(angular.module('app.account'))
