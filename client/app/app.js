angular.module('pearParty', [
  'pearParty.currentsession',
  'pearParty.pastsessions',
  'pearParty.services',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'app/templates/home.html',
    })
    .when('/start', {
      templateUrl: 'app/templates/startview.html',
      controller: 'CurrentSession'
    })
    .when('/sessions', {
      templateUrl: 'app/templates/pastsessions.html',
      controller: 'PastSessions'
    })
    .when('/pairing', {
      templateUrl: 'app/templates/currentsession.html',
      controller: 'CurrentSession',
    })
    .otherwise({
      redirectTo: '/home'
    });
});