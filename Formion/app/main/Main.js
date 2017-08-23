Ext.define('Formion.main.Main',{
    extend    : 'Ext.panel.Panel',
    alias     : 'widget.main',
    controller: 'main',
    items     : [{
        xtype     : 'form',
        title     : 'Form Calc',
        bodyPadding : 20,
        width     : 500,
        height    : 500,
        items     : [{
            xtype      : 'textfield',
            fieldLabel : 'Number1',
            name       : 'number1',
            reference  : 'number1',
            value      : 2,
            allowBlank : false
        },{
            xtype      : 'textfield',
            fieldLabel : 'Number2',
            name       : 'number2',
            reference  : 'number2',
            value      : 5,
            allowBlank : false
        },{
            xtype       : 'combobox',
            fieldLabel  : 'Choose an Operation',
            name        : 'operation',
            reference   : 'operation',
            value       : 'Add',
            store       :  Ext.create('Ext.data.Store',{
                fields :['symbol','operation'],
                data : [{
                    symbol : '+',
                    operation : 'Add'
                },{
                 symbol : '-',
                 operation : 'Sub'
                },{
                 symbol : '*',
                 operation : 'Mul'
                },{
                 symbol : '/',
                 operation : 'Div'
                }]
            }),
            displayField: 'symbol',
            valueField  : 'operation',
        },{
            xtype   : 'textfield',
            fieldLabel : 'Enter your answer',
            name    :'babyanswer',
            reference:'babyanswer'
        }],
        buttons  : [{
            text    : 'Submit',
            handler : 'onClickSubmit'
        }]       
    }]
});