

function outputBadge(credits){
    if(credits<4500){
        process.stdout.write('Rising Star');
    }else if(credits>=4500 && credits<6000){
        process.stdout.write('Mega leader');
    }else if(credits>=6000 && credits<7500){
        process.stdout.write('Gega leader');
    }else{
        process.stdout.write('Tera leader');
    }
    process.stdout.write('\n');
}

outputBadge(7500);