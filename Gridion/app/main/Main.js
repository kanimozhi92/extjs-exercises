Ext.define('Gridion.main.Main',{
    extend :'Ext.grid.Panel',
    alias :'widget.main',
    controller :'main',
    title :'Gridion Home Page',
    columns :[
        {
            text : 'Name',
            dataIndex :'name'
        },
        {
            text :'Avatar',
            dataIndex :'avatar',
            flex :1,
            renderer:function(value){
                return '<img src="'+value+'" style="width:100px;height:100px"/>';
            }            
        }
    ],
    listeners:{
            itemdblclick : 'onItemDblClickGridPanel'
    },
    store:Ext.create('Ext.data.Store',{
        autoLoad :true,
        fields : ["name","avatar"],
        proxy:{
            type :'ajax',
            url:'resources/data/gridion.json'
        }
    })
});