// 8. Write a program to count multiple of 5 in an array. Take the input array from the
// user.
// For eg: {5, 45, 23, 63, 27, 80, 15, 2, 65, 30}
// Ans: 6


function multiple_of_five(arr) {
    let count = 0;
    for (const el of arr){
        if(el%5==0){
            count++;
        }
    }
        return count;
}

let nums = [5,45,23,63,27,80,15,2,65,30];

console.log(multiple_of_five(nums));

