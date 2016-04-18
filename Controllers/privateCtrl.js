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
<<<<<<< HEAD
        var check=Authentification.checkLogin();
        
        if (check.value ==false) {
            console.log(check.value ==false);
            $location.path("/Registration");
=======
        var check = User.checkLogin();
        if (check.value == false) {
            $timeout(function() {
                $location.path('/Login');
            });
>>>>>>> 673f119178c2a5fcc8bbbc6d8b1a6e8bde62175d
        }
    }
})();