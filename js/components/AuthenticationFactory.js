app.factory('AuthenticationFactory', ['$rootScope', '$localStorage',
function($rootScope, $localStorage) {
  var factory = {};
    var twitterAPI = "api.twitter.com",
        instagramAPI = "api.instagram.com",
        facebookAPI = "api.twitter.com";


    factory.login = function () {
      console.log("Login");
      
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
