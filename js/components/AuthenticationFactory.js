app.factory('AuthenticationFactory', ['$rootScope', '$http', '$auth',
function($rootScope, $http, $auth) {
  var factory = {};
    var twitterAPI = "api.twitter.com",
        instagramAPI = "api.instagram.com",
        facebookAPI = "api.twitter.com";


    factory.login = function () {
      console.log("Login");
        $auth.authenticate(factory.user.platform);
    };
    factory.logout = function () {

    };
    factory.user = {
      userName: '',
      password: '',
      platform: null,
      isLoggedIn: function () {
        return false;
      }
    };

  return factory;
}]);
