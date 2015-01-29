'use strict';

angular.module('creatingAppsWithAngularNodeAndTokenAuthenticationApp')
  .controller('RegisterCtrl', function ($scope, $rootScope, $http, alert) {
    $scope.submit = function(){

        var url = 'http://localhost:3000/register';
        var user = {name: 'Alex'};

        $http.post(url, user)
        .success(function(res){
            alert('success', 'Ok!', 'You are now registered');
        })
        .error(function(err){
            alert('warning', 'Opps!', 'Could not register');
        });
    };
  });
