(function() {
    'use strict';
    angular.module('app')

        .component('login', {
            templateUrl: 'views/login.html',
            controller: LoginCtrl,
            controllerAs: 'vm'
        });

    function LoginCtrl(Authentification,$location) {
        var vm = this;
        vm.login = login;
        
        function login(){
            var auth =Authentification.login(vm.email,vm.password);
           console.log(auth);
           if(auth){
                $location.path( "/Private" );
           }else{
               vm.errorLogin="User & password error";
           }
        }
        

    }

})();

