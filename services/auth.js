(function() {
'use strict';

    angular
        .module('app')
        .factory('Authentification', Authentification);

    //Service.$inject = ['dependency1'];
    function Authentification() {
        var service = {
            login:login
        };
        
        return service;

        ////////////////
        function login(user,password) { 
            if(user==="marco.devecchi84@gmail.com" && password==="123")
                return true;
                
            return false;
        }
    }
})();

