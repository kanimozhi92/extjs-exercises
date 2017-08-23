Ext.define('Galleryion.main.Main',{
    extend : 'Ext.panel.Panel',
    alias : 'widget.main',
    controller : 'main',
    title : 'Gallery Builder',
    autoScroll: true,
    bodyPadding: 20,
    initComponent : function(){
        var me = this;

        me.items = me.buildItems();
        me.callParent(arguments);
    },  
    buildItems : function(){
        return [{
            xtype: 'dataview',
            cls :'gallery-dataview',
            tpl: [
                '<tpl for=".">',
                    '<div class="dataview-multisort-item">',
                        '<h3>{name}</h3>',
                        '<img src={avatar} />',
                    '</div>',
                '</tpl>'
            ],
            itemSelector: 'div.dataview-multisort-item',
            listeners:{
                itemdblclick:'onItemDblClickDataView'
            },
            store: Ext.create('Ext.data.Store', {
                autoLoad: true,
                sortOnLoad: true,
                fields: ['name','avatar'],
                proxy: {
                    type: 'ajax',
                    url : 'resources/data/gallery.json',
                    reader: {
                        type: 'json',
                        rootProperty: ''
                    }
                }
            })            
        }];
    }
});