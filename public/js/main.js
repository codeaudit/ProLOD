/*global require, requirejs */

'use strict';

requirejs.config({
  paths: {
    'angular': ['../lib/angularjs/angular'],
    'angular-route': ['../lib/angularjs/angular-route'],
    'ui-bootstrap': ['../lib/angular-ui-bootstrap/ui-bootstrap-tpls'],
    'ui-grid': ['../lib/ui-grid/ui-grid'],
    'treeControl': ['../lib/angular-tree-control/angular-tree-control']
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular-route': {
      deps: ['angular'],
      exports: 'angular'
    },
    'ui-bootstrap': {
      deps: ['angular'],
      exports: 'angular'
    },
    'ui-grid': {
      deps: ['angular'],
      exports: 'angular'
    },
    'treeControl': {
      deps: ['angular'],
      exports: 'angular'
    }
  }
});

require(['angular', './controllers/controllers','./controllers/viewcontrollers',
    './directives', './filters', './services', 'angular-route', 'ui-bootstrap', 'ui-grid', 'treeControl'],
  function (angular, controllers, viewcontrollers) {
    // Declare app level module which depends on filters, and services

    var app = angular.module('Prolod2', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ngRoute', 'ui.bootstrap', 'ui.grid', 'treeControl']).
      config(['$routeProvider', function ($routeProvider) {
        // routes
        $routeProvider.when('/:dataset/:group/view1', {templateUrl: 'partials/partial1.html', controller: viewcontrollers.MyCtrl1});
        $routeProvider.when('/:dataset/:group/view2', {templateUrl: 'partials/partial2.html', controller: viewcontrollers.MyCtrl2});
        $routeProvider.when('/:dataset/:group/view3', {templateUrl: 'partials/partial1.html', controller: viewcontrollers.MyCtrl3});
        // redirects
        $routeProvider.when('/:dataset/:group/default', {redirectTo: '/:dataset/:group/view1'});
        $routeProvider.when('/:dataset/:group', {redirectTo: '/:dataset/:group/default'});
        $routeProvider.when('/:dataset', {redirectTo: '/:dataset/all/default'});
        // other
        $routeProvider.when('/', {templateUrl: 'partials/default.html', controller: controllers.DefaultViewCtrl});
        $routeProvider.otherwise({redirectTo: '/'});
      }]);

    app.controller('MainCtrl', controllers.MainCtrl);
    app.controller('TreeViewController', controllers.TreeViewController);
    app.controller('BreadCrumbController', controllers.BreadCrumbController);

    angular.bootstrap(document, ['Prolod2']);

  });
