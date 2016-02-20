app.controller('LoginController', ['$scope', '$rootScope',
function($scope, $rootScope) {
  console.log("login controller");
    $scope.user = $rootScope.authetication.user;
    $scope.platforms = [
      {id: 1, name: 'Instagram', icon:'fa-instagram'},
      {id: 2, name: 'FaceBook', icon:'fa-facebook-official'},
      {id: 3, name: 'Twitter', icon:'fa-twitter'}
    ];

    $scope.updatePlatform = function (id) {
      $scope.user.platform = id;
    };

    $scope.login = function () {
      $rootScope.authetication.login();
    };
  }]);
