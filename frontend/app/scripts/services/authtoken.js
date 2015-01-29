'use strict';

angular.module('creatingAppsWithAngularNodeAndTokenAuthenticationApp')
  .factory('authToken', function($window) {


    var storage = $window.localStorage;

    var cachedToken;

    return {
      setToken: function(token){
          cachedToken = token;
          storage.setItem('userToken', token);
      },
      getToken: function(){
          if(!cachedToken){
              cachedToken = storage.getItem('userToken');
          }
          return cachedToken;
      },
      isAuthenticated: function(){
          return !!this.getToken();
      }
    };
  });
