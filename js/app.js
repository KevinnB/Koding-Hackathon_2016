var app = angular.module('socialMediaQuery',
  ['ngStorage',
   'ui.bootstrap',
   'ui.router',
]);


app.run(['$rootScope', function ($rootScope) {
  console.log("Running now")
  
}]);
