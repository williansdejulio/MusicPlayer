app.config(function ($locationProvider, $routeProvider) {

    $routeProvider
        .when('/splash', {
            templateUrl: 'pages/splash.html'
        })
        .when('/login', {
            templateUrl: 'pages/login.html',
            controller: 'loginController'
        })
        .when('/player', {
            templateUrl: 'pages/player.html',
            controller: 'playerController'
        })
        .when('/esqueceu-sua-senha', {
            templateUrl: 'pages/esqueceu-sua-senha.html',
            controller: 'esqueceuSuaSenhaController'
        })
        .when('/aula', {
            templateUrl: 'pages/aula.html',
            controller: 'aulaController'
        })
        .when('/cd', {
            templateUrl: 'pages/cd.html',
            controller: 'cdController'
        })
});