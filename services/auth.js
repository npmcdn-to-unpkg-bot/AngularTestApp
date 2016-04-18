(function() {
    'use strict';

    angular
        .module('app')
        .factory('Authentification', Authentification);

    // Authentification.$inject = ['$cookies'];
    function Authentification($cookies) {
        var service = {
            login: login,
            register: register,
            checkLogin: checkLogin,
            logOut: logOut
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

                        if (arr[i].User === user && arr[i].Password) {
                            var expireDate = new Date();
                            expireDate.setDate(expireDate.getDate() + 1);
                            var random = Math.random().toString(36).substring(7)
                            $cookies.put('userkey', random, { 'expires': expireDate });
                            return setKey(random, user, password);
                        }
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

function logOut() {
    $cookies.remove('userkey');
}
        function checkLogin() {
            if (typeof (Storage) !== "undefined") {
                var arr = JSON.parse(localStorage.getItem("userData"));

                if ((arr === undefined) || (arr == null) || (arr == "undefined")) {

                    return { value: false, error: "user or password error" }
                }
                else {
                    for (var i = 0, len = arr.length; i < len; i++) {
                        console.log(arr[i].Key + "----" + $cookies.get('userkey'));
                        if (arr[i].Key === $cookies.get('userkey')) {

                            return { value: true, error: "" }
                        }
                    }
                    return { value: false, error: "user or password error" }
                }
            }
            else {
                console.log("Sorry! No Web Storage support..");
                return { value: false, error: "Sorry! No Web Storage support.." }
            }
        }
        function setKey(key, user, password) {
            if (typeof (Storage) !== "undefined") {
                var arr = JSON.parse(localStorage.getItem("userData"));
                if ((arr === undefined) || (arr == null) || (arr == "undefined")) {

                    return { value: false, error: "Sorry! No userData create.." }
                } else {

                    for (var i = 0, len = arr.length; i < len; i++) {
                        if (arr[i].User === user && arr[i].Password === password) {
                            arr[i].Key = key;
                            localStorage.setItem("userData", JSON.stringify(arr));
                            return { value: true, error: "User Exist" };
                        }
                    }

                    return { value: false, error: "User and password error" };
                }

            } else {

                console.log("Sorry! No Web Storage support..");
                return { value: false, error: "Sorry! No Web Storage support.." }
            }

        }
        function User(user, password, key = "") {
            this.User = user;
            this.Password = password;
            this.Key = key;

        }
    }
})();

