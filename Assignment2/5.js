// 5. Write a program to calculate inverse of a number.
// (For calculating inverse, you should have a valid input i.e, for a number of n
// digits, the value of each digit should be 1 to n and is unique.)
// 25413 -> 41532 (in “25413” 2 is at 1st place therefore 1 is placed on 2nd place in
// “41532”. 5 is at 2nd place in “25413” therefore 2 is at 5th place in “41532” and so
// on
function inverse(num){
    let ans_str =[];
    let numstr = num.toString();
    for(let i=0;i<numstr.length;i++){
        let ch = numstr.charAt(i);
        ans_str[(parseInt(ch))-1]=i+1;
    }
    let ans_num = parseInt(ans_str.join(""));
    return ans_num;
}


const prompt = require('prompt-sync')();
//const num = prompt('Enter number\n');
console.log(inverse(25413));

