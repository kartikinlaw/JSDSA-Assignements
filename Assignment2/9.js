
function countPrimeInArr(arr){
    count = 0;
    for(const el of arr){
        if(checkPrime(el)==true){
            count++;
        }
    }
    return count;
}

function checkPrime(num){
    if(num<2){
        return false;
    }
    for(let i=2;i*i<=num;i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}

let nums = [2,3,7,4,0,1,6,99,7,11,53]
console.log(countPrimeInArr(nums));