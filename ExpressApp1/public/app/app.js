﻿angular.module("app", ['ngRoute']);

angular.module('app')
    .config(function($routeProvider) {
        $routeProvider.when('/home', { templateUrl: "/home.html", controller: 'maincontroller' });

        $routeProvider.otherwise({ redirectTo: '/home' });
    });


angular.module('app')
    .controller('maincontroller',
        function($scope) {
            $scope.test = "Hello";
        });