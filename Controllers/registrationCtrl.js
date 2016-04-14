(function () {
    'use strict';
    angular.module('app')
        .component('registration', {
            templateUrl: 'views/registration.html',
            controller: RegistrationCtrl,
            controllerAs: 'vm'
        });

    function RegistrationCtrl(Authentification, $location) {
        var vm = this;
        vm.registration = registration;

        function registration() {
            var reg=Authentification.register(vm.email, vm.password)
            console.log(reg);
            if (reg.value) {
                $location.path("/Private");
            }
            else {
                vm.errorLogin = "Registration Error: "+reg.error;
            }
        }




    }


})();
