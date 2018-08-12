app.controller("playerController", function ($scope, utilService) {
    $("html, body").scrollTop(0); 
    
    var params = utilService.getParameters();
    console.log(params);
    
    $scope.init = function() {
        setTimeout(function() {
            if (params.id_aula != undefined) {
                $scope.$apply(function () {
                    var file = params.arquivo.replace("../", endpoint + "/");
                    $scope.sound.changeSrc(file);
                    $scope.sound.play();
                    $scope.aula_nome = params.nome;
                    $scope.cd_nome = params.cdnome;
               });
            }
        }, 1);
    }

    $("#slider").roundSlider({
        radius: 115,
        width: 55,
        handleSize: "55,20",
        handleShape: "square",
        sliderType: "default",
        value: 91
    });

});