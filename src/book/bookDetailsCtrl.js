(function() {
    'use strict';
    angular.module('app')
        .component('bookDetails', {
            templateUrl: 'book/bookDetails.html',
            controller: BookCtrl,
            controllerAs: 'vm'
        });

    function BookCtrl(BookService) {
        var vm = this;
        //vm.bookListDetails;
        vm.id="-1";

        vm.$routerOnActivate = function(next) {
            vm.id=next.params.bookId;
            //console.log(next.params.bookId);
            //console.log("sasa"+vm.id);
            getBooksDetails(vm.id);
        };



        /*
         * IMPLEMENT
         */


        function getBooksDetails(id) {
            return BookService.getBooksDetails(id)
                .then(function(data) {
                    vm.bookListDetails = data;
                    //console.log(vm.bookListDetails);
                    return vm.bookListDetails;
                });
        }

    }


})();
