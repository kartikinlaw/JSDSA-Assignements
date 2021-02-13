// for n = 5
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 

let n = 5;
let row = 0;
while(row<n){
    let col = 0;
    while(col<=row){
        process.stdout.write((col+1)+" ")
        col++;
    }
    process.stdout.write("\n")
    row++;
}