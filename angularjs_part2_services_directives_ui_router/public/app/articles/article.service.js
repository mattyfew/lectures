angular.module('app.service.articles', [])

.service('serviceHttp', function($http){
    this.getArticles = function(){
        return $http.get('http://localhost:8080/articles')
        .then(
            function(result){ return result },
            function(err) { alert("Error: No data returned") }
        );
    }
});

/*
.factory('serviceHttp', ['$http', function($http){
    var factory = {
        getArticles: function(){
            var data = $http.get('http://localhost:8080/articles')
            .then(function(result){ return result },
                  function(err) { alert("Error: No data returned") }
            );
            return data;
        }
    };

    return factory;
}]);
*/
