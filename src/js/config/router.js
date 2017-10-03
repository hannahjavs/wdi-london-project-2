angular
  .module('itineraryApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'js/views/auth/login.html',
      controller: 'LoginCtrl as login'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/js/views/auth/register.html',
      controller: 'RegisterCtrl as register'
    })
    .state('placesIndex', {
      url: '/places',
      templateUrl: 'js/views/places/index.html',
      controller: 'PlacesIndexCtrl as placesIndex'
    })
    .state('usersShow', {
      url: '/users/:id',
      templateUrl: 'js/views/users/show.html',
      controller: 'UsersShowCtrl as usersShow'
    })
    .state('plansIndex', {
      url: '/plans',
      templateUrl: '/js/views/plans/index.html',
      controller: 'PlansIndexCtrl as plansIndex'
    })
    .state('plansNew', {
      url: '/plans/new',
      templateUrl: '/js/views/plans/new.html',
      controller: 'PlansNewCtrl as plansNew'
    })
    .state('plansShow', {
      url: '/plans/:id',
      templateUrl: '/js/views/plans/show.html',
      controller: 'PlansShowCtrl as plansShow'
    })
    .state('plansEdit', {
      url: '/plans/:id/edit',
      templateUrl: '/js/views/plans/edit.html',
      controller: 'PlansEditCtrl as plansEdit'
    });

  $urlRouterProvider.otherwise('/');
}
