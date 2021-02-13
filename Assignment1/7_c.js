// for n =5
//         1         
//       1 2 1       
//     1 2 3 2 1     
//   1 2 3 4 3 2 1   
// 1 2 3 4 5 4 3 2 1

let n = 5;
let row = 0;
while(row<n){
    let col =0;
    let colmirr = 0;
    while(colmirr<2*n-1){
        if(col<(n-row-1)){
            process.stdout.write("  ")
        }else{
            process.stdout.write((row+col-3)+" ")
            // I could only find the logic with writing 
            //all digits even where there were spaces 
            //and building a logic
        }
        if(colmirr<n-1){
            col++;
        }else{
            col--;
        }
        colmirr++;
    }
    process.stdout.write("\n")
    row++;
}