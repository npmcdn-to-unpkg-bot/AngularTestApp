(function () {
    'use strict';
    angular.module('app')
        .component('private', {
            templateUrl: 'private/private.html',
            controller: PrivateCtrl,
            controllerAs: 'vm'
        });

    function PrivateCtrl(LocalStorage, $location, $timeout) {
        var vm = this;
        activate();

        function activate() {
            var check = LocalStorage.checkLogin();
            if (check.value == false) {
                $timeout(function () {
                    $location.path('/Login');
                });
            }
        }
    }
})();
