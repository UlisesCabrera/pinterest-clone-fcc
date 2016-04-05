/*global angular $*/

module.exports = angular.module('ProfilePageModule')
 .controller('ProfilePageController', ['$scope','$routeParams', 'ProfilePinsSvc', 
    function($scope, $routeParams, ProfilePinsSvc){
    
    $scope.loading = true;

     ProfilePinsSvc.getUserPins($routeParams.userId)
      .then(
       function(res){
        $scope.myPins =  res.data.pins;
        $scope.loading = false;
        
      }, 
      function(err){
        $scope.messageProfile = err;
      }
    );
    
    $scope.deletePinProfile = function(pinId, pinIdx){
        if (confirm('Are you sure you want to delete this pin?')) {
            ProfilePinsSvc.deletePin(pinId)
            .then(
                function(res){
              	   	 $scope.myPins.splice(pinIdx, 1);
              	   	 // error, grab the error message from the response and display it on the form.
              	   	 $scope.messageProfile = res.data.message;
                },
                function(error) {
          	        $scope.messageProfile = 'error getting to the server : ' + error.status + ' ' + error.statusText;
    	        } 
            );
        }
    };
    
}]);