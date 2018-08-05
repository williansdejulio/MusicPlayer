var app = angular.module("AppTest", ['ngRoute']);

//var endpoint = "http://localhost:45455/API/"; // LOCAL
var endpoint = "http://52.67.50.174:81/API/";  // HOMOLOGAÇÃO

app.run(['$rootScope', function($rootScope) {

    $rootScope.idInterval;
    $rootScope.idSound;
    $rootScope.actualRate = 1;

    $rootScope.sound = new Howl({
        src: '../../songs/yellow.mp3',
        html5: true,
        onplay: function () {
            $rootScope.intervalID = setInterval(function() {
                console.log("PLAY: " + $rootScope.sound.seek());
            }, 200);
        },
        onpause: function() {
            clearInterval($rootScope.intervalID);
        }
    });

    $rootScope.playPause = function() {
        if ($rootScope.sound.playing()) {
            $rootScope.sound.pause();
        } else {
            $rootScope.idSound = $rootScope.sound.play();
        }
    };

  }]);

