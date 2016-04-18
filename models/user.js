(function() {
    'use strict';

    angular
        .module('app')
        .factory('User', User);

    //Service.$inject = ['dependency1'];
    function User() {
        function User(user="", password="", key = "") {
            console.log("User create");
            this.user = user;
            this.password = password;
            this.key = key;
        }

        User.getFullName = getFullName;
        
        function getFullName() {
            return this.firstName + ' ' + this.lastName;
        }
        return User;
    }
})();