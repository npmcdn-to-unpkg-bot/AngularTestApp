(function () {
    'use strict';

    angular
        .module('app')
        .factory('Authentification', Authentification);

    //Service.$inject = ['dependency1'];
    function Authentification() {
        var service = {
            login: login,
            register: register
        };

        return service;

        ////////////////
        function login(user, password) {
            if (typeof (Storage) !== "undefined") {
                var arr = JSON.parse(localStorage.getItem("userData"));
                if ((arr === undefined) || (arr == null) || (arr == "undefined")) {
                    return { value: false, error: "user or password error" }
                }
                else {
                    for (var i = 0, len = arr.length; i < len; i++) {

                        if (arr[i].User === user && arr[i].Password)
                            return { value: true, error: "" };
                    }
                }
            }
            else {
                console.log("Sorry! No Web Storage support..");
                return { value: false, error: "Sorry! No Web Storage support.." }
            }
        }

        function register(user, password) {
            if (typeof (Storage) !== "undefined") {
                var arr = JSON.parse(localStorage.getItem("userData"));
                if ((arr === undefined) || (arr == null) || (arr == "undefined")) {
                    arr = [];
                    arr.push(new User(user, password));

                    localStorage.setItem("userData", JSON.stringify(arr));
                    return { value: true, error: "" };
                } else {

                    for (var i = 0, len = arr.length; i < len; i++) {

                        if (arr[i].User === user)
                            return { value: false, error: "User Exist" };
                    }
                    arr.push(new User(user, password));
                    localStorage.setItem("userData", JSON.stringify(arr));
                    return { value: true, error: "" };
                }

            } else {

                console.log("Sorry! No Web Storage support..");
                return { value: false, error: "Sorry! No Web Storage support.." }
            }

        }

        function checkLogin() {
            if (typeof (Storage) !== "undefined") {
                // Code for localStorage/sessionStorage.
            } else {
                console.log("Sorry! No Web Storage support..");
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

