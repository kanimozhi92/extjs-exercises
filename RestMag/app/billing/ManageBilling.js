Ext.define('RestMag.chef.ManageBilling',{
    extend : 'Ext.panel.Panel',
    alias  : 'widget.rmmanagebilling',
    items : [{
        xtype : 'mastergrid',
        gridId : 'managebillinggrid',
        gridUrl   : 'http://localhost:8080/getManageOrders'
    }]
});