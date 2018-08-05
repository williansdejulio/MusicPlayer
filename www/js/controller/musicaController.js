app.controller("musicaController", function ($scope, musicService) {
    $("html, body").scrollTop(0);    

    $scope.musicas = [];
    x = [];

    $scope.loadMusicas = function () {

        var token_authorization = JSON.parse(localStorage.token_authorization); // USER INFO

        musicService.getSongs().then(function (result) {
            $scope.musicas = result;
            x = result; // TESTE
            $scope.$apply();
        });        
    }

});