(function() {
    'use strict';
    angular.module('app')

        .config(function($locationProvider) {
            $locationProvider.html5Mode(false);
        })

        .value('$routerRootComponent', 'app')

        .component('app', {
            templateUrl: 'views/index.html',
            $routeConfig: [

                { path: '/Login', name: 'Login', component: 'login' },
                { path: '/Registration', name: 'Registration', component: 'registration' },
                { path: '/Private', name: 'Private', component: 'private' },
            ],
            controller: AppCtrl,
            controllerAs: 'vm'
        });

    function AppCtrl($location, User) {
        var vm = this;
        vm.menu = menu();
        vm.isActive = isActive;
        vm.logOut = logOut;
        /*
        * IMPLEMENT 
        */

        function menu() {
            var menu = [

                { name: 'Login', link: '/Login' },
                { name: 'Registration', link: '/Registration' },
                { name: 'Private', link: '/Private' }
            ]
            return menu;
        }
        function logOut() {
            User.logOut();
            $location.path("/Login");
        }
        function isActive(viewLocation) {
            var active = (viewLocation === $location.path());
            return active;
        }


    };
})();
