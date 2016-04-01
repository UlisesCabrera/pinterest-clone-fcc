/*global angular*/
module.exports = angular.module('PinPagesModule')
 .directive('allPins',function(){
     return {
         templateUrl: 'views/pinPages/directives/allPins.html'
     };
 }).directive('addPin', function(){
     return {
       templateUrl: 'views/pinPages/directives/addPin.html'
     };
 });