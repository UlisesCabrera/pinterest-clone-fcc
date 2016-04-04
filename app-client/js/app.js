/*global angular location*/
require('angular');
require('angular-route');

window.$ = window.jQuery = require('jquery');
require('bootstrap');


//require sub-modules
require('./common/angular.masonry.client.directive.js');
require("./profilePage/profilePage.module");
require("./pinPages/pinPages.module");



angular.module('PinterestClone', ['ngRoute', 'ProfilePageModule','PinPagesModule','MasonryNg'])
    .config(function($routeProvider, $locationProvider) {
      $routeProvider
       .when('/', {
        templateUrl: 'views/pinPages/allPinsPage.html',
        controller: 'AllPinsPageController'
      })
      .when('/profile/:user', {
        templateUrl: 'views/profilePage/profilePage.html',
        controller: 'ProfilePageController',
		resolve : {
			// checks for userstate before granting access to this route
			userState : function($http, $location){
				$http.get('auth/userState').then(function(res){
					if(res.data.state === "failure") {
						$location.path('/');
					}
				});
			}
		}
      }).otherwise({
        redirectTo: '/'
      });
      
}).controller('PinterestCloneController',['$scope', '$http',
    function($scope, $http){
        $scope.currentUser = function() {
            return window.user ? window.user : null;
        };
        
        $scope.signOut = function(){
            $http.get('/auth/signout').then(function(r){
                if (r.status == 200) {
                    location.reload();
                }
            });
        };
}]);