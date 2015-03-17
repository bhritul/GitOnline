// Code goes here

(function() {

  var app = angular.module("githubViewer");
  
  var MainController = function($scope, $interval, $location, $log) {

    var decrementCountdown = function() {
      $scope.countdown -= 1;

      if ($scope.countdown < 1) {
        $scope.search($scope.username);
      }
    };

    var countDowninterval = null;
    var startCountdown = function() {
      countDowninterval = $interval(decrementCountdown, 1000, $scope.countdown);

    };
 
    $scope.search = function(username) {
      if (countDowninterval) {
        $interval.cancel(countDowninterval);
        $scope.countdown = null;
      }

      //Search
      $log.log("Searching...")
      $location.path("/user/" + username);
    };
    $scope.username = "angular";
    $scope.countdown = 5;
    //startCountdown(); 
  }; 
  
  app.controller("MainController", MainController);
  
}());