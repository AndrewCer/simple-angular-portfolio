

app.controller('HomeController', function ($scope, $location) {
  $scope.isMain = 'nope';
  var location = $location.path();
  if(location === '/'){
    $scope.isMain = 'active';
  }
});

app.controller('ProjectsController', function ($scope) {

});

app.controller('BioController', function ($scope) {

});

app.controller('ResumeController', function ($scope) {

});
