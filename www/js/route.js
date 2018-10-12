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
        .when('/cd-especial', {
            templateUrl: 'pages/cd-especial.html',
            controller: 'cdEspecialController'
        })
        .when('/downloads', {
            templateUrl: 'pages/downloads.html',
            controller: 'downloadsController'
        })
        .when('/notificacao', {
            templateUrl: 'pages/notificacao.html',
            controller: 'notificacaoController'
        })
        .when('/selecao-categoria', {
            templateUrl: 'pages/selecao-categoria.html',
            controller: 'selecaoCategoriaController'
        })
        .when('/selecao-professor', {
            templateUrl: 'pages/selecao-professor.html',
            controller: 'selecaoProfessorController'
        })
        .when('/termos', {
            templateUrl: 'pages/termos.html',
            controller: 'termosController'
        })
});