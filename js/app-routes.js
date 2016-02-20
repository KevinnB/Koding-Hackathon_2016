app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  //
  $locationProvider.html5Mode(false);
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/dashboard");
  //
  // Now set up the states
  $stateProvider
    .state('default', {
      url: "/dashboard",
      templateUrl: "js/pages/dashboard/dashboard.html",
      page: {
        auth: false,   // This needs to be true
      }
    })
    .state('login', {
      url: "/login",
      templateUrl: "js/pages/login/login.html",
      page: {
        auth: false,
      }
    });
});
