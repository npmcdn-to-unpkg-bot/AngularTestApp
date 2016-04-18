(function () {
    'use strict';
    angular.module('app')
        .component('book', {
            templateUrl: 'book/book.html',
            controller: BookCtrl,
            controllerAs: 'vm'
        });

    function BookCtrl() {
        var vm = this;
        //vm.login = login;
        activate();
        /*
        * IMPLEMENT 
        */
        function activate() {
            /*  var check = LocalStorage.checkLogin();
              if (check.value == true) {
                  $timeout(function () {
                      $location.path('/Private');
                  });*/
        }
    }

})();

