'use strict';

angular.module('creatingAppsWithAngularNodeAndTokenAuthenticationApp')
  .service('auth', function ($http, API_URL, authToken, $state, $window) {

      function authSuccessful(res){
          authToken.setToken(res.token);
          $state.go('main');
      }

      this.login = function(email, password){
          return $http.post(API_URL + 'login', {email:email, password:password})
          .success(authSuccessful);
      }

      this.register = function(email,password){
          return $http.post(API_URL + 'register', {
              email: email,
              password: password
          }).success(authSuccessful);
      }

      this.googleAuth = function(){

          var url = "https://accounts.google.com/o/oauth2/auth";
          var options = "width=500, height=500, left=" + ($window.outerWidth - 500) / 2 + ", top=" + ($window.outerWidth - 500) / 2.5;

          $window.open(url, '', options);
      }

  });
