Ext.define('RestMag.main.MainController',{
    extend : 'Ext.app.ViewController',
    alias  : 'controller.main',
    onClickTreePanelMenuItem : function( treepanel, record, item, index, e, eOpts ){
        var me             = this,
            references     = me.getReferences(),
            masterTabPanel = references.masterTabPanel;

        masterTabPanel.add({
            title : record.data.text,
            items : [{
                xtype : record.data.view
            }]
        });  
    } 
});