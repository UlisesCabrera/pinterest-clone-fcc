/*global angular*/

//exports module
module.exports = angular.module('PinPagesModule',[]);

// require all controllers, services, directives
require("./services/pins.client.service");
require("./controllers/allPinsPage.client.controller");
require("./directives/pinsPages.client.directive");