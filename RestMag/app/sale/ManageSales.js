Ext.define('RestMag.chef.ManageSales',{
    extend : 'Ext.panel.Panel',
    alias  : 'widget.rmmanagesales',
    items : [{
        xtype : 'mastergrid',
        gridId : 'managesalesgrid',
        gridUrl   : 'http://localhost:8080/getManageOrders'
    }]
});