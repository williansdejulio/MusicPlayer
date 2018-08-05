app.controller("headerController", function ($scope, $location) {
    $("html, body").scrollTop(0);

    /* PEGAR O CAMINHO DA ROTA */
    $scope.pathPage = $location.path();

    /* POPULAR TÍTULO DA PÁGINA */
    $scope.pageTitle = '';
    if ($scope.pathPage == '/player') {
        $scope.pageTitle = 'PLAYER';
    } else if ($scope.pathPage == '/musicas') {
        $scope.pageTitle = 'MÚSICAS';
    } else if ($scope.pathPage == '/playlists') {
        $scope.pageTitle = 'PLAYLISTS';
    }

    /* BOTÃO VOLTAR */
    $scope.goBack = function () {
        window.history.back();
    };

    /* TOGGLE (ABRIR E FECHAR) MENU */
    $scope.isMenuOpen = false;
    var body = document.getElementById('body');

    /* ABRIR MENU */
    $scope.openMenu = function () {
        body.style.transform = "translateX(-80%)";
        $scope.isMenuOpen = true;
    };

    /* FECHAR MENU */
    $scope.closeMenu = function () {
        body.style.transform = "translateX(0)";
        $scope.isMenuOpen = false;
    }

    /* CLICK LINK DO MENU */
    // $scope.menuLink = function(pagina) {
    //     $scope.closeMenu();
    //     window.location.replace(pagina);
    // }

    /* SAIR */
    $scope.logout = function () {
        body.style.transition = "none";
        $scope.closeMenu();

        localStorage.setItem("token_authorization", null);
        window.location.replace("#/login");
    }
});