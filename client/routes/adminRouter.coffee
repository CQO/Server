FlowRouter.route '/admin/users',
	name: 'admin-users'
	action: ->
		RocketChat.TabBar.showGroup 'adminusers'
		BlazeLayout.render 'main', {center: 'adminUsers'}

FlowRouter.route '/admin/rooms',
	name: 'admin-rooms'
	action: ->
		RocketChat.TabBar.showGroup 'adminrooms'
		BlazeLayout.render 'main', {center: 'adminRooms'}

FlowRouter.route '/admin/info',
	name: 'admin-info'
	action: ->
		RocketChat.TabBar.showGroup 'adminInfo'
		BlazeLayout.render 'main', {center: 'adminInfo'}
FlowRouter.route '/admin/:group?',
	name: 'admin'
	action: ->
		RocketChat.TabBar.showGroup 'admin'
		BlazeLayout.render 'main', {center: 'admin'}
