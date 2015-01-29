'use strict';


angular.module('creatingAppsWithAngularNodeAndTokenAuthenticationApp')
  .controller('HeaderCtrl', function ($scope, authToken) {
    $scope.isAuthenticated = authToken.isAuthenticated;
  });
