app.controller("downloadsController", function ($scope, $timeout, $http) {
    $("html, body").scrollTop(0);    

    $scope.cds = [];
    $scope.loading = true;

    $scope.init = function() {
        // var token_authorization = JSON.parse(localStorage.token_authorization); // USER INFO
        
        $timeout(function () {
            $http.get(endpoint + "API/CD").then(function (result) {
                $scope.cds = result.data;
                $scope.loading = false;
            });
        }, 1);
    }

    $scope.goToAula = function (id_cd) {
        window.location.href = "#/aula?id_cd=" + id_cd;
    }

});