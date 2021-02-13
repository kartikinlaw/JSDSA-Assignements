// Write a function to check if an array is sorted or not.

function checkSorted(arr){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            return false;
        }
    }
    return true;
}

let nums1 =[1,2,3,4];
let nums2 =[1,2,8,4];
console.log(checkSorted(nums1));
console.log(checkSorted(nums2));