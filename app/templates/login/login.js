movieDBApp.controller('LoginController', function LoginController($scope, $timeout, $location, loginService) {
    $scope.user = {};
    $scope.message = '';

    $scope.clear = () => {
        $scope.user = {};
    }
    $scope.login = () => {
        console.log("User saved scope:", $scope.user);
        loginService.login($scope.user, (res) => {
            //Success
            console.log("Success:", res);
            $scope.message = "You are successfully logged in! You will be redirected in 3 sec...";
            $timeout(() => $location.url('/movies'), 3000);
        }, (error) => {
            //Failure
            console.log("Error:", error);
            $scope.message = "Wrong username/password";
        });
        $scope.user = {};
    }
});