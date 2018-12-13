
movieDBApp.factory('movieDataService', ($resource) => {
    return {
        getAllMovies: () => {
            let movies = $resource('http://localhost:8082/api/movies/getAll');

            return movies.get({size: 10, sort: 'title', page: 0});
        }
    }
});