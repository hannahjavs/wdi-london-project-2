angular
  .module('itineraryApp')
  .controller('RegisterCtrl', RegisterCtrl)
  .controller('LoginCtrl', LoginCtrl);

RegisterCtrl.$inject = ['$auth', '$state'];
function RegisterCtrl($auth, $state) {
  const vm = this;
  vm.user = {};

  function submit() {
    console.log(vm);

    $auth.signup(vm.user)
      .then(() => $state.go('login'))
      .catch(() => $state.go('register'));

  }

  vm.submit = submit;
}

LoginCtrl.$inject = ['$auth', '$state'];
function LoginCtrl($auth, $state) {
  const vm = this;
  vm.credentials = {};

  function submit() {

    $auth.login(vm.credentials)
      .then(() => $state.go('placesIndex'))
      .catch(() => $state.go('login'));

  }

  vm.submit = submit;
}
