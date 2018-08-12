app.controller("miniPlayerController", function ($scope, playerService) {
    $scope.playing;
    $scope.aulaNome;
    $scope.cdNome;
    
    $scope.init = function() {
        $scope.playing = playerService.isPlaying();
        console.log($scope.playing);
        
        $scope.aulaNome = playerService.getAulaNome();
        $scope.cdNome = playerService.getCDNome();
    }
    
    $scope.togglePlayPause = function() {
        $scope.playing = playerService.togglePlayPause();
    }
    
});