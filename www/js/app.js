var app = angular.module("AppTest", ["ngRoute"]);

var localRootFolder = "www";

//var endpoint = "http://localhost:50078/"; // LOCAL - TESTE
var endpoint = "http://18.228.89.141/";  // HOMOLOGAÇÃO

app.run(["$rootScope", function($rootScope) {
    
    if (platform == "browser") {
        localRootFolder = "www";
    } else if (platform == "android") {
        localRootFolder = "file:///android_asset/www";
    }

    $rootScope.id_interval;
    $rootScope.aula_nome = "Música Teste";
    $rootScope.cd_nome = "--";
    $rootScope.playing = false;

    $rootScope.sound = new Howl({
        //src: localRootFolder + "/songs/psycho.mp3",
        src: "http://18.228.89.141/upload/sedated.mp3", // MÚSICA START
        html5: true,
        onplay: function () {
            $rootScope.id_interval = setInterval(function() {
                
            }, 200);
        },
        onloaderror: function (err) {
            console.log("ERR: " + err);
        },
        onpause: function() {
            clearInterval($rootScope.id_interval);
        }
    });

    $rootScope.playPause = function() {
        if ($rootScope.sound.playing()) {
            $rootScope.sound.pause();
        } else {
            $rootScope.idSound = $rootScope.sound.play();
        }
    };

    $rootScope.song_rate = 1;

    $rootScope.increaseRate = function() {
        $rootScope.song_rate += 0.05; //fazer maximo (4, actualrate + 0.05)
        $rootScope.sound.rate($rootScope.song_rate);
    }

    $rootScope.decreaseRate = function() {
        $rootScope.song_rate -= 0.05; //fazer minimo (0.5, actualrate - 0.05)
        $rootScope.sound.rate($rootScope.song_rate);
    }
    
}]);
