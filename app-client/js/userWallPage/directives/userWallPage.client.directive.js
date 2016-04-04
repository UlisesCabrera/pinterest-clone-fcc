/*global angular*/
module.exports = angular.module('UserWallPageModule')
 .directive('userPinsWall',function(){
     return {
         templateUrl: 'views/userWallPage/directives/userPins.wall.html'
     };
 })