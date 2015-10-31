app.controller('checkoutCtrl', function($scope, order, step, user, AuthService, PaymentFactory, $state) {
  $scope.order = order;
  $scope.step = step;
  $scope.login = {};
  $scope.user = user;
  $scope.error = null;
  $scope.shippingAddress = {};
  $scope.billingAddress = {};

  $scope.isLoggedIn = function() {
    return AuthService.isAuthenticated();
  }

  $scope.sendLogin = function(credentials) {
    AuthService.login(credentials)
    .then(function(result) {
      $scope.user = result.data;
      $scope.step = 'address';
    })
    .catch(function(err) {
      $scope.error = 'Invalid login credentials.';
    })
  }

  $scope.confirmOrder = function() {
    $scope.step = "shipping";
    $scope.error = null;
  }

  $scope.copyShipping = function() {
    $scope.billingAddress = _.clone($scope.shippingAddress);
  }

  $scope.confirmAddress = function() {
    $scope.step = "payment"
    $scope.error = null;
  }

  $scope.stripeCallback = function (data, result) {
    if (result.error) {
      $scope.error = result.error.message;
      window.alert('it failed! error: ' + result.error.message);
    } else {
      window.alert('success! token: ' + result.id);
      console.log(order)
      var billing = {
        billingAddress: $scope.billingAddress,
        shippingAddress: $scope.shippingAddress,
        stripeToken: result.id,
        last4: result.card.last4,
        expMonth: result.card.exp_month,
        expYear: result.card.exp_year
      }

      PaymentFactory.checkout(order._id, billing);
      // .then(function(result.data.user) {
      //   $state.go('')
      // })

    }

  };

})