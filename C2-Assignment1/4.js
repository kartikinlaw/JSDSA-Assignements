
// here n is the limit till you want to check to skip odd times
function skipEvenValuesOddTimes(n){
    let skip_tot = 0;
    let even_number = 2;
    
    for(let i=1;i<n;i++){
        if(i%2!=0){
            skip_tot = i;
            process.stdout.write(even_number.toString()+" ")
            even_number = even_number + ((skip_tot+1)*2);
            if(even_number>n){ 
                // to stop printing even number greater than n
                // and return
                return ;
            }
        }
    }
    process.stdout.write("\n")
}

skipEvenValuesOddTimes(100);