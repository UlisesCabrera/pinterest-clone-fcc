/*global angular */

module.exports = angular.module('UserWallPageModule')
 .controller('UserWallPageController', ['$scope','$routeParams', 'UserWallPinsSvc', 
    function($scope, $routeParams, UserWallPinsSvc){
    $scope.userName = $routeParams.userName;  

     UserWallPinsSvc.getUserPins($routeParams.userId)
      .then(
       function(res){
        $scope.userPins =  res.data.pins;
        
      }, 
      function(err){
        $scope.messageProfile = err;
      }
    );
    
}]);