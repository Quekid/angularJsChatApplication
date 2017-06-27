(function () {
  // This prevents you from using variables without declaring them first. New in js 1.8.5.
  // Previous js versions ignore it.
  "use strict";

  /**
   * Inject dependancies for the app. 
   */
  var app = angular.module('chatapp', [
    'ui.router',
    'chat'
  ])

  /**
   * App Configuration.
   */
  app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

      // chatLaunch state
      .state('chatLaunch', {
        url: '/chatLaunch',
        views: {
          '': {
            controller: 'chatLaunchCtrl as chatCtrl',
            templateUrl: 'chatApp/view/chatLaunch.html'
          }
        }
      });
     
  })

})();     
