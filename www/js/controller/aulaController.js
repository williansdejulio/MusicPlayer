app.controller("aulaController", function ($scope, $http, $timeout, utilService, playerService) {
    $("html, body").scrollTop(0);    

    var params = utilService.getParameters();
    console.log(params);

    $scope.aulas = [];
    $scope.loading = true;

    $scope.init = function() {
        // var token_authorization = JSON.parse(localStorage.token_authorization); // USER INFO
        
        $timeout(function() {
            var data = "";
            if (params.id_cd != undefined) {
                data = "?idCD=" + params.id_cd;
            }
            console.log(endpoint + "API/Aula" + data);
            $http.get(endpoint + "API/Aula" + data).then(function (result) {
                $scope.aulas = result.data;
                $scope.loading = false;
            });
        }, 1);
    }

    $scope.goToPlayer = function(aula) {
        var cdnome = (aula.cd.nome != undefined) ? aula.cd.nome : "";
        var bpm = (aula.bpm != undefined) ? aula.bpm : "";

        var file = aula.arquivo.replace("../", endpoint + "/");
        playerService.changeSrcAndPlay(file);
        playerService.setAulaNome(aula.nome);
        playerService.setCDNome(cdnome);
        playerService.setBpm(bpm);

        window.location.href = "#/player?playing=true";
    }

});
