app.factory('AuthenticationFactory', ['$rootScope', '$state', 'ngStorage', '$http', '$auth',
function($rootScope, $state, ngStorage, $http, $auth) {
  var factory = {};
    var twitterAPI = "api.twitter.com",
        instagramAPI = "api.instagram.com",
        facebookAPI = "api.twitter.com";


    factory.login = function () {
      console.log("Login");
        $auth.authenticate(factory.user.platform).then(function() {
          console.log("Login Success", ngStorage);
          $state.go("default");
        })
        .catch(function(error) {
          if (error.error) {
            // Popup error - invalid redirect_uri, pressed cancel button, etc.
            toastr.error(error.error);
          } else if (error.data) {
            // HTTP response error from server
            toastr.error(error.data.message, error.status);
          } else {
            toastr.error(error);
          }
        });;
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
