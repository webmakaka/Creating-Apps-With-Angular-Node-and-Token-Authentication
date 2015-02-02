'use strict';

angular.module('creatingAppsWithAngularNodeAndTokenAuthenticationApp')
  .controller('LogoutCtrl', function ($auth, $state) {
      $auth.logout();
      $state.go('main');
  });
 
