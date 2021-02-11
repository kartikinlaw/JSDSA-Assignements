//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *


let n = 5;
let nsp = n-1;
let nr =2*n -1;
let row =0;
let nc = n;
while(row<nr){
    let col = 0;
    while(col<nsp){
        process.stdout.write(" ");
        col++;
    }
    while(col<n){
        process.stdout.write("*");
        col++;
    }  
    process.stdout.write("\n");
    if(row<parseInt(nr/2)){   // be careful
        nsp--;
    }
    else{
        nsp++;
    }
    
    row++;
}

