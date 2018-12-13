

movieDBApp.controller('MovieListController',
    function MovieListController($scope, movieDataService, $log) {
        

        movieDataService.getAllMovies().$promise.then(res => {
            $log.info(res);
            $scope.movies = res;
        }).catch(error => {
            $log.warn(error);
        });
    });