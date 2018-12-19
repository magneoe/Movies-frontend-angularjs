movieDBApp.directive('movieDetails', () => {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/directives/details/MovieDetailsDirective.html'
    }
});