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
    };

    const options = {
      snap: 45,
      clockwise: false,
      startPos: "top",
    };

    const cs = new CircleSlider("speed-circle-slider", options);
});