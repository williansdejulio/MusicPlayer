app.controller("loginController", function ($scope, $http, utilService) {
    $("html, body").scrollTop(0);

    $scope.configuration_message = "";
    $scope.showLoading = false;

    var authorization = utilService.getToken();
    if (authorization != null) {
        window.location.replace("#/home");
    }

    document.getElementById('body').style.transition = "";

    $scope.logar = function (login, senha) {
        $scope.showLoading = true;
        window.location.replace("#/home");

        /*
        var data = "username=" + login + "&password=" + senha + "&login_type=TESTE&grant_type=password";

        $http.post(endpoint + "Token", data).then(function (response) {
            console.log("LOGIN SUCCESSFUL: " + response);
            localStorage.setItem("token_authorization", JSON.stringify(response.data));
            window.location.replace("#/home");

        }, function (response) {
            // TODO: SHOW LABEL LOGIN FAILED
            console.log("LOGIN FAILED: " + response);

            $scope.showLoading = false;
        });
        */
    }

});