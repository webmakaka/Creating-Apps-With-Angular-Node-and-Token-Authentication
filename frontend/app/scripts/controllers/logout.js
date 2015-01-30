'use strict';

angular.module('creatingAppsWithAngularNodeAndTokenAuthenticationApp')
  .controller('LogoutCtrl', function (authToken, $state) {
      authToken.removeToken();
      $state.go('main');
  });
