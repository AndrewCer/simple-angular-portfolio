app.controller('NavController', function ($scope, $location) {
  var location = $location.path();
  $scope.setActive = function (route) {
    if (route === '/') {
      $scope.bio = 'not-active'
      $scope.resume = 'not-active'
      $scope.projects = 'not-active'
      $scope.home = 'active'
    }
    if (route === '/projects') {
      $scope.bio = 'not-active'
      $scope.resume = 'not-active'
      $scope.home = 'not-active'
      $scope.projects = 'active'
    }
    if (route === '/resume') {
      $scope.bio = 'not-active'
      $scope.home = 'not-active'
      $scope.projects = 'not-active'
      $scope.resume = 'active'
    }
    if (route === '/bio') {
      $scope.resume = 'not-active'
      $scope.projects = 'not-active'
      $scope.home = 'not-active'
      $scope.bio = 'active'
    }
  }
})

app.controller('HomeController', function ($scope, $location) {
  // var location = $location.path();
  // if(location === '/'){
  //   return $scope.isMain = 'active';
  // }
});

app.controller('ProjectsController', function ($scope, $location) {

});

app.controller('BioController', function ($scope) {

});

app.controller('ResumeController', function ($scope) {

});
