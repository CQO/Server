// Generated by CoffeeScript 1.10.0
(function() {
  Meteor.methods({
    openRoom: function(rid) {
      if (!Meteor.userId()) {
        return false;
      }
      return ChatSubscription.update({
        rid: rid,
        'u._id': Meteor.userId()
      }, {
        $set: {
          open: true
        }
      });
    }
  });

}).call(this);