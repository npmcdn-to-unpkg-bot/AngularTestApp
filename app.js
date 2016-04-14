(function() {
    'use strict';
    angular.module('app', ['ngComponentRouter', 'loginCtrl', 'registrationCtrl'])

        .config(function($locationProvider) {
            $locationProvider.html5Mode(false);
        })

        .value('$routerRootComponent', 'app')

        .component('app', {
            templateUrl: 'views/index.html',
            $routeConfig: [

                { path: '/Login', name: 'Login', component: 'login' },
                { path: '/Registration', name: 'Registration', component: 'registration' },
            ],
            controller: AppCtrl
        });

    function AppCtrl($location) {
        var $ctrl = this;
        $ctrl.menu = [
            { name: 'Home', link: '' },
            { name: 'Login', link: 'Login' },
            { name: 'Registration', link: 'Registration' }
        ]
        this.isActive = function(viewLocation) {
            console.log($location.path() + "==" + viewLocation);
            console.log("-------------------");
            var active = (viewLocation === $location.path());
            return active;
        }

    };
})();
