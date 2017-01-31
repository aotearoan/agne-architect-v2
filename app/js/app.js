(function () {

    'use strict';

    angular.module('AgnesApp', ['ngCookies', 'smooth.scroll', 'app.translation', 'app.projects'])
        .filter('translate', ['$cookies', 'translateService', function($cookies, translateService) {
            return function(key, lang) {
                return translateService.translate(key, lang);
            };
        }])
        .controller('AgnesController', ['$scope', '$cookies', '$location', '$window', 'anchorSmoothScroll', 'translateService', 'projectService',
            function ($scope, $cookies, $location, $window, anchorSmoothScroll, translateService, projectService) {

                $scope.languages = translateService.languages;
                $scope.language = $cookies.get('language') || 'de';

                $scope.projects = projectService.projects;

                $scope.showMobileMenu = false;
                $scope.stickyMenu = false;
                $scope.activeLink = 'top';
                $scope.year = new Date().getFullYear();

                var anchors = ['top', 'projects','about','contact'];

                $scope.mobileToggle = function () {
                    $scope.showMobileMenu = !$scope.showMobileMenu;
                };

                $scope.anchorScroll = function (element) {
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

                $scope.updateActiveLink = function (yOffset) {
                    var active = $scope.activeLink;

                    for (var i = 0; i < anchors.length; i++) {
                        if (yOffset >= elmYPosition(anchors[i]) - 1) {
                            active = anchors[i];
                        }
                    }

                    $scope.activeLink = active;

                };

                $scope.changeLanguage = function(newLang) {
                    var now = new $window.Date(),
                        // this will set the expiration to 6 months
                        exp = new $window.Date(now.getFullYear()+50, now.getMonth(), now.getDate());

                    $cookies.put('language', newLang , {
                        expires: exp
                    });

                    $scope.language = newLang;
                };
            }]);
}());
