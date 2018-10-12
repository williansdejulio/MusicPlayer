app.controller("headerController", function ($scope, $location) {
    $("html, body").scrollTop(0);

    $scope.username = 'Usuário João';

    /* PEGAR O CAMINHO DA ROTA */
    $scope.pathPage = $location.path();

    /* POPULAR TÍTULO DA PÁGINA */
    $scope.pageTitle = '';
    if ($scope.pathPage == '/player') {
        $scope.pageTitle = 'MFFB';
    } else if ($scope.pathPage == '/aula') {
        $scope.pageTitle = 'AULAS';
    } else if ($scope.pathPage == '/cd') {
        $scope.pageTitle = 'CDs';
    } else if ($scope.pathPage == '/cd-especial') {
        $scope.pageTitle = 'CDs ESPECIAIS';
    } else if ($scope.pathPage == '/downloads') {
        $scope.pageTitle = 'BAIXADAS';
    } else if ($scope.pathPage == '/notificacao') {
        $scope.pageTitle = 'NOTIFICAÇÕES';
    } else if ($scope.pathPage == '/termos') {
        $scope.pageTitle = 'TERMOS DE USO';
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
        $("#miniPlayer").css("transform", "translateX(80%)");
        $scope.isMenuOpen = true;
    };

    /* FECHAR MENU */
    $scope.closeMenu = function () {
        body.style.transform = "translateX(0)";
        $("#miniPlayer").css("transform", "translateX(0)");
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