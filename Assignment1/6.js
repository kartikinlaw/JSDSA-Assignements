//WAP to reverse a given num

function rev(n){
    let revrsd = 0;
    while(n>0){
        let dig = n%10;
        revrsd = (revrsd * 10) + dig;
        n=parseInt(n/10);
    }
    return revrsd;
}

console.log(rev(123450));