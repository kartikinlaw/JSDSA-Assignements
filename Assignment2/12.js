// 12.Write a program to sort odd and even numbers without taking extra space. (place
// even numbers first then all the odd numbers}
// For eg: {3,8,5,13,6,12,18,5}
// Ans: {8,6,12,18,3,5,13,5}


function sortOddEven(arr){
    let oddpoint = 0;
    let evenpoint = 0;
    while(oddpoint<arr.length && evenpoint<arr.length ){
        if(arr[oddpoint]%2!=0 && arr[evenpoint]%2==0){
            if(oddpoint<evenpoint){
                let temp = arr[oddpoint];
                arr[oddpoint] = arr[evenpoint];
                arr[evenpoint] = temp;
            }
            oddpoint++;
            evenpoint++;
        }
        else if(arr[oddpoint]%2==0){
            oddpoint++;
        }
        else{
            evenpoint++;
        }
    }
}


let nums =[3,8,5,13,6,12,18,5];
sortOddEven(nums);
console.log(nums);