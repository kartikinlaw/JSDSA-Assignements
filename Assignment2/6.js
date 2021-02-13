// 6. Write a function that takes two integers ‘a’ & ‘b’ and returns its GCD.


function gcd(dd,dv){
    if(dd ==0 || dv ==0){
        return 0;
    }
    let rem ;
    while(rem!=0){
        rem = dd%dv;
        if(rem==0){
            return dv;
        }
        dd = dv;
        dv = rem;
    }
    
}

let n1 = 9;
let n2 = 6;
console.log(gcd(n1,n2));