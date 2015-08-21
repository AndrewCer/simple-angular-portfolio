var app = angular.module("portfolIolIoliooo", ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController',
      activetab: 'home'
    })
    .when('/projects', {
      templateUrl: 'partials/projects.html',
      controller: 'ProjectsController',
      activetab: 'projects'
    })
    .when('/bio', {
      templateUrl: 'partials/bio.html',
      controller: 'BioController',
      activetab: 'bio'
    })
    .when('/resume', {
      templateUrl: 'partials/resume.html',
      controller: 'ResumeController',
      activetab: 'resume'
    })
    .otherwise( {redirectTo: '/'});
})
