// Generated by CoffeeScript 1.10.0
(function() {
  Meteor.methods({
    setAvatarFromService: function(dataURI, contentType, service) {
      var user;
      check(dataURI, String);
      check(contentType, Match.Optional(String));
      check(service, Match.Optional(String));
      if (!Meteor.userId()) {
        throw new Meteor.Error('error-invalid-user', "Invalid user", {
          method: 'setAvatarFromService'
        });
      }
      if (!RocketChat.settings.get("Accounts_AllowUserAvatarChange")) {
        throw new Meteor.Error('error-not-allowed', 'Not allowed', {
          method: 'setAvatarFromService'
        });
      }
      user = Meteor.user();
      return RocketChat.setUserAvatar(user, dataURI, contentType, service);
    }
  });

  DDPRateLimiter.addRule({
    type: 'method',
    name: 'setAvatarFromService',
    userId: function() {
      return true;
    }
  }, 1, 5000);

}).call(this);