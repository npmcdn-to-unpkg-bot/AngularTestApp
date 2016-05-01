(function() {
    'use strict';
    //console.log("entri");
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
                { path: '/BookList', name: 'BookList', component: 'bookList' },
                {path: '/BookList/:bookId',name: 'BookDetails',component: 'bookDetails'}
            ],
            controller: AppCtrl,
            controllerAs: 'vm'
        });

    function AppCtrl($location, LocalStorage,Menu) {

        var vm = this;
        vm.menu = Menu.menu();
        vm.isActive = isActive;
        vm.logOut = logOut;
        /*
        * IMPLEMENT
        */

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
