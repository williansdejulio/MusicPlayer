app.config(function ($locationProvider, $routeProvider) {

    $routeProvider
        .when('/splash', {
            templateUrl: 'pages/splash.html'
        })
        .when('/login', {
            templateUrl: 'pages/login.html',
            controller: 'loginController'
        })
        .when('/home', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })
        .when('/esqueceu-sua-senha', {
            templateUrl: 'pages/esqueceu-sua-senha.html',
            controller: 'esqueceuSuaSenhaController'
        })
        .when('/musicas', {
            templateUrl: 'pages/musica.html',
            controller: 'musicaController'
        })
        .when('/playlists', {
            templateUrl: 'pages/playlist.html',
            controller: 'playlistController'
        })
});