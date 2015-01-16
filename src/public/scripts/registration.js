angular.module('Registration', [])
  .controller('RegistrationForm', function($scope, $http) {
    $scope.registration = {};

    $scope.submit = function($event) {
      $event.preventDefault();

      $http.post('https://hacks-for-snacks-services.herokuapp.com/register', $scope.registration)
        .success(function() {
          $scope.hidden = true;
          $scope.errors = [];
        })
        .error(function(data) {
          $scope.errors = data.errors;
        });

    }
  });
