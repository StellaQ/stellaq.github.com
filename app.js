var routeApp = angular.module('routeApp', ['ui.router']);

routeApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');

    $stateProvider
        .state('index', {
            url: '/index',
            templateUrl: 'tpl/indexgit.html'
        })
        .state('oneOne', {
            url: '/jsdemoone',
            templateUrl: 'tpl/1jsdemos/01analogmobilephonetextmessage/index.html'
        })
        .state('twoOne', {
            url: '/ajaxphpdemoone',
            templateUrl: 'tpl/2.1liuyanben/index.html'
        })
        .state('threeOne', {
            url: '/angulardemoone',
            templateUrl: 'tpl/3angulardemos/01angularshoppingcart/index.html'
        })