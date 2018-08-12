app.controller("aulaController", function ($scope, $http, utilService) {
    $("html, body").scrollTop(0);    

    var params = utilService.getParameters();
    console.log(params);

    $scope.aulas = [];
    $scope.loading = true;

    $scope.init = function() {
        var token_authorization = JSON.parse(localStorage.token_authorization); // USER INFO
        
        setTimeout(function() {
            var data = "";
            if (params.id_cd != undefined) {
                data = "?idCD=" + params.id_cd;
            }
            $http.get(endpoint + "API/Aula" + data).then(function (result) {
                $scope.aulas = result.data;
                $scope.loading = false;
            });
        }, 1);
    }

    $scope.goToPlayer = function(aula) {
        var cdnome = (aula.cd.nome != undefined) ? aula.cd.nome : "";
        var bpm = (aula.bpm != undefined) ? aula.bpm : "";
        var sendToPlayer = encodeURIComponent("id_aula=" + aula.id_aula + "&nome=" + aula.nome + "&arquivo=" + aula.arquivo + "&bpm=" + bpm + "&cdnome=" + cdnome);
       
        window.location.href = "#/player?" + sendToPlayer;
    }

});
