'use strict';

application.controller('emptyCtrl', function ($scope) { });

application.controller('applicationCtrl', ['$scope', '$controller', '$sce', '$mdTheming', 'THEMES', 'CONSTANTS',
    function (scope, ngController, sce, mdTheming, THEMES, CONSTANTS) {
        scope.currentTheme = 'lightblue';
        scope.themesList = THEMES.LIST;
        scope.changeTheme = function (newTheme) {
            if (!THEMES.LIST.includes(newTheme)) {
                newTheme = 'lightblue';
            }
            scope.currentTheme = newTheme;
            mdTheming.generateTheme(newTheme);
            localStorage.setItem('selected_angular_material_theme', newTheme);
        };
        scope.pictures = {
            colorTheme: sce.trustAsHtml(CONSTANTS.PICTURES.COLOR_THEME),
            globe: sce.trustAsHtml(CONSTANTS.PICTURES.GLOBE),
            cross: sce.trustAsHtml(CONSTANTS.PICTURES.CROSS),
            menu: sce.trustAsHtml(CONSTANTS.PICTURES.MENU),
            arrow_up: sce.trustAsHtml(CONSTANTS.PICTURES.ARROW_UP),
        };
        scope.onInit = function () {
            scope.changeTheme(localStorage.getItem('selected_angular_material_theme'));
        };
        scope.extendController = function(extension) {
            angular.extend(this, ngController(extension, {$scope: scope}));
        };
    }
]);

application.controller('indexCtrl', ['$scope', '$location', '$mdDialog', '$timeout', '$mdUtil',
    function (scope, location, mdDialog, timeout, mdUtil) {

        scope.indexOnInit = function () {
            let path = location.path();
            if (path.length > 8) {
                scope.getPageContent(path);
            } else {
                scope.getPageContent('/about.html');
            }
        };
        scope.getPageContent = function(page) {
            // console.log(page);
            scope.pageContent = '/budservis.tech/parts/empty.html';
            scope.pageFooter = '/budservis.tech/parts/empty.html';
            timeout(scope.getPageContentTimeout, 500, true, page);
        };
        scope.getPageContentTimeout = function(page) {
            // console.log(page);
            location.path(page);
            scope.pageContent = '/budservis.tech/parts' + page;
            timeout(scope.getPageFooterTimeout, 500);
        };
        scope.getPageFooterTimeout = function() {
            scope.pageFooter = '/budservis.tech/parts/footer.html';
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
        let mainContentArea = document.querySelector("body");
        let scrollContentEl = mainContentArea.querySelector('md-content[md-scroll-y]');
        scope.scrollTop = function() {
            mdUtil.animateScrollTo(scrollContentEl, 0, 200);
        };
    }
])
.directive('scrollClass', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            let scrollMainChildren = element.parent().children();
            let isScrolling = false;
            let position;

            for (let i=0; i < scrollMainChildren.length; i++) {
                if (scrollMainChildren[i].localName === "md-content") {
                    position = i;
                    break;
                }
            }
            updateState();

            scrollMainChildren.on('scroll', updateState);

            function updateState() {
                let newState = scrollMainChildren[position].scrollTop !== 0;
                if (newState !== isScrolling) {
                    element.toggleClass(attr.scrollClass, newState);
                }
                isScrolling = newState;
            }
        }
    };
});
