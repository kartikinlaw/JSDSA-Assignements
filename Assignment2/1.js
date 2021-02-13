//Write a function to convert decimal numbers into octal format.
//For eg: 453 -> 705

function deciToOct(deci){
    let place =1;
    let ans = 0;
    while(deci>0){
        let rem = deci%8;
        ans = rem * place + ans;
        place = place * 10;
        deci = parseInt(deci/8);
    }
    return ans ;
}


console.log(deciToOct(453));