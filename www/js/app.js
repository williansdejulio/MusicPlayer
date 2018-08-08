var app = angular.module("AppTest", ['ngRoute']);

//var endpoint = "http://localhost:45455/API/"; // LOCAL
var endpoint = "http://52.67.50.174:81/API/";  // HOMOLOGAÇÃO

app.run(['$rootScope', function($rootScope) {

    $rootScope.idInterval;
    $rootScope.idSound;
    $rootScope.actualRate = 1;

    $rootScope.sound = new Howl({
        //src: 'file:///android_asset/www/songs/psycho.mp3', // -- ANDROID --
        src: 'www/songs/psycho.mp3',                   // -- PC --
        html5: true,
        onplay: function () {
            $rootScope.idInterval = setInterval(function() {
                console.log("PLAY: " + $rootScope.sound);
            }, 200);
        },
        onloaderror: function (err) {
            console.log("ERR: " + err);
        },
        onpause: function() {
            clearInterval($rootScope.idInterval);
        }
    });

    $rootScope.playPause = function() {
        if ($rootScope.sound.playing()) {
            $rootScope.sound.pause();
        } else {
            $rootScope.idSound = $rootScope.sound.play();
        }
    };

    $rootScope.increaseRate = function() {
        $rootScope.actualRate += 0.05; //fazer maximo (4, actualrate + 0.05)
        $rootScope.sound.rate($rootScope.actualRate);
    }

    $rootScope.decreaseRate = function() {
        $rootScope.actualRate -= 0.05; //fazer minimo (0.5, actualrate - 0.05)
        $rootScope.sound.rate($rootScope.actualRate);
    }
}]);

