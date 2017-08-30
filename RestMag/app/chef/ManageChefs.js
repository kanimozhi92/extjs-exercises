Ext.define('RestMag.chef.ManageChefs',{
    extend : 'Ext.panel.Panel',
    alias  : 'widget.rmmanagechefs',
    items : [{
        xtype : 'mastergrid',
        gridId : 'managechefgrid',
        gridUrl   : 'http://localhost:8080/getManageOrders'
    }]
});