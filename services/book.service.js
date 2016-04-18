(function() {
'use strict';

    angular
        .module('app')
        .factory('BookService', Service);

    Service.$inject = ['$http'];
    function Service($http) {
        var service = {
            getBooks:getBooks
        };
        
        return service;

        ////////////////
        function getBooks() {
             return $http.get('http://jsonplaceholder.typicode.com/posts/')
            .then(getBooksComplete)
            .catch(getBooksFailed);    
        }
        function getBooksComplete(response) {
            return response.data;
        }

        function getBooksFailed(error) {
            console.error('XHR Failed for getbooks.' + error.data);
        } 
    }
})();