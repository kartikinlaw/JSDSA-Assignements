// WAP to count number of digits in a given num



function countDigits(n){
    let count =0;
    while(n>0){
        n=parseInt(n/10);
        count++;
    }
    return count;
}

console.log(countDigits(12560));