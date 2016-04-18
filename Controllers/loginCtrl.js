(function() {
    'use strict';
    angular.module('app')
        .component('login', {
            templateUrl: 'views/login.html',
            controller: LoginCtrl,
            controllerAs: 'vm'
        });

    function LoginCtrl(Authentification,$location,$timeout,User) {
        var vm = this;
        vm.user= new User();
        console.log(vm.user);
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
            
            var auth =Authentification.login(vm.user.email,vm.user.password);
           if(auth.value){
                $location.path( "/Private" );
           }else{
               vm.errorLogin="User & password error";
           }
        }
    }

})();

