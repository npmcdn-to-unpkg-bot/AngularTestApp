(function () {
    'use strict';
    angular.module('app')
        .component('book', {
            templateUrl: 'book/book.html',
            controller: BookCtrl,
            controllerAs: 'vm'
        });

    function BookCtrl(BookService) {
        var vm = this;
        vm.bookList = [];
        
        activate();
        /*
        * IMPLEMENT 
        */
        function activate() {
           return getBooks().then(function() {
            console.log('Activated Books View');
        });
        }
        
        function getBooks() {
        return BookService.getBooks()
            .then(function(data) {
                vm.bookList = data;
                console.log(vm.bookList);
                return vm.bookList;
            });
    }
    }

})();


