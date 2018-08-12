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
            console.log(currentPos);
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
        })
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
        console.log($scope.rangeValue * duration / 100.0);

        playerService.setPos(posToSet);
        playerService.getSound().once('load', updateRange);
    }

    $scope.eventPrint = function($event) {
        console.log($event);
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