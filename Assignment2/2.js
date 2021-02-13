// 2. Write a program that takes two numbers ‘n1’ & ‘n2’ and a character ‘ch’ as input.
// - If ch = ‘*’ returns multiplication of the numbers
// - If ch = ‘/’ returns quotient after division of the numbers
// - If ch = ‘%’ returns remainder after division of the numbers
// - If ch = ‘+’ returns addition of the numbers
// - If ch = ‘-’ returns subtraction of the numbers

const prompt = require('prompt-sync')();
 


function minicalc(){
    const num1 = parseInt(prompt('Enter number1 '));
    const num2 = parseInt(prompt('Enter number2 '));
    const ch = prompt('Enter operator ');
    if(ch=='*'){
        return num1*num2;
    }else if(ch=='/'){ 
        return num1/num2;
    }else if(ch=='%'){
        return num1%num2;
    }else if(ch=='+'){
        return num1+num2;
    }else if(ch=='-'){
        return num1-num2;
    }else{
        return 'wrong input'
    }
}

console.log(minicalc());

//Below program continues to ask for inputs until -1 is entered
// const prompt = require('prompt-sync')();
 


// function minicalc(){
//     const num1 = parseInt(prompt('Enter number1 '));
//     const num2 = parseInt(prompt('Enter number2 '));
//     const ch = prompt('Enter operator ');
//     if(ch=='*'){
//         return num1*num2;
//     }else if(ch=='/'){ 
//         return num1/num2;
//     }else if(ch=='%'){
//         return num1%num2;
//     }else if(ch=='+'){
//         return num1+num2;
//     }else if(ch=='-'){
//         return num1-num2;
//     }else{
//         return 'wrong input '
//     }
// }

// let choice ;
//     while(choice!=-1){
//         console.log(minicalc());
//         choice = parseInt(prompt('Do you want to Quit :\nENTER any key to Try again or -1 to quit \n'));
//     }
