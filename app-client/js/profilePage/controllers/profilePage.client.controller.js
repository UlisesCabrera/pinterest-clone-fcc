/*global angular $*/

module.exports = angular.module('ProfilePageModule')
 .controller('ProfilePageController', ['$scope','$routeParams', 'ProfilePinsSvc', 
    function($scope, $routeParams, ProfilePinsSvc){

     ProfilePinsSvc.getUserPins($routeParams.userId)
      .then(
       function(res){
        $scope.myPins =  res.data.pins;
        
      }, 
      function(err){
        $scope.messageProfile = err;
      }
    );
    
}]);