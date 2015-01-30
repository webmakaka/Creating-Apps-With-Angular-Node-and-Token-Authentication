'use strict';

angular.module('creatingAppsWithAngularNodeAndTokenAuthenticationApp')
  .factory('authInterceptor', function (authToken) {

    return {
      request: function(config){
          var token = authToken.getToken();


          console.log("-----------authInterceptor.js Before REQUERST--------------");
          console.log("token: " + token);
          console.log("---------------------------");

          if(token){
              config.headers.Authorization = '!!!!!!!!!! ' + token;

              console.log("-----------authInterceptor.js After REQUERST--------------");
              console.log("token: " + token);
              console.log("---------------------------");
          }



          return config;
      },
      response: function(response){
          return response;
        }
    };
  });
