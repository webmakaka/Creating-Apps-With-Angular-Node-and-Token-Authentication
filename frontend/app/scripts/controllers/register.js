'use strict';

angular.module('creatingAppsWithAngularNodeAndTokenAuthenticationApp')
  .controller('RegisterCtrl', function ($scope, $rootScope, $http, alert, authToken, API_URL) {
    $scope.submit = function(){

        var url = API_URL + 'register';
        var user = {
            email: $scope.email,
            password: $scope.password
        };

        $http.post(url, user)
        .success(function(res){
            alert('success', 'Account Created!', 'Welcome, ' + res.user.email + '!');
            authToken.setToken(res.token);
        })
        .error(function(err){
            alert('warning', 'Something went wrong :(', err.message);
        });
    };
  });
