// 3. Write a function that accepts a character and prints if it is “Uppercase” or
// “Lowercase”.
const prompt = require('prompt-sync')();

function checkCase(){
    const ch = prompt('Enter character\n');
    if(ch>'A' && ch<='Z'){
        return 'Uppercase';
    }else if(ch>'a' && ch<='z'){
        return 'Lowercase';
    }else{
        return 'Invalid Character';
    }
}

console.log(checkCase())
