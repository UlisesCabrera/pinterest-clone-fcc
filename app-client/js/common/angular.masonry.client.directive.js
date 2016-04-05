/*global angular Masonry*/
module.exports = angular.module('MasonryNg', []).directive('masonryDirective', function($timeout) {
      return function(scope, element, attrs) {
          if (scope.$last === true){
             $timeout(function () {
                    var parent = element.parent();
                    var masonry = new Masonry(parent[0], {
                        itemSelector: '.grid-item',
                        isAnimated: true,
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false
                        },
                        transitionDuration : "0.4s"
                    });
                });
             
          }
      };
}).directive('onError', function() {
  return {
    restrict:'A',
    link: function(scope, element, attr) {
      element.on('error', function() {
        element.attr('src', attr.onError);
      });
    }
  };
});