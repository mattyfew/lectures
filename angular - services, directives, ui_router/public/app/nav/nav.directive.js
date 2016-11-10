angular.module('app.nav', [])

.directive('gtNav', function(){
    return {
        templateUrl: 'app/nav/nav.html',
        restrict: 'E'
    }
});
