/*global angular*/
module.exports = angular.module('PinPagesModule', []).service('PinsSvc', ['$http', function($http) {
            
            this.getAllPins = function(){
                return $http.get('/pins');  
            };
            
            // creates new book
            this.newPin = function(newPin) {
                return $http.post('/pins', newPin);
            };
            
            this.deletePin = function(pinId) {
                return $http.delete('/pins/' + pinId);  
            };

}]);