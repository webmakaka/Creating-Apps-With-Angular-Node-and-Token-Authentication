angular.module('creatingAppsWithAngularNodeAndTokenAuthenticationApp').config(function($urlRouterProvider, $stateProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('main', {
        url: '/',
        templateUrl: '/views/main.html'
    })

    .state('register', {
        url: '/register',
        templateUrl: '/views/register.html',
        controller: 'RegisterCtrl'
    })

    .state('jobs', {
        url: '/jobs',
        templateUrl: '/views/jobs.html',
        controller: 'JobsCtrl'
    })

    .state('logout', {
        url: '/logout',
        controller: 'LogoutCtrl'
    });



})

.constant('API_URL', 'http://localhost:3000/')
