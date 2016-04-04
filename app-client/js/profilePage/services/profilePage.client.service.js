/*global angular*/
module.exports = angular.module('ProfilePageModule', []).service('ProfilePinsSvc', ['$http', function($http) {
            
    this.getUserPins = function(userId){
        return $http.get('/pins/' + userId );  
    };
    
    this.deletePin = function(pinId) {
        return $http.delete('/pins/' + pinId);  
    };    
            
}]);