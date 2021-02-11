//converts any decimal value to binary

function dtob(dec){
    let bin =0;
    let place =0;
    while(dec>0){
        let modbytwo = dec%2;
        bin = (modbytwo * power(place)) +bin;
        dec=parseInt(dec/2);
        place++;
    }
    return bin;
}

function power(place){
    if(place ==0){
        return 1;
    }
    let ans =1;
    while(place>0){
        ans = ans*10;
        place--;
    }
    return ans;
}

console.log(dtob(120));
