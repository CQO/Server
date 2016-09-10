// Generated by CoffeeScript 1.10.0
(function() {
  Meteor.methods({
    messageSearch: function(text, rid, limit) {
      var from, mention, options, query, r, result;
      check(text, String);
      check(rid, String);
      check(limit, Match.Optional(Number));
      if (!Meteor.userId()) {
        throw new Meteor.Error('error-invalid-user', 'Invalid user', {
          method: 'messageSearch'
        });
      }

      /*
      			text = 'from:rodrigo mention:gabriel chat'
       */
      result = {
        messages: [],
        users: [],
        channels: []
      };
      query = {};
      options = {
        sort: {
          ts: -1
        },
        limit: limit || 20
      };
      from = [];
      text = text.replace(/from:([a-z0-9.-_]+)/ig, function(match, username, index) {
        from.push(username);
        return '';
      });
      if (from.length > 0) {
        query['u.username'] = {
          $regex: from.join('|'),
          $options: 'i'
        };
      }
      mention = [];
      text = text.replace(/mention:([a-z0-9.-_]+)/ig, function(match, username, index) {
        mention.push(username);
        return '';
      });
      if (mention.length > 0) {
        query['mentions.username'] = {
          $regex: mention.join('|'),
          $options: 'i'
        };
      }
      text = text.trim().replace(/\s\s/g, ' ');
      if (text !== '') {
        if (/^\/.+\/[imxs]*$/.test(text)) {
          r = text.split('/');
          query.msg = {
            $regex: r[1],
            $options: r[2]
          };
        } else if (RocketChat.settings.get('Message_AlwaysSearchRegExp')) {
          query.msg = {
            $regex: text,
            $options: 'i'
          };
        } else {
          query.$text = {
            $search: text
          };
          options.fields = {
            score: {
              $meta: "textScore"
            }
          };
        }
      }
      if (Object.keys(query).length > 0) {
        query.t = {
          $ne: 'rm'
        };
        query._hidden = {
          $ne: true
        };
        if (rid != null) {
          query.rid = rid;
          try {
            if (Meteor.call('canAccessRoom', rid, this.userId) !== false) {
              if (!RocketChat.settings.get('Message_ShowEditedStatus')) {
                options.fields = {
                  'editedAt': 0
                };
              }
              result.messages = RocketChat.models.Messages.find(query, options).fetch();
            }
          } catch (undefined) {}
        }
      }
      return result;
    }
  });

}).call(this);