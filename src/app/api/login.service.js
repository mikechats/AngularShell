function LoginService($q) {
  var svc = this;

  svc.login = function(email, password) {
    return $q(function(resolve, reject){
      if (email === 'miketest@gmail.com' && password === '12345') {
        var user = {
          id: 10001,
          email: 'miketest@gmail.com',
          firstname: 'Mike',
          lastname: 'Test',
        };
        resolve(user);
      } else {
        reject({
          message: 'Username and password don\'t match'
        });
      }
    });
  };
}

angular
  .module('api')
  .service('LoginService', LoginService);
