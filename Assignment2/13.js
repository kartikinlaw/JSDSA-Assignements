// 13. Write a function to reverse an array without taking extra space.

function reverseArray(arr){
    let si = 0;
    let ei = arr.length-1;
    while(si<ei){
        let temp = arr[si];
        arr[si] = arr[ei];
        arr[ei] = temp;
        si++;
        ei--;
    }
}

let arr1 = [1,2,3,4];
let arr2 = [4,5,6,8,9];
reverseArray(arr1);
reverseArray(arr2);
console.log(arr1);
console.log(arr2);