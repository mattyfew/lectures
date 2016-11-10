"use strict";

var TestApp = angular.module("TestApp", ["app.routes", "app.nav", "app.factory.articles"])

.controller('MainCtrl', function($scope, $state, $http, serviceHttp){
    // $http.get("http://localhost:8080/articles").then(function(res){
    //     console.log(res.data);
    //     $scope.articles = res.data;
    // })

    serviceHttp.getArticles().then(function(result){
        $scope.articles = result.data;
    })

    function setCurrentView(view){
        $scope.view = view;
        // $state.go('login', {view: view});
    }
})

.run(($rootScope) => {
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
