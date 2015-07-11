var myApp = angular.module('myApp', ['ionic','ngSanitize']);

myApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});

myApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'menuCtrl'
  })

  .state('app.about', {
    url: "/about",
    views: {
      'menuContent': {
        templateUrl: "templates/about.html",
        controller:'aboutCtrl'
      }
    }
  })

  .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "templates/home.html",
        controller: 'homeCtrl'
      }
    }
  })
    .state('app.class', {
      url: "/class/:class_id",
      views: {
        'menuContent': {
          templateUrl: "templates/class.html",
          controller: 'classCtrl'
        }
      }
    })
  .state('app.all_list', {
    url: "/all_list",
    views: {
      'menuContent': {
        templateUrl: "templates/all_list.html",
        controller: 'all_listCtrl'
      }
    }
  })
  .state('app.all_list2', {
    url: "/all_list2",
    views: {
      'menuContent': {
        templateUrl: "templates/all_list2.html",
        controller: 'all_list2Ctrl'
      }
    }
  })
  .state('app.read_article', {
    url: "/read_article/:id",
    views: {
      'menuContent': {
        templateUrl: "templates/read_article.html",
        controller: 'read_articleCtrl'
      }
    }
  })
  .state('app.app_about', {
      url: "/app_about",
      views: {
        'menuContent': {
          templateUrl: "templates/app_about.html",
          controller: 'app_aboutCtrl'
        }
      }
    });
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
