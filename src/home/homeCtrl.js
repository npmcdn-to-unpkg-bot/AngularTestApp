(function() {
    'use strict';
    console.log("entri");
    angular.module('app')

        .config(function($locationProvider) {
            $locationProvider.html5Mode(false);
        })

        .value('$routerRootComponent', 'app')

        .component('app', {
            templateUrl: 'home/home.html',
            $routeConfig: [

                { path: '/Login', name: 'Login', component: 'login' },
                { path: '/Registration', name: 'Registration', component: 'registration' },
                { path: '/Private', name: 'Private', component: 'private' },
                { path: '/Book', name: 'Book', component: 'book' },
            ],
            controller: AppCtrl,
            controllerAs: 'vm'
        });

    function AppCtrl($location, LocalStorage) {

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
                { name: 'Private', link: '/Private' },
                { name: 'book', link: '/Book' }
            ]
            return menu;
        }
        function logOut() {
            LocalStorage.logOut();
            $location.path("/Login");
        }
        function isActive(viewLocation) {
            var active = (viewLocation === $location.path());
            return active;
        }


    };
})();