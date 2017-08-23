Ext.define('Gridion.main.MainController',{
    extend : 'Ext.app.ViewController',
    alias : 'controller.main',
    onItemDblClickGridPanel:function( gridPanel, record, item, index, e, eOpts ){
        Ext.create('Ext.Window',{
            title : 'Index',
            autoShow: true,
            width : 400,
            height: 400,
            html : '<img src="'+record.data.avatar+'" style="max-width:100%;margin:auto"/>'
        })
    }
})