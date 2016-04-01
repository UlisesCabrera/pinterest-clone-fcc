/*global angular $*/

module.exports = angular.module('ProfilePageModule')
 .controller('ProfilePageController', ['$scope','$routeParams', 'ProfilePinsSvc', 
    function($scope, $routeParams, ProfilePinsSvc){
     
     ProfilePinsSvc.getUserPins($routeParams.user)
      .then(
       function(res){
        $scope.myPins =  res.data.pins;
      }, 
      function(err){
        $scope.messageProfile = err;
      }
    );
    
}]);