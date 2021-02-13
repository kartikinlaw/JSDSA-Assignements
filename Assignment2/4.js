// Write a program to reverse a number: 38105 -> 50183

const prompt = require('prompt-sync')();


function reverseANum(num){
    let ans =0;
    while(num>0){
        let digit = num%10;
        ans = ans*10+digit;
        num=parseInt(num/10);
    }
    return ans;
}

const num = parseInt(prompt('Enter Number You Wanna Reverse\n'));
console.log(reverseANum(num));