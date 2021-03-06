'use strict';
const application = angular.module("application", ['ngMaterial'])
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default').primaryPalette('light-blue').accentPalette('light-blue').warnPalette('red');
        $mdThemingProvider.alwaysWatchTheme(true);
        $mdThemingProvider.generateThemesOnDemand(true);
        let style = "";
        for (let palette in $mdThemingProvider._PALETTES) {
            let theme = palette.replace('-', '');
            // console.log($mdThemingProvider.theme(theme).dark());
            $mdThemingProvider.theme(theme).primaryPalette(palette).accentPalette(palette).warnPalette('red');
            style +=
                " " +
                ".footer-" + theme + "-theme, " +
                "md-toolbar.md-" + theme + "-theme {" +
                "  background:" +
                "    repeating-linear-gradient(30deg, transparent 0px, " + $mdThemingProvider._PALETTES[palette]['600'] + " 1px, transparent 2px, transparent 25px, " + $mdThemingProvider._PALETTES[palette]['600'] + " 26px, transparent 27px, transparent 34px)," +
                "    repeating-linear-gradient(60deg, transparent 0px, " + $mdThemingProvider._PALETTES[palette]['600'] + " 1px, transparent 2px, transparent 25px, " + $mdThemingProvider._PALETTES[palette]['600'] + " 26px, transparent 27px, transparent 34px)," +
                "    repeating-linear-gradient(300deg, transparent 0px, " + $mdThemingProvider._PALETTES[palette]['600'] + " 1px, transparent 2px, transparent 25px, " + $mdThemingProvider._PALETTES[palette]['600'] + " 26px, transparent 27px, transparent 34px)," +
                "    repeating-linear-gradient(330deg, transparent 0px, " + $mdThemingProvider._PALETTES[palette]['600'] + " 1px, transparent 2px, transparent 25px, " + $mdThemingProvider._PALETTES[palette]['600'] + " 26px, transparent 27px, transparent 34px),";
            if (palette === 'grey') {
                style += "    linear-gradient(to top, " + $mdThemingProvider._PALETTES[palette]['600'] + " 0%, " + $mdThemingProvider._PALETTES[palette]['500'] + " 100%);";
            } else {
                style += "    linear-gradient(to top, " + $mdThemingProvider._PALETTES[palette]['500'] + " 0%, " + $mdThemingProvider._PALETTES[palette]['400'] + " 100%);";
            }
            style +=
                "} " +
                "md-content.md-" + theme + "-theme {" +
                "  color:" + $mdThemingProvider._PALETTES[palette]['900'] + " !important;" +
                "  border-color:" + $mdThemingProvider._PALETTES[palette]['700'] + ";" +
                "} " +
                "md-divider.md-" + theme + "-theme.md-hue-2 {" +
                "  border-color:" + $mdThemingProvider._PALETTES[palette]['700'] + ";" +
                "  padding: 0;" +
                "} " +
                "md-divider.md-" + theme + "-theme.md-hue-1 {" +
                "  border-color:" + $mdThemingProvider._PALETTES[palette]['200'] + ";" +
                "  padding: 0;" +
                "} " +
                // ng-if
                ".fade-element-in-init, " +
                ".fade-element-in.ng-enter {" +
                "  opacity: 1;" +
                "} " +
                ".fade-element-in.ng-enter {" +
                "  transition: 0.8s linear all;" +
                "  opacity: 0;" +
                "} " +
                ".fade-element-in.ng-enter.ng-enter-active {" +
                "  opacity: 1;" +
                "} " +
                ".fade-element-in.ng-leave {" +
                "  transition: 0.3s linear all;" +
                "  opacity: 1;" +
                "} " +
                ".fade-element-in.ng-leave.ng-leave-active {" +
                "  opacity: 0;" +
                "} " +
                // footer-color
                ".footer-" + theme + "-theme { ";
            if (palette === 'lime' || palette === 'yellow' || palette === 'amber') {
                style += "color: rgba(0,0,0,0.87);";
            } else {
                style += "color: rgba(255,255,255,0.87);";
            }
                // buttons
            style +=
                "} " +
                "button.select-" + theme + "-theme {" +
                "  color:" + $mdThemingProvider._PALETTES[palette]['900'] + ";" +
                "  background-color:" + $mdThemingProvider._PALETTES[palette]['200'] + ";" +
                "} " +
                ".md-button.md-" + theme + "-theme.md-fab { ";
            if (palette === 'lime' || palette === 'yellow' || palette === 'amber') {
                style +=
                    "  color: rgba(0,0,0,0.87) !important;" +
                    "  background-color:" + $mdThemingProvider._PALETTES[palette]['600'] + " !important;";
            } else {
                style +=
                    "  color: rgba(255,255,255,0.87) !important;" +
                    "  background-color:" + $mdThemingProvider._PALETTES[palette]['500'] + " !important;";
            }
            style +=
                "} " +
                ".md-button.md-" + theme + "-theme.md-fab:hover { ";
            if (palette === 'lime' || palette === 'yellow' || palette === 'amber') {
                style +=
                    "  color: rgba(0,0,0,0.87) !important;" +
                    "  background-color:" + $mdThemingProvider._PALETTES[palette]['700'] + " !important;";
            } else {
                style +=
                    "  color: rgba(255,255,255,0.87) !important;" +
                    "  background-color:" + $mdThemingProvider._PALETTES[palette]['600'] + " !important;";
            }
            style +=
                "} ";
        }
        $mdThemingProvider.registerStyles(style);
        // console.log(style);
    })

    .constant('THEMES', {
        LIST: [
            'red',
            'pink',
            'purple',
            'deeppurple',
            'indigo',
            'blue',
            'lightblue',
            'cyan',
            'teal',
            'green',
            'lightgreen',
            'lime',
            'yellow',
            'amber',
            'orange',
            'deeporange',
            'brown',
            'grey',
            'bluegrey'
        ]
    });
