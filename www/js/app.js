var app = angular.module("AppTest", ["ngRoute", "hmTouchEvents"]);

var localRootFolder = "www";

//var endpoint = "http://localhost:50078/"; // LOCAL - TESTE
var endpoint = "http://18.228.89.141/";  // HOMOLOGAÇÃO

app.run(["$rootScope", function($rootScope) {
    
    if (platform == "browser") {
        localRootFolder = "www";
    } else if (platform == "android") {
        localRootFolder = "file:///android_asset/www";
    }
    
    /*
    $rootScope.song_rate = 1;

    $rootScope.increaseRate = function() {
        $rootScope.song_rate += 0.05; //fazer maximo (4, actualrate + 0.05)
        $rootScope.sound.rate($rootScope.song_rate);
    }

    $rootScope.decreaseRate = function() {
        $rootScope.song_rate -= 0.05; //fazer minimo (0.5, actualrate - 0.05)
        $rootScope.sound.rate($rootScope.song_rate);
    }
    */
}]);
