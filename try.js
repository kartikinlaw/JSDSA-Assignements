/*

// way 4 to get all characters of string(Not a good way although)
// const str = "kjhgf";

// [...str].forEach(element => console.log(element));

// To convert any base to any base  , we convert it first to 
// decimal and then convert decimal to other base .
0 1 1 2 3 5
*/ 

// function fibo(n){
//     if(n<=1){
//         return n;
//     }
//     let left = fibo(n-1);
//     let right = fibo(n-2);
//     return left + right;
// }

// console.log(fibo(5));

//what is subset and subseq

// Consider an array:

//  {1,2,3,4}
// Subarray: contiguous sequence in an array i.e.

// {1,2},{1,2,3}
// Subsequence: Need not to be contiguous, but maintains order i.e.

// {1,2,4}
// Subset: Same as subsequence except it has empty set i.e.

//  {1,3},{}
// Given an array/sequence of size n, possible

// Subarray = n*(n+1)/2
// Subseqeunce = (2^n) -1 (non-empty subsequences)
// Subset = 2^n

// function subsq(str,restr,si){
//     if(si==str.length){
//         console.log(restr)
//         return;
//     }
//     let ch = str.charAt(si);
//     subsq(str,restr+ch,si+1);
//     subsq(str,restr,si+1);
// }

// subsq('abc','',0);
// let k=0,m=0,count =0;
// while(k+m<2021){
//     k+=2;
//     m-=1;
//     count++;
// }

// console.log(count);

// let nums = [1, 2, 3, 1, 3, 4];

// console.log("4532".length)




































