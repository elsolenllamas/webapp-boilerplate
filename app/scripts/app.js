'use strict';

angular.module('webapp', [
  'ngCookies',
  'ngResource',
  'ngAnimate',
  'ui.router',
  'ionic'
])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/');
  $stateProvider
  .state('start', {
    url: '/',
    templateUrl: 'views/main.html',
    controller: 'MainmenuCtrl'
  });
}])

.run(['$ionicPlatform', function($ionicPlatform) {

  $ionicPlatform.ready(function () {
    /*global navigator*/
    if (navigator && navigator.splashscreen) {
      navigator.splashscreen.hide();
    }
  });

}]);
