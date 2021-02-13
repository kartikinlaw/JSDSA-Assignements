// 7. Write a function that takes two integers ‘a’ & ‘b’ and returns its LCM.

// a x b = LCM(a, b) * GCD (a, b)

function lcm(n1,n2){
    if(n1==0 || n2==0){
        return 0;
    }
    return ((n1*n2)/gcd(n1,n2));
}

function gcd(dd,dv){
    if(dd==0 || dv==0){
        return 0;
    }
    let rem;
    while(rem!=0){
        let rem = dd%dv;
        if(rem==0){
            return dv;
        }
        dd = dv;
        dv = rem;
    }
}

console.log(lcm(6,9));