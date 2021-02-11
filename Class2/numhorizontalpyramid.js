
let n = 5;

let realn = n+1;
let row =0;

while(row<realn){

    let colmirr = 0;
    let col =0;
    while(colmirr<2*realn-1){
        if(col<realn-row-1){
            process.stdout.write("  ");
        }else{
            process.stdout.write((realn-col-1)+" ");
            //its imp to find the co-relation b/w row and col
        }
        if(colmirr<realn-1){
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
