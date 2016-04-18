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

    function AppCtrl($location, Authentification) {
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
            // console.log(menu);
            return menu;
        }
        function logOut() {
        console.log("logout");
        Authentification.logOut();
         $location.path("/Login");
        }
        function isActive(viewLocation) {
            //console.log($location.path() + "==" + viewLocation);
            //console.log("-------------------");

            var active = (viewLocation === $location.path());
            //console.log(active);
            return active;
        }


    };
})();
