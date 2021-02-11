let bin = 1111000;
console.log(btod(1111000));

function btod(bin){
let dec = 0;
let place =0;
    while(bin>0){
        let bdigit = bin%10;
        dec += bdigit * power(place) ;
        bin=parseInt(bin/10);
        place++;
    }
    return dec;
}

function power(place){
     //return 10^place
    if(place ==0){
        return 1;
    }
    let ans =1;
    while(place>0){
        ans *= 2;
        place--;
    }
    return ans;
}