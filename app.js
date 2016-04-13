angular.module('app', ['ngComponentRouter'])

.config(function($locationProvider) {
  $locationProvider.html5Mode(false);
})

.value('$routerRootComponent', 'app')

.component('app', {
  templateUrl: 'views/index.html',
  $routeConfig: [
    {path: '/Login', name: 'Login', component: 'login', useAsDefault: true},
    {path: '/Registration', name: 'Registration', component: 'registration'},
  ]
  
})


