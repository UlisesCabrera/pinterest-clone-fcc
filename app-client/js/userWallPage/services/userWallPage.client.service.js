/*global angular*/
module.exports = angular.module('UserWallPageModule', []).service('UserWallPinsSvc', ['$http', function($http) {
            
    this.getUserPins = function(userId){
        return $http.get('/pins/' + userId );  
    };
        
            
}]);