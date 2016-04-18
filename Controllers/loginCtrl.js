(function() {
    'use strict';
    angular.module('app')
        .component('login', {
            templateUrl: 'views/login.html',
            controller: LoginCtrl,
            controllerAs: 'vm'
        });

    function LoginCtrl($location,$timeout,User) {
        var vm = this;
       
        vm.login = login;
        
        /*
        * IMPLEMENT 
        */
        var check = User.checkLogin();
        if (check.value == true) {
            $timeout(function() {
                $location.path('/Private');
            });
        }
        
        function login(){
            
            var auth =User.login(vm.email,vm.password);
           if(auth.value){
                $location.path( "/Private" );
           }else{
               vm.errorLogin="User & password error";
           }
        }
    }

})();

