// for n = 4
// 1           1 
// 2 3       3 2 
// 3 4 5   5 4 3 
// 4 5 6 7 6 5 4 

let n = 4;
let row =0;
while(row<n){
    let col =0;
    let colmirr =0;
    while(colmirr<2*n-1){
        if(col<=row){
            process.stdout.write((row+col+1)+" ")
        }
        else{
            process.stdout.write("  ")
        }
        if(colmirr<n-1){
            col++;
        }
        else{
            col--;
        }
        colmirr++;
    }
    process.stdout.write("\n")
    row++;
}