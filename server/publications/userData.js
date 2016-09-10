// Generated by CoffeeScript 1.10.0
(function() {
  Meteor.publish('userData', function() {
    if (!this.userId) {
      return this.ready();
    }
    return RocketChat.models.Users.find(this.userId, {
      fields: {
        name: 1,
        username: 1,
        status: 1,
        statusDefault: 1,
        statusConnection: 1,
        avatarOrigin: 1,
        utcOffset: 1,
        language: 1,
        settings: 1,
        roles: 1,
        defaultRoom: 1,
        'services.github': 1,
        'services.gitlab': 1,
        requirePasswordChange: 1,
        requirePasswordChangeReason: 1,
        'services.password.bcrypt': 1,
        statusLivechat: 1
      }
    });
  });

}).call(this);