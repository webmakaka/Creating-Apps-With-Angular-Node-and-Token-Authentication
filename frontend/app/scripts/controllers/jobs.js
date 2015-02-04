'use strict';

angular.module('creatingAppsWithAngularNodeAndTokenAuthenticationApp')
  .controller('JobsCtrl', function ($scope, $http, API_URL, alert) {

    $http.get('http://localhost:1337/job').success(function(jobs){
        $scope.jobs = jobs;
    }).error(function(err){
        alert('warning', 'Unable to get jobs', err.message);
    });
  });
