(function() {
    'use strict';
    angular.module('app')
        .component('bookList', {
            templateUrl: 'book/book.html',
            controller: BookCtrl,
            controllerAs: 'vm',
        });

    function BookCtrl(BookService,Menu) {
        var vm = this;
        vm.bookList = [];
        vm.menu = Menu.menu();
        //console.log("entri???");
        activate();
        /*
         * IMPLEMENT
         */
        function activate() {
            return getBooks().then(function() {
                //console.log('Activated Books View');
            });
        }

        function getBooks() {
            return BookService.getBooks()
                .then(function(data) {
                    vm.bookList = data;
                    //console.log(vm.bookList);
                    return vm.bookList;
                });
        }
    }

})();
