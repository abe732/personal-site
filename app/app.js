'use strict';

angular.module('app', [
  'app.about',
  'app.contact',
  'app.guiding-principles',
  'app.landing-page',
  'app.projects',
  'app.skills',
  'app.index',
  'ngRoute'
])


.config(function($routeProvider, $httpProvider) {
  $routeProvider
  .when('/index', {
    templateUrl: 'app/views/index.html',
    controller: 'indexCtrl'
  })
  .when('/about', {
    templateUrl: 'app/views/about.html', 
    controller: 'aboutCtrl'
  })
  .when('/contact', {
    templateUrl: 'app/views/contact.html',
    controller: 'contactCtrl'
  })
  .when('/guiding-principles', {
    templateUrl: 'app/views/guiding-principles.html',
    controller: 'guidingPrinciplesCtrl'
  })
  .when('/projects', {
    templateUrl: 'app/views/project.html',
    controller: 'projectsCtrl'
  })
  .when('/skills', {
    templateUrl: 'app/views/skills.html',
    controller: 'skillsCtrl'
  })
  .otherwise({
    redirectTo: '/'
  })
  .when('/', {
    templateUrl: 'app/views/index.html', 
    controller: 'indexCtrl'
  })
  $locationProvider.html5Mode(true);
});