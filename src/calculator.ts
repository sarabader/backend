const pro = require('prompt');

pro.start();

pro.get(['num1', 'num2','op'], function (err:any, result:any) {
    if (result.op ==='+'){
        console.log(Number(result.num1)+ Number(result.num2 ));

    }
    if (result.op ==='-'){
        console.log(Number(result.num1)- Number(result.num2 ));

    }
    if (result.op ==='*'){
        console.log(Number(result.num1)*Number(result.num2 ));

    }
    if (result.op ==='/'){
        console.log(Number(result.num1)/ Number(result.num2 ));

    }
// Printing the result

})