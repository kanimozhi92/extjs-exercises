Ext.define('RestMag.chef.ManageSuppliers',{
    extend : 'Ext.panel.Panel',
    alias  : 'widget.rmmanagesuppliers',
    items : [{
        xtype : 'mastergrid',
        gridId : 'managesuppliersgrid',
        gridUrl   : 'http://localhost:8080/getManageOrders'
    }]
});