(function () {
    'use strict';
    angular.module('app')
        .component('private', {
            templateUrl: 'views/private.html',
            controller: PrivateCtrl,
            controllerAs: 'vm'
        });

    function PrivateCtrl(User, $location, $timeout) {
        var vm = this;

        activate();
        /*
        * IMPLEMENT 
        */
        function activate() {
            var check = User.checkLogin();
            if (check.value == true) {
                $timeout(function () {
                    $location.path('/Private');
                });
            }
        }
    }
})();