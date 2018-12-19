movieDBApp.directive('movieComments', () => {
    
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/directives/comments/CommentDirective.html',
        scope: {
            comments: '='
        }
    };
})