
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

    $("#slider").roundSlider({
        radius: 100,
        width: 40,
        handleSize: "40,20",
        handleShape: "square",
        sliderType: "default",
        value: 91
    });
});