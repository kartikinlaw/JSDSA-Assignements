//Write the pseudocode & the program to calculate GCD 
//of two numbers.
// Euclid's Algo 

/*
Take a as dividend and b as divisor
Until rem  is zero , keep num1%num2 and once it's zero 
return the divisor which divided the dividend to give 0

D is dividend  and d is divisor and tempd is the variable 
to store old d value which we can assign to D later .
*/

function gcd(D,d){
    if(D==0 || d==0){
        return D+d  // smert me
    }
    while(d!=0){
        let tempd = d;
        d = D%d;
        D = tempd;
    }
    return D;
}

console.log(gcd(6,40))