/*global angular*/
module.exports = angular.module('ProfilePageModule', []).service('ProfilePinsSvc', ['$http', function($http) {
            
    this.getUserPins = function(userId){
        return $http.get('/pins/' + userId );  
    };
        
            
}]);