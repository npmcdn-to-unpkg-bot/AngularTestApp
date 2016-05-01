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
        vm.loading=true;
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
                    vm.loading=false;
                    //console.log(vm.bookListDetails);
                    return vm.bookListDetails;
                });
        }

    }


})();
