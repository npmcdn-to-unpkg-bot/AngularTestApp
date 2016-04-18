(function () {
    'use strict';
    angular.module('app')
        .component('login', {
            templateUrl: 'login/login.html',
            controller: LoginCtrl,
            controllerAs: 'vm'
        });

    function LoginCtrl($location, $timeout, LocalStorage) {
        var vm = this;
        vm.login = login;
        activate();
        /*
        * IMPLEMENT 
        */
        function activate() {
            var check = LocalStorage.checkLogin();
            if (check.value == true) {
                $timeout(function () {
                    $location.path('/Private');
                });
            }
        }


        function login() {

            var auth = LocalStorage.login(vm.email, vm.password);
            if (auth.value) {
                $location.path("/Private");
            } else {
                vm.errorLogin = "User & password error";
            }
        }
    }

})();

