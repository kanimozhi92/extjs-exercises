Ext.define('RestMag.orders.ManageOrders',{
	extend     : 'Ext.panel.Panel',
	alias      : 'widget.rmmanageorders',
	requires   : [
		'RestMag.orders.ManageOrdersController'
	],
	controller : 'rmmanageorders',
	initComponent : function(){
		var me = this;

		me.items = me.buildItems();
		me.callParent(arguments);
	},
	buildItems : function(){
		return [{
			xtype     : 'mastergrid',
			gridId    : 'manageordergrid'
		}]
	}
});