'use strict';

angular.module('creatingAppsWithAngularNodeAndTokenAuthenticationApp')
  .controller('HeaderCtrl', function ($scope, $auth) {
    $scope.isAuthenticated = $auth.isAuthenticated;
  });
