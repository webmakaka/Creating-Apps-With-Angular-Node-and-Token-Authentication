'use strict';

angular.module('creatingAppsWithAngularNodeAndTokenAuthenticationApp')
  .controller('JobsCtrl', function ($scope, $http, API_URL, alert) {

    $http.get(API_URL + 'jobs').success(function(){
        $scope.jobs = jobs;
    }).error(function(err){
        alert('warning', "Unable to get jobs", err.message);
    })
  });
