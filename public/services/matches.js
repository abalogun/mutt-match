angular.module('mutt-match')

.service('matchesService', ['$http', '$log', function($http, $log) {
  let id = 8;

  $log.log('*** matchesService firing!!! ***');

  let _state = {
    matches: []
  };

  this.get = function(prop) {
    return _state[prop];
  };

  this.set = function(prop, val) {
    _state[prop] = val
  };

  this.fetchMatches = function() {
    return $http.get(`/users/${id}/matches`) //hard-coded id for now
      .then((resp) => {
        this.set('matches', resp.data);
        return this.get('matches');
      })
  };

}]);
