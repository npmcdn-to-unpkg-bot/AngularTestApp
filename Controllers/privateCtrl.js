(function() {
    'use strict';
    angular.module('app')
        .component('private', {
            templateUrl: 'views/private.html',
            controller: PrivateCtrl,
            controllerAs: 'vm'
        });

    function PrivateCtrl(Authentification, $location, $timeout) {
        var vm = this;
        var check = Authentification.checkLogin();
        
        if (check.value == false) {
           
            $timeout(function() {
                $location.path('/Login');
            });
           
        }

    }
})();