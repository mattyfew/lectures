"use strict";

angular.module('app.routes', ['ui.router'])

.config(function($locationProvider, $stateProvider, $urlRouterProvider){
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home',{
            url: '/',
            views: {
                'main': {
                    templateUrl: 'app/views/main.html',
                    controller: 'MainCtrl'
                },
                'footer': {
                    templateUrl: 'app/views/templates/footer.html'
                }
            }
        })

        .state('about',{
            url: '/about',
            views: {
                'main': {
                    templateUrl: 'app/views/about.html'
                },
                'footer': {
                    templateUrl: 'app/views/templates/footer.html'
                }
            }
        })

        .state('profile',{
            url: '/profile',
            views: {
                'main': {
                    templateUrl: 'app/views/profile.html'
                },
                'footer': {
                    templateUrl: 'app/views/templates/footer.html'
                }
            }
        })

        .state('this-week',{
            url: '/this-week',
            views: {
                'main': {
                    templateUrl: 'app/views/this-week.html'
                },
                'footer': {
                    templateUrl: 'app/views/templates/footer.html'
                }
            }
        })

        .state('settings',{
            url: '/settings',
            views: {
                'main': {
                    templateUrl: 'app/views/settings.html'
                },
                'footer': {
                    templateUrl: 'app/views/templates/footer.html'
                }
            }
        })


});
