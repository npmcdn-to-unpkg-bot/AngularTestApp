(function() {
    'use strict';
    angular.module('loginCtrl', [])

        .component('login', {
            templateUrl: 'views/login.html',
            controller: LoginCtrl,
            controllerAs: 'vm'
        });

    function LoginCtrl() {
        var vm = this;
        vm.login = login;
        
        
        function login(){
            alert(vm.email+ " - " +vm.password);
        }
        

    }

})();

