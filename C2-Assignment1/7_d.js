// for n = 5
//         1         
//       2 3 2       
//     3 4 5 4 3     
//   4 5 6 7 6 5 4   
// 5 6 7 8 9 8 7 6 5 

let n = 5;
let row = 0;
while(row<n){
    let col =0;
    let colmirr = 0;
    while(colmirr<2*n-1){
        if(col<n-row-1){
            process.stdout.write("  ");
        }else{
            process.stdout.write(((2*row)+col-3)+" ");
    // Making this logic took 2 minutes with a pen and notebook
        }
        if(colmirr<n-1){
            col++;
        }else{
            col--;
        }
        colmirr++;
    }
    process.stdout.write("\n");
    row++;
}