/*global angular*/
module.exports = angular.module('ProfilePageModule')
 .directive('myPinsProfile',function(){
     return {
         templateUrl: 'views/profilePage/directives/myPins.profile.html'
     };
 })