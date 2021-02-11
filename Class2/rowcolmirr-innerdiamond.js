//for n = 5
//  * * * * * * * * *
//  * * * *   * * * *
//  * * *       * * *
//  * *           * *
//  *               *
//  * *           * *
//  * * *       * * *
//  * * * *   * * * *
//  * * * * * * * * *

 let n = 5;
 let row =0;
 let rowmirr = 0;
 while(rowmirr<2*n-1){
    let col =0;
    let colmirr = 0;
    while(colmirr<2*n-1){
        if(col<n-row){
            process.stdout.write("* ");
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