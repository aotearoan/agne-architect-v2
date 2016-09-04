(function () {

  'use strict';

  angular.module('AgnesApp', ['smooth.scroll'])
      .controller('AgnesController', ['$scope', '$location', '$window', 'anchorSmoothScroll',
        function ($scope, $location, $window, anchorSmoothScroll) {

          $scope.showMobileMenu = false;
          $scope.stickyMenu = false;
          $scope.activeLink = 'top';
          $scope.year = new Date().getFullYear();

          var anchors = [{
            name: 'top',
            position: elmYPosition('top')
          }, {
            name: 'about',
            position: elmYPosition('about')
          }, {
            name: 'projects',
            position: elmYPosition('projects')
          }, {
            name: 'contact',
            position: elmYPosition('contact')
          }];

          $scope.mobileToggle = function() {
            $scope.showMobileMenu = !$scope.showMobileMenu;
          };

          $scope.anchorScroll = function(element) {
            if ($scope.showMobileMenu) {
              $scope.showMobileMenu = false;
            }
            anchorSmoothScroll.scrollTo(element);
            $scope.activeLink = element;
          };

          angular.element($window).bind('scroll', function () {
            var yOffset = this.pageYOffset || 0;
            $scope.stickyMenu = yOffset >= 100;
            $scope.updateActiveLink(yOffset);
            $scope.$apply();
          });

          $scope.updateActiveLink = function(yOffset) {
            var active = $scope.activeLink;

            for (var i=0;i<anchors.length;i++) {
              if (yOffset >= anchors[i].position -1) {
                active = anchors[i].name;
              }
            }

            $scope.activeLink = active;

          };

        }]);
}());
