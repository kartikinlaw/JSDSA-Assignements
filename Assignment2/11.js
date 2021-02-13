// 11.Write a program sort an array that contains only 0’s & 1’s
// For eg: {1,0,1,1,1,0,0,0,1,0,0,1,1}
// Ans: {0,0,0,0,0,0,1,1,1,1,1,1,1}

function sort01(arr){
    let si = 0;
    let ei = nums.length-1;
    while(si<ei){
        if(arr[si]==0 && arr[ei]==1){
            si++;
            ei--;
        }
        else if(arr[si]==0){
            si++;
        }
        else if(arr[ei]==1){
            ei--;
        }
        else{
            arr[si]=0;
            arr[ei]=1;
            si++;
            ei--;
        }
    }
    return arr;
}


let nums = [1,0,1,1,1,0,0,0,1,0,0,1,0,1];
console.log(sort01(nums));
