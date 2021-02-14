// 14.Write a program to input an array and a target value, a number. Write a function
// which prints all pairs of numbers which sum equals to the target.
// For eg: For this array => {3, 1, 11, 2, 9, 7, 4, 5, -1, 13, 6} and target of 8
// Ans: (3,5), (1,7), (2,6), (9,-1)

function targetPairs(arr,target){
    for(let i=0;i<arr.length-1;i++){
      for(let j=i+1;j<arr.length;j++){
        if((arr[i]+arr[j])==target){
            console.log('('+arr[i]+','+arr[j]+')');
        }
      }  
    }
}

let nums = [3, 1, 11, 2, 9, 7, 4, 5, -1, 13, 6];
let targetSum = 8;
targetPairs(nums ,targetSum)
console.log('*******************')
targetPairs([0,0,2,2,3,4,4] ,4)

