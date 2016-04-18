(function() {
    'use strict';
    angular.module('app')
        .component('private', {
            templateUrl: 'views/private.html',
            controller: PrivateCtrl,
            controllerAs: 'vm'
        });

    function PrivateCtrl(User, $location, $timeout) {
        var vm = this;

        var check = User.checkLogin();
        if (check.value == false) {
            $timeout(function() {
                $location.path('/Login');
            });
        }
    }
})();