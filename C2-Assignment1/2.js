//Write the pseudocode & a program to calculate the simple interest
//based on the inputs(amount, rate, time) provided by the user.

function simpleInterest(amount,rate,time){
    return (parseInt)(amount*rate*time/ 100);
}

console.log(simpleInterest(10,10,10));