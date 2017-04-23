function AuthService($q, LoginService) {
  var auth = {};
  var authData = null;

  function storeAuthData(response) {
    authData = response;
    return authData;
  }
  function clearAuthData() {
    authData = null;
  }
  this.login = function (user) {
    return LoginService.login(user.email, user.password).then(function(response) {
      authData = response;
      return authData;
    });
  };
  this.logout = function () {
    //log user out
    return $q(function(resolve, reject){
      resolve(clearAuthData());
    });
  };
  this.requireAuthentication = function () {
    return $q(function(resolve, reject){
      if (authData && authData.id > 0) {
        resolve(authData);
      } else {
        reject('User is not authenticated');
      }
    });
  };
  this.isAuthenticated = function () {
    return !!authData;
  };
  this.getUser = function () {
    if (authData) {
      return authData;
    }
  };
}

angular
  .module('components.auth')
  .service('AuthService', AuthService);
