(function() {
  Meteor.startup(function() {
    return Meteor.setTimeout(function() {
      let msg = ["     Version: " + RocketChat.Info.version, "Process Port: " + process.env.PORT, "    Site URL: " + (RocketChat.settings.get('Site_Url'))].join('\n');
      return SystemLogger.startup_box(msg, 'SERVER RUNNING');
    }, 100);
  });

}).call(this);
