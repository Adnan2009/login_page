angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  .state('login', {
    url: "/login",
    templateUrl: 'templates/login.html',
     controller: 'loginCtrl'
})
.state('register', {
    url: "/register",
    templateUrl: 'templates/register.html',
     controller: 'registerCtrl'
})

.state('signout', {
    url: "/signout",
    templateUrl: 'templates/signout.html',
     controller: 'signoutCtrl'
})



$urlRouterProvider.otherwise('/login');

})