//for n = 5
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 

let n = 5;

let rowmirr =0;
let row = 0;
while(rowmirr < 2*n-1){
    let col =0;
    while(col<=row){
        process.stdout.write("* ")
        col++;
    }
    process.stdout.write("\n")
    if(rowmirr<n-1){
        row++;
    }
    else{
        row--;
    }
    rowmirr++
}

//v easy just a rowmirr variable to iterate all rows and 
//row is nothing just a variable where we tell how many stars to print per iteration. 