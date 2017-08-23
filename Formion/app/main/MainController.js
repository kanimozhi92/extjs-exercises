Ext.define('Formion.main.MainController',{
    extend        : 'Ext.app.ViewController',
    alias         : 'controller.main',
    onClickSubmit :function(){
        var references =this.getReferences();
        var number1 = Number(references.number1.value);
        var number2 = Number(references.number2.value);
        var babyAnswer = Number(references.babyanswer.value);
        var operation = references.operation.value;
        var result, showImg, title;
        var successImg = "https://st.depositphotos.com/1967477/1881/v/950/depositphotos_18812923-stock-illustration-happy-smiley-emoticon.jpg";
        var failureImg = "https://lovelace-media.imgix.net/uploads/877/ff1fe8c0-fd8c-0132-f419-0e18518aac2f.png?w=740&h=740&fit=crop&crop=faces&auto=format&q=70";

        if(operation == 'Add'){
             result = number1 + number2;
        }
        else if(operation == 'Sub'){
            result = number1 - number2;
        }
        else if(operation == 'Mul'){
            result = number1 * number2;
        }
        else if(operation == 'Div'){
            result = number1 / number2;
        }

        if(result == babyAnswer){
            title = "Success"; //if it is not declared title will be result
            showImg = successImg;
        }
        else{
            title = "Failure"; //if it is not declared title will be result
            showImg = failureImg;
        }

        var window = Ext.create('Ext.Window', {
            title : title,
            //title: result,
            width  : 500,
            height : 600,
            html   : '<img src="'+showImg+'" style="max-width:100%;margin:auto;"/>'
        });

        window.show();
    }
})