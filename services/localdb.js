(function() {
    'use strict';

    angular
        .module('app')
        .factory('LocalDB', LocalDB);

    //Service.$inject = ['dependency1'];
    function LocalDB() {
        var service = {
            exposedFn: exposedFn
        };

        return service;

        ////////////////
       
        function exposedFn() { }
    }
})();