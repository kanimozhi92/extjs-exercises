Ext.define('Galleryion.main.DetailWindow',{
    extend : 'Ext.Window',
    alias  : 'widget.detailwindow',
    initComponent : function(){
        var me = this;

        me.title    = me.record.data.name;
        me.autoShow =  true;
        me.width    = 500;
        me.height   = 500;
        me.html     = '<img src="'+me.record.data.avatar+'" style="max-width:100%;margin:auto"/>';

        me.callParent(arguments);
    }     
})