
function interface(num,base1,base2){
    let ans1 = basetobase(num,base1,10);
    let ans2 = basetobase(ans1,10,2);
    return ans2;
}

function basetobase(base1_num,base1,base2){
    let ans = 0;
    let place =1;
    while(base1_num>0){
       let rem = base1_num%base2;
       ans = ans + rem *place;
       place = place * base1;
       base1_num= parseInt(base1_num/base2);
    }
    return ans;
}


console.log(interface(77,8,16));
