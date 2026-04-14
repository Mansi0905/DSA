//! n se leke 1 tak print krna hai
// function temp(n){
//     while(n>0){
//         console.log(n);
//        temp(n-1);
        
//     }
// }
// temp(6);

//! 1 se leke n tak print krvanaya
// function temp(n){
//     if(n==0){
//         return;
//     }
//     temp (n-1);
//     console.log(n);
    
// }
// temp(10)

//! sum of a number
// function sum(n){
//     if(n==0) return 1;
//     return n + sum(n-1);
// }
// console.log(sum(5));

//! factorial of a number
// function fact(n){
//     if(n==1) return n;
//     return n * fact(n-1);
// }
// console.log(fact(5));


//! fibonacci series
// function fibo(n,first,second){
//     if(n==0) return;
//     let third = first +  second;
//     process.stdout.write(third + " ");
//     fibo(n-1 , second,third);
// }

// let n=10;
// process.stdout.write(0+" " + 1 + " ");
// fibo(n-2, 0 ,1);

//! nth term ka sum in fibonaci seruows

function fibo(n){
    if (n==0 || n==1) return n;
    return fibo(n-1) + fibo(n-2);
}
let  n =6 
console.log(fibo(n));

