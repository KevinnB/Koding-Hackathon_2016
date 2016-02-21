var app = angular.module('socialMediaQuery',
  ['ngStorage',
   'infinite-scroll',
   'satellizer',
   'ui.bootstrap',
   'ui.router',
]);

app.config(function($authProvider) {

    $authProvider.facebook({
      clientId: 934268410020724
    });

    $authProvider.instagram({
      clientId: 'Instagram Client ID'
    });

    $authProvider.twitter({
      clientId: 'Twitter Client ID'
    });

    // No additional setup required for Twitter

  });
