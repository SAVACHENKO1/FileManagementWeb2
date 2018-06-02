/// <reference path="scripts/angular.js" />
"use strict";

var UsersService = angular.module("UsersService", []);

UsersService.factory('UsersApi', function ($http) {

    var urlBase = "http://localhost:60770/api";
    var UsersApi = {};
    UsersApi.getUsers = function () {
        return $http.get(urlBase + '/Users')
    };

    return UsersApi;
});