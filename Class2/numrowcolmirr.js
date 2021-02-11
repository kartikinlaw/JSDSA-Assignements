//for n = 5
// 1 2 3 4 5 4 3 2 1 
// 2 3 4 5   5 4 3 2 
// 3 4 5       5 4 3 
// 4 5           5 4 
// 5               5 
// 4 5           5 4 
// 3 4 5       5 4 3 
// 2 3 4 5   5 4 3 2 
// 1 2 3 4 5 4 3 2 1

 let n = 5;
 let row =0;
 let rowmirr = 0;
 while(rowmirr<2*n-1){
    let col =0;
    let colmirr = 0;
    while(colmirr<2*n-1){
        if(col<n-row){
            process.stdout.write((row+col+1)+" ");
        }else{
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
    if(rowmirr<n-1){
        row++;
    }
    else{
        row--;
    }
    rowmirr++;
 }