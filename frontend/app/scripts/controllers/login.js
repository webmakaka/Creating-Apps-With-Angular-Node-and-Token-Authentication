'use strict';

angular.module('creatingAppsWithAngularNodeAndTokenAuthenticationApp')
  .controller('LoginCtrl', function ($scope, alert, auth) {
      $scope.submit = function(){
          auth.login($scope.email, $scope.password)
              .success(function(res){
                  alert('success', 'Welcome', 'Thanks for coming back ' + res.user.email + '!');
              })
              .error(function(err){
                  alert('warning', 'Something went wrong :(', err.message);
              });
      };

      $scope.google = function(){
          auth.googleAuth().then();
      }
  });
