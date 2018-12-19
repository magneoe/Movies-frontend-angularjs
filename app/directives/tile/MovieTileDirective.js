

movieDBApp.directive("movieTile", function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/directives/tile/MovieTileDirective.html',
        scope: {
            movie: '=',
            selectMovie: '&'
        }
    };
});