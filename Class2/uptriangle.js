// * 
// * * 
// * * * 
// * * * * 
// * * * * * 

let row = 0;
let n = 5;

while(row<n){
    let col= 0;
    while(col<=row){
        process.stdout.write("* ");
        col++;
    }
    process.stdout.write("\n")
    row++;
}