
movieDBApp.controller('MovieDetailsController', function MovieTileController($scope, $log, $routeParams, movieDataService) {
    
    onMovieLoadedSuccess = (res) => {
        $scope.movie = res;
    }
    onMovieLoadedError = (error) => {
    }

    movieDataService.getMovie({movieId: $routeParams.movieId}, onMovieLoadedSuccess, onMovieLoadedError)
});