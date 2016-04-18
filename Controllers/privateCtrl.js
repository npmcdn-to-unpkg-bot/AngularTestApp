(function () {
    'use strict';

    angular.module('app')
        .component('private', {
            templateUrl: 'views/private.html',
            controller: PrivateCtrl,
            controllerAs: 'vm'
        });

    function PrivateCtrl(Authentification,$location) {
        var vm = this;
        var check=Authentification.checkLogin();
        
        if (check.value ==false) {
            console.log(check.value ==false);
            $location.path("/Registration");
        }
    }
})();