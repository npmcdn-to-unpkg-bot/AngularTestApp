(function() {
    'use strict';
    angular.module('app')
        .component('registration', {
            templateUrl: 'registration/registration.html',
            controller: RegistrationCtrl,
            controllerAs: 'vm'
        });

    function RegistrationCtrl(LocalStorage, $location) {
        var vm = this;
        vm.registration = registration;

        /*
        * IMPLEMENT
        */
        function registration() {
            var reg = LocalStorage.register(vm.email, vm.password)
            if (reg.value) {
                $location.path("/Private");
            }
            else {
                vm.errorLogin = "Registration Error: " + reg.error;
            }
        }
    }
})();
