//for n = 5
//          *
//        * *
//      * * *
//    * * * *
//  * * * * *
//    * * * *
//      * * *
//        * *
//          *

//SOl 1

// let n = 5;
// let row =0;
// let rowmirr =0;
// while(rowmirr<2*n-1){
//   let col = 0;
//   while(col<n){
//     if(col<n-row-1){
//       process.stdout.write("  ");
//     }
//     else{
//       process.stdout.write("* ");
//     }
//     col++;
//   }
//   process.stdout.write("\n");
//   if(rowmirr<n-1){
//     row++;
//   }
//   else{
//     row--;
//   }
//   rowmirr++;
// }

//SOl 2
let n = 5;
let row =0;
let rowmirr = 0;
while(rowmirr<2*n-1){
  let col =0;
  while(col<n){
    if(row+col<n-1){
      process.stdout.write("  ");
    }
    else{
      process.stdout.write("* ");
    }
    col++;
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