// for n = 5
//     * 
//    * * 
//   * * * 
//  * * * * 
// * * * * *     ------> same as  

//     *
//    **
//   ***
//  ****
// *****


let n = 5;
let row = 0;
while(row<n){
    let col = 0;
    while(col<n){
        if(col<n-row-1){
            process.stdout.write(" ");
        }
        else{
            process.stdout.write("* ");
        }

        col++;
    }
    process.stdout.write("\n");
    row++;
}