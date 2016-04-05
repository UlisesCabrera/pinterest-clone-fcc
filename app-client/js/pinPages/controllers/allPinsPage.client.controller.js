/*global angular $ Masonry*/

module.exports = angular.module('PinPagesModule')
 .controller('AllPinsPageController', ['$scope','PinsSvc', 
    function($scope, PinsSvc){
 
    $scope.newPin = {
      name: '',
      imgUrl: '',
      owner_id : '',
      owner_name: ''
    };

    $scope.loading = true;

    // will hold all the books
    $scope.pins = [];
    
    PinsSvc.getAllPins()
        .then(
            function(res){
            	if (res.data.state === 'success') {
            		$scope.pins = res.data.pins;
            		$scope.loading = false;

            	} else {
            		$scope.message = res.data.message;
            		
            	}
            	$scope.alertClass = res.data.state == 'success' ? 'alert-success' : 'alert-warning';
            },
            function(error) {
	        	$scope.message = 'error getting to the server : ' + error.status + ' ' + error.statusText;
	        }              
    );
    
    $scope.addPin = function(user) {
      $scope.newPin.owner_id = user._id;
      $scope.newPin.owner_name = user.name;
      
      PinsSvc.newPin($scope.newPin)
        .then(
            function(res){
                 if (res.data.state === "success") {
                				$scope.pins.push(res.data.pin);
            	   		} 
          	   			 // error, grab the error message from the response and display it on the form.
          	   		    $scope.message = res.data.message;
          	   		    $scope.alertClass = res.data.state == 'success' ? 'alert-success' : 'alert-warning';
            	   		$scope.newPin = {name:'', imgUrl: ''};
        	   		    // hides modal
        	   		    $('#newPinModal').modal('hide');                  				
            },
            function(error) {
      	        $scope.message = 'error getting to the server : ' + error.status + ' ' + error.statusText;
	        } 
        );
    };
    
    $scope.deletePin = function(pinId, pinIdx){
        if (confirm('Are you sure you want to delete this pin?')) {
            PinsSvc.deletePin(pinId)
            .then(
                function(res){
              	   	 $scope.pins.splice(pinIdx, 1);
              	   	 // error, grab the error message from the response and display it on the form.
              	   	 $scope.message = res.data.message;
              	   	 $scope.alertClass = res.data.state == 'success' ? 'alert-success' : 'alert-warning';
                },
                function(error) {
          	        $scope.message = 'error getting to the server : ' + error.status + ' ' + error.statusText;
    	        } 
            );
        }
    };
    
}]);