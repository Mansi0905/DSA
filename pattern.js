// process.stdout.write("hello");
// process.stdout.write("world");

let prompt=require('prompt-sync')();
let n =Number( prompt("enter a mumber"))
// for(let i=1;i<=a;i++){ 
//     let ascii =65;
//     for(let j=1;j<=i;j++){
// process.stdout.write(String.fromCharCode(ascii)+"");
// ascii++;
//     }


// for(let j=1;j<=a-i+1;j++){
//     process.stdout.write("* ");


// }


//mirror right
// for(let i=1;i<=n;i++){ 
// //inverted
// for(let j=1;j<=n-i-1;j++){  
//      process.stdout.write(" ");
//     }

// //right
// for(let j=1;j<=i;j++){
//     process.stdout.write("* ");
// }
//     console.log();
// }.

//? x pattern
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n; j++){
//         if(i + j == n + 1 || i == j){
//             process.stdout.write("* ");
//         } else {
//             process.stdout.write("  ");
//         }
//     }
//     console.log();
// }

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= 2*n-1; j++){
//         if(i + j == 2*n || i == j){
//             process.stdout.write("* ");
//         } else {
//             process.stdout.write("  ");
//         }
//     }
//     console.log();
// }