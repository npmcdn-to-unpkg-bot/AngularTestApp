(function() {
    'use strict';

    angular
        .module('app')
        .factory('Authentification', Authentification);

    //Service.$inject = ['dependency1'];
    function Authentification() {
        var service = {
            login: login,
            register:register
        };

        return service;

        ////////////////
        function login(user, password) {
            if (user === "marco.devecchi84@gmail.com" && password === "123") {
                return true;
            }

            return false;
        }

        function register(user, password) {
            if (typeof (Storage) !== "undefined") {
                var arr =  JSON.parse(localStorage.getItem("userData"));
                if ((arr === undefined) || (arr == null) || (arr == "undefined")){
                    arr=[];
                    arr.push(new User(user, password));
                    console.log(arr);
                    localStorage.setItem("userData",JSON.stringify(arr));
                    return true;
                }else{
                    console.log(arr);
                    for (var i = 0, len = arr.length; i < len; i++) {
                        
                        if (arr[i].User===user)
                            return false;
                    }
                    arr.push(new User(user, password));
                    localStorage.setItem("userData",arr);
                    
                }
                
            } else {
                // Sorry! No Web Storage support..
            }

        }
        
        function checkLogin() {
            if (typeof (Storage) !== "undefined") {
                // Code for localStorage/sessionStorage.
            } else {
                // Sorry! No Web Storage support..
            }
            if (user === "marco.devecchi84@gmail.com" && password === "123")
                return true;

            return false;
        }

        function User(user, password) {
            this.User = user;
            this.Password = password;
           
        }
    }
})();

