Ext.define('Calc.main.Main',{
    extend      : 'Ext.form.Panel',
    alias       : 'widget.main',
    controller  : 'main',
    items   :[{
        xtype   :'form',
        title   :'Calculator App',
        width   : 500,
        height  : 400,
        padding : 20,
        closable: false,
        draggable: false,
        resizable: false,
        items :[{
            padding     : 5,
            xtype       : 'numberfield',
            fieldLabel  : 'Number1',
            reference   : 'number1',
            maxValue    : 99,
            minValue    : 0
        },{
            padding     : 5,
            xtype       : 'numberfield',
            fieldLabel  : 'Number2',
            reference   : 'number2',
            maxValue    : 99,
            minValue    : 0
        },{
            padding     : 5,
            xtype       : 'combobox',
            fieldLabel  : 'Choose any arithmetic operation',
            reference   : 'operation',
            displayField: 'operation',
            valueField  : 'symbol',
            value       : 'Add',
            store       : Ext.create('Ext.data.Store',{
                field   :['symbol','operation'],
                data    :[{
                    symbol      : '+',
                    operation   : 'Add'
                },{
                    symbol      : '-',
                    operation   : 'Sub'
                },{
                    symbol      : '*',
                    operation   : 'Mul'
                },{
                    symbol      : '/',
                    operation   : 'Div'
                }]
            })
        },{
             padding     : 5,
            xtype       : 'numberfield',
            fieldLabel  : 'Enter your answer',
            reference   : 'useranswer'
        }],
             buttons    :[{
                text    : 'Submit',
                handler : 'onClickSubmit'
        }]
    }]
});