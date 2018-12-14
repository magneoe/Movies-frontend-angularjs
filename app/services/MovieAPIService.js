
movieDBApp.factory('movieDataService', ($resource, $log) => {
    return {
        getMovies: (params, onSuccess, onFailure) => {
            let movies = $resource('http://localhost:8082/api/movies/getAll');

            movies.get(params).$promise.then(res => {
                $log.info(res);
                onSuccess(res)
            }).catch(error => {
                $log.warn(error);
                onFailure(error);
            });
        }
    }
});