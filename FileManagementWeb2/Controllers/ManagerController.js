/// <reference path="../scripts/angular.js" />
"use strict";

var fileManagerApp = angular.module("fileManagerApp");//, 'LoginService'
var pageSize = 10;
var url = 'csvjson.json';
var myData;

fileManagerApp.controller("ManagerController", function ($scope, UserDropdown) {
    $scope.dropdown = UserDropdown;
    $scope.dropdown.isShow = true;

    //$scope.page = 1;
    //$scope.from = 1;
    //$scope.to = 10;
    //var GetData = function () {
    //    $.getJSON(url,
    //        function (data) {
    //            console.log(data);
    //            $scope.myData = data;
    //            $scope.$apply();
    //        });
    //}
    //GetData();

    //$scope.buttonOnClick = function (index) {
    //    switch (index) {
    //        case 0:
    //            $scope.page = 1;
    //            break;
    //        case 1:
    //            if ($scope.page > 0) $scope.page--;
    //            break;
    //        case 2:
    //            if ($scope.page < Math.floor($scope.myData.length / pageSize)) $scope.page++;
    //            break;
    //        case 3:
    //            $scope.page = Math.floor($scope.myData.length / pageSize);
    //            break;
    //    }
    //    $scope.from = ($scope.page - 1) * pageSize + 1;
    //    $scope.to = $scope.page * pageSize;

    //}


    //$scope.sortColumn = "date";
    //$scope.reverseSort = false;

    //$scope.sortData = function (column) {
    //    $scope.reverseSort = ($scope.sortColumn == column) ?
    //        !$scope.reverseSort : false;
    //    $scope.sortColumn = column;
    //};

    //$scope.getSortClass = function (column) {

    //    if ($scope.sortColumn == column) {
    //        return $scope.reverseSort
    //            ? 'arrow-down'
    //            : 'arrow-up';
    //    }

    //    return '';
    //};

});

fileManagerApp.controller("UserDropdownController", function ($scope, UserDropdown) {
    $scope.dropdown = UserDropdown;
});