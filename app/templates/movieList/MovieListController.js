

movieDBApp.controller('MovieListController',
    function MovieListController($scope, movieDataService, $log, $routeParams, $location) {
        $log.info($location);
        const params = {
            sort: $routeParams.sort || 'title',
            page: $routeParams.page || 0,
            size: $routeParams.size || 2,
        };

        const onLoadingSuccessful = (res) => {
            $scope.movies = res;
        }
        const onLoadingFailure = (error) => {
            $scope.message = "Unable to load movies...";
        }

        movieDataService.getMovies(params, onLoadingSuccessful, onLoadingFailure);


        $scope.prevPage = () => {
            $location.search({ page: $scope.movies.number-1});
        };
        $scope.nextPage = () => {
            $location.search({ page: $scope.movies.number+1});
        };
        $scope.selectMovie = (movieId) => {
            $location.url(`/movies/${movieId}`);
        };
    });

    

    
    