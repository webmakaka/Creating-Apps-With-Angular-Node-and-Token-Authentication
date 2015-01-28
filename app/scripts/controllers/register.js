'use strict';

angular.module('creatingAppsWithAngularNodeAndTokenAuthenticationApp')
  .controller('RegisterCtrl', function ($scope, $http) {
    $scope.submit = function(){

        var url = '/';
        var user = {};
        
        $http.post(url, user)
        .success(res){
            console.log("good");
        }
        .error(function(err){
            console.log("bad");
        });
    }
  });
