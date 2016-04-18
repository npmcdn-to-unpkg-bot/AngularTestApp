(function() {
    'use strict';

    angular
        .module('app')
        .factory('User', User);

    //Service.$inject = ['dependency1'];
    function User() {
        function User(user, password, key = "") {
            this.User = user;
            this.Password = password;
            this.Key = key;
        }

        User.getFullName = getFullName;
        
        function getFullName() {
            return this.firstName + ' ' + this.lastName;
        }
        return User;
    }
})();