(function() {
    'use strict';

    angular
        .module('app')
        .factory('BookService', Service);

    Service.$inject = ['$http'];

    function Service($http) {
        var service = {
            getBooks: getBooks,
            getBooksDetails:getBooksDetails
        };

        return service;

        ////////////////
        function getBooksDetails(id) {
            return $http.get('http://jsonplaceholder.typicode.com/posts/'+id)
                .then(getBooksComplete).catch(function(e) {
                    //console.log("error", e);
                    throw e;
                }).finally(function() {

                    //console.log("This finally block");

                });
        }

        function getBooks() {
            return $http.get('http://jsonplaceholder.typicode.com/posts/')
                .then(getBooksComplete).catch(function(e) {
                    //console.log("error", e);
                    throw e;
                }).finally(function() {

                    //console.log("This finally block");

                });
        }

        function getBooksComplete(response) {
            //console.log("entri su getbooks");
            //console.log(response.data);
            return response.data;
        }

        function getBooksFailed(error) {
            console.error('XHR Failed for getbooks.' + error.data);
        }
    }
})();
