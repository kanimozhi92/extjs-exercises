Ext.define('Galleryion.main.MainController',{
    extend:'Ext.app.ViewController',
    alias : 'controller.main',
    onItemDblClickDataView : function( dataview, record, item, index, e, eOpts ){
        Ext.widget('detailwindow',{
            record : record
        });
    }
})