//for n = 3
// * * * * *
// * *   * *
// *       *

let n = 3;
let row =0;

while(row<n){
    let col =0;
    let colmirr = 0;
    while(colmirr < n*2 -1){
        if(col<n-row){
            process.stdout.write("* ");
        }
        else{
            process.stdout.write("  ");
        }
        if(colmirr<n-1){
            col++;
        }
        else{
            col--;
        }
        colmirr++;
    }
    process.stdout.write("\n");
    row++;
}