(function() {
    'use strict';
    angular.module('app')

        .component('registration', {
            templateUrl: 'views/registration.html',
            controller: RegistrationCtrl,
            controllerAs: 'vm'
        });
        
          function RegistrationCtrl(Authentification,$location) {
        var vm = this;
        console.log(Authentification.register("marco.devecchi84@gmail.com","123"));
        console.log(Authentification.register("marco.devecchi84@gmail.com","123"));

    }


})();
