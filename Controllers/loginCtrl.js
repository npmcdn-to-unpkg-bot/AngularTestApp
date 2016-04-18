(function() {
    'use strict';
    angular.module('app')
        .component('login', {
            templateUrl: 'views/login.html',
            controller: LoginCtrl,
            controllerAs: 'vm'
        });

    function LoginCtrl(Authentification,$location,$timeout) {
        var vm = this;
        vm.login = login;
        
        /*
        * IMPLEMENT 
        */
        var check = Authentification.checkLogin();
        if (check.value == true) {
            $timeout(function() {
                $location.path('/Private');
            });
        }
        
        function login(){
            var auth =Authentification.login(vm.email,vm.password);
           if(auth.value){
                $location.path( "/Private" );
           }else{
               vm.errorLogin="User & password error";
           }
        }
    }

})();

