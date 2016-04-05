/*global angular */

module.exports = angular.module('UserWallPageModule')
 .controller('UserWallPageController', ['$scope','$routeParams', 'UserWallPinsSvc', 
    function($scope, $routeParams, UserWallPinsSvc){
    $scope.userName = $routeParams.userName;  
    $scope.loading = true;
     UserWallPinsSvc.getUserPins($routeParams.userId)
      .then(
       function(res){
        $scope.userPins =  res.data.pins;
        $scope.loading = false;
      }, 
      function(err){
        $scope.messageProfile = err;
      }
    );
    
}]);