app.controller("playerController", function ($scope, $timeout, utilService, playerService) {
    $("html, body").scrollTop(0); 

    $scope.playing;
    $scope.aulaNome;
    $scope.cdNome;
    $scope.strDuration = "0:00:00";
    $scope.strCurrentPos = "0:00:00";

    var idInterval;
    var duration;
    
    function updateRange() {
        $scope.$apply(function() {
            var currentPos = playerService.getPos();
            //console.log(currentPos);
            var date = new Date(null);
            date.setSeconds(currentPos);
            $scope.strCurrentPos = date.toISOString().substr(12, 7);
            $("#musicRange").val(currentPos / duration * 100);
        });
    }

    function startUpdatingRange() {
        idInterval = setInterval(updateRange, 500);
    }

    function stopUpdatingRange() {
        clearInterval(idInterval);
    }

    function loadDuration() {
        duration = playerService.getDuration();
        var date = new Date(null);
        date.setSeconds(duration);
        $scope.strDuration = date.toISOString().substr(12, 7);
        updateRange();
    }

    $scope.init = function() {
        var params = utilService.getParameters();

        console.log(params);
        if (params.playing || playerService.isPlaying()) {
            $scope.playing = true;
            startUpdatingRange();
        } else {
            $scope.playing = false;
        }

        $scope.aulaNome = playerService.getAulaNome();
        $scope.cdNome = playerService.getCDNome();

        playerService.getSound().once('load', loadDuration);
        playerService.getSound().once('end', function() {
            $scope.$apply(function() {
                $scope.playing = false;
                strCurrentPos = 0;
                stopUpdatingRange();
                $timeout(updateRange, 1);
            });
        });
    }

    $scope.togglePlayPause = function() {
        $scope.playing = playerService.togglePlayPause();
        console.log($scope.playing);

        if ($scope.playing) 
            startUpdatingRange();
        else
            stopUpdatingRange();
    }

    $scope.setPos = function($event) {
        var posToSet = $scope.rangeValue * duration / 100.0;
        //console.log($scope.rangeValue * duration / 100.0);

        playerService.setPos(posToSet);
        playerService.getSound().once('load', updateRange);
    }

    $scope.setBpm = function(event) {
        var newBpm = event.value;
        var realBpm = playerService.getBpm();
        var newSpeed = newBpm / realBpm;
        playerService.getSound().rate(newSpeed);
    }

    $scope.eventPrint = function($event) {
        console.log($event);
    }

    $("#slider").roundSlider({
        radius: 115,
        width: 55,
        max: 4.0 * playerService.getBpm(), // BPM DA MUSICA * 4.0 (que eh o maximo do howler)
        min: 0.5 * playerService.getBpm(), // BPM DA MUSICA * 0.5 (que eh o minimo do howler)
        step: 0.1,
        endAngle: 3.5 * playerService.getBpm() * 20, // DEVE SER SEMPRE MAX * 20 (se alterar aqui vai ter que alterar na linha 7 do roundslider tbm) PRA TER UM CONTROLE DE STEP BOM
        handleSize: "55,20",
        handleShape: "square",
        sliderType: "default",
        value: playerService.getBpm(),
        drag: $scope.setBpm
    });
});