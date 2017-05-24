"use strict";

var TestApp = angular.module("TestApp", ["app.routes", "app.nav", "app.service.articles"])

.controller('MainCtrl', function($scope, $state, $http, serviceHttp){

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
