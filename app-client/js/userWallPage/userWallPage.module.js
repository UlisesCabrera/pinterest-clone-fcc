/*global angular*/

//exports module
module.exports = angular.module('UserWallPageModule',[]);

// require all controllers, services, directives
require("./services/userWallPage.client.service");
require("./controllers/userWallPage.client.controller");
require("./directives/userWallPage.client.directive");