app.controller("playerController", function ($scope, musicService) {
    $("html, body").scrollTop(0);    

    $scope.musicas = [];
    teste = [];

    $scope.loadMusicas = function () {

        var token_authorization = JSON.parse(localStorage.token_authorization); // USER INFO

        musicService.getSongs().then(function (result) {
            $scope.musicas = result;
            teste = result; // TESTE
            $scope.$apply();
        });        
    }    

    $scope.increaseRate = function() {
        $rootScope.actualRate += 0.1;
        $rootScope.sound.rate(actualRate, soundPlayID);
    }

    $scope.decreaseRate = function() {
        $rootScope.actualRate -= 0.1;
        $rootScope.sound.rate(actualRate, soundPlayID);
    }

});