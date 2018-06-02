/// <reference path="scripts/angular.js" />
"use strict";

var fileManagerApp = angular.module("fileManagerApp", ['ngRoute', 'UsersService']);

fileManagerApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.
            when('/Login', {
                templateUrl: 'Views/login.html',
                controller: 'LoginController'
            }).
            when('/Register', {
                templateUrl: 'Views/register.html',
                controller: 'RegisterController'
            }).
            when('/Manager', {
                templateUrl: 'Views/manager.html',
                controller: 'ManagerController'
            }).
            otherwise({
                redirectTo: '/Login'
            });
    }]);

fileManagerApp.factory('UserDropdown', function () {
    return { isShow: false };
});