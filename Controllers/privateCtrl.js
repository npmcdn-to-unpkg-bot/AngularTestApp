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
        console.log(check.value ==false);
        if (check.value ==false) {
            $location.path("/Login");
        }
    }
})();