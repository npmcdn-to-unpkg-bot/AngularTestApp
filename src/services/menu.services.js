(function() {
    'use strict';

    angular
        .module('app')
        .factory('Menu', menu);

    //factory.$inject = ['dependencies'];

    /* @ngInject */
    function menu() {
        var service = {
            menu: menu
        };

        return service;

        function menu() {
          var menu = [

                    { name: 'Login', link: '/Login' },
                    { name: 'Registration', link: '/Registration' },
                    { name: 'Private', link: '/Private' },
                    { name: 'Book', link: '/BookList' }
                ]
                return menu;

        }
    }
})();
