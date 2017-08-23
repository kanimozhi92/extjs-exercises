Ext.define('Calc.main.MainController',{
    extend      : 'Ext.app.ViewController',
    alias       : 'controller.main',
    onClickSubmit : function(){
        var references =this.getReferences();
        var result;
        if(references.operation.value == '+'){
            result = references.number1.value + references.number2.value;
        }
        else if(references.operation.value == '-'){
            result = references.number1.value - references.number2.value;
        }
        else if(references.operation.value == '*'){
            result = references.number1.value * references.number2.value;
        }
        else if(references.operation.value == '/'){
            result = references.number1.value / references.number2.value;
        }
        
        if(result == references.useranswer.value){
            Ext.Msg.alert('Success','Very Good');
        } 
        else{
            Ext.Msg.alert('Failure','Sorry..Your correct answer is "'+ result +'"');
        }
    }
})