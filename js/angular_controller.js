'use strict';

application.controller('emptyCtrl', function ($scope) { });

application.controller('applicationCtrl', ['$scope', '$controller', '$sce', 'THEMES', 'CONSTANTS',
    function (scope, ngController, sce, THEMES, CONSTANTS) {
        scope.currentTheme = 'lightblue';
        scope.themesList = THEMES.LIST;
        scope.changeTheme = function (newTheme) {
            if (THEMES.LIST.includes(newTheme)) {
                scope.currentTheme = newTheme;
                localStorage.setItem('selected_angular_material_theme', newTheme);
            }
        };
        scope.pictures = {
            colorTheme: sce.trustAsHtml(CONSTANTS.PICTURES.COLOR_THEME),
            globe: sce.trustAsHtml(CONSTANTS.PICTURES.GLOBE),
            cross: sce.trustAsHtml(CONSTANTS.PICTURES.CROSS),
            menu: sce.trustAsHtml(CONSTANTS.PICTURES.MENU),
        };
        scope.onInit = function () {
            scope.changeTheme(localStorage.getItem('selected_angular_material_theme'));
        };
        scope.extendController = function(extension) {
            angular.extend(this, ngController(extension, {$scope: scope}));
        };
    }
]);

application.controller('indexCtrl', ['$scope', '$location', '$mdDialog', '$timeout',
    function (scope, location, mdDialog, timeout) {

        scope.indexOnInit = function () {
            let path = location.path();
            if (path.length > 10) {
                scope.getPageContent(path);
            } else {
                scope.getPageContent('/about.html');
            }
        };
        scope.getPageContent = function(page) {
            // console.log(page);
            scope.pageContent = 'parts/empty.html';
            timeout(scope.getPageContentTimeout, 500, true, page);
        };
        scope.getPageContentTimeout = function(page) {
            // console.log(page);
            location.path(page);
            scope.pageContent = 'parts' + page;
        };
        scope.$on("$includeContentError", function () {
            window.location = '/budservis.tech/notFound';
        });
        scope.showPictureDialog = function (picture) {
            mdDialog.show({
                clickOutsideToClose: true,
                template:
                    "<md-dialog aria-label='Picture dialog'>" +
                    "<md-dialog-content>" +
                    "<img src='" + picture + "' alt='picture'>" +
                    "</md-dialog-content>" +
                    "</md-dialog>",
            });
        };
    }
]);
