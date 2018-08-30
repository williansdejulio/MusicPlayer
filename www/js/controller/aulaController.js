app.controller("aulaController", function ($scope, $http, $timeout, utilService, playerService, aulaService) {
    $("html, body").scrollTop(0);    

    var params = utilService.getParameters();

    $scope.aulas = [];
    $scope.loading = true;
    $scope.hasFilters = false;
    $scope.filterCDNome = "";

    $scope.init = function() {
        // var token_authorization = JSON.parse(localStorage.token_authorization); // USER INFO
        
        $timeout(function() {
            var data = "";

            if (params.id_cd != undefined) {
                data = "?idCD=" + params.id_cd;
            }

            loadAulas(data);
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

    function loadAulas(data) {
        /* INICIO - TESTE SQLITE ----------------------- \/ \/ \/ \/ \/ \/ \/ \/ \/ */

        var objAula_TESTE = {"id_aula":23,"nome":"Habits - Tove Lo","cd":{"id_cd":8,"nome":"teste","duracao":0,"imagem":"../upload/Screenshot from 2018-08-01 16-05-38.png","ativo":true},"bpm":110,"arquivo":"../upload/Tove Lo - Habits (Stay High)[1].mp3","ativo":true};
        
        aulaService.insertAula(objAula_TESTE).then(function(idAula) {
            // CASO FOR FAZER ALGO APÓS O INSERT, USA O THEN
            // NESSE CASO, EU VOU SELECIONAR O OBJETO QUE EU ACABEI DE INSERIR (USANDO O GETAULA)
            
            aulaService.getAula(idAula).then(function(objAula) {
                console.log(objAula);
            });
        });

        /* FIM - TESTE SQLITE -------------------------- /\ /\ /\ /\ /\ /\ /\ /\ /\ */

        $http.get(endpoint + "API/Aula" + data).then(function (result) {
            $scope.aulas = result.data;
            $scope.loading = false;
            x = result.data;

            if (data != "" && $scope.aulas.length > 0) {
                $scope.filterCDNome = $scope.aulas[0].cd.nome;
                $scope.hasFilters = true;
            }
            console.log(endpoint + "API/Aula" + data);
        });
    }

    $scope.closeFilter = function() {
        loadAulas("");
        $scope.hasFilters = false;
        $scope.filterCDNome = "";
    }

});
