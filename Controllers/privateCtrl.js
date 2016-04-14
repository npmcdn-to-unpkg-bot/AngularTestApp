(function () {
    'use strict';

    angular.module('app')
        .component('private', {
            templateUrl: 'views/private.html',
            controller: PrivateCtrl,
            controllerAs: 'vm'
        });

    function PrivateCtrl() {
        var vm = this;
    }
})();