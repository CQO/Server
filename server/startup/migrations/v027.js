// Generated by CoffeeScript 1.10.0
(function() {
  RocketChat.Migrations.add({
    version: 27,
    up: function() {
      RocketChat.models.Users.update({}, {
        $rename: {
          roles: '_roles'
        }
      }, {
        multi: true
      });
      RocketChat.models.Users.find({
        _roles: {
          $exists: 1
        }
      }).forEach(function(user) {
        var ref, results, roles, scope;
        ref = user._roles;
        results = [];
        for (scope in ref) {
          roles = ref[scope];
          results.push(RocketChat.models.Roles.addUserRoles(user._id, roles, scope));
        }
        return results;
      });
      return RocketChat.models.Users.update({}, {
        $unset: {
          _roles: 1
        }
      }, {
        multi: true
      });
    }
  });

}).call(this);
