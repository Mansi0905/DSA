// ! GCD - greatest common divisor 
//? euclideian method
// let a = 32;
// let b = 20;

// while(a != b){
//     if(a>b) a= a-b;
//     else b=b-a;
// }
// console.log(a);

//? recursively methodlogy --------> subtracting the smaller number from the larger one until they are equal. The last remaining number is the GCD of the original two numbers.   
// function gcd(a,b){
//     if(a==b) return a;
//     if (a>b) return gcd(a-b,b)
//     else  return gcd(b,b-a);

// }
// console.log(gcd(32,20));

//? using modulus operator
// function gcd(a,b){
//     if(b==0) return a;
//     return gcd(b,a%b);
// }
// console.log(gcd(32,20)); 

//! factors of a number.
// let n = 100;
// for(let i=1; i <= Math.floor(Math.sqrt(n));i++){
//     if (n % i == 0){
//         process.stdout.write(i + " ");
      
//     }
// }
//   for(let i= Math.floor(Math.sqrt(n));i>=1;i--){
//     if (n % i == 0){
//       if(n/i != i)
//          { process.stdout.write(n / i + " ");

//          }
      
//     }
// }

//! count of primes => sieve of eratosthenes
// let n=30;
// let arr= new Array(n+1).fill(true);
// for(let i=2 ; i<= Math.floor(Math.sqrt(n)); i++){
//     if(arr[i]){
//         for(let j = i*i; j<=n;j += i){
//             arr[j]= false;
//         }
//     }
// }

// for(let i =2 ;i <arr.length;i++){
//     if(arr[i]) process.stdout.write(i + " ");
// }

//! pow (x,n)
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) { //starting me hi n ki value zero mil gyi ya fir negative hai i.e less than 0
    if(n == 0) return 1.0;
    let ans = temp(x,n);
    return (n<0)? 1/ans : ans;
   
    
};
var temp = function(x,n){ 
    if(n==0) return 1;
    let ans = temp(x,parseInt(n/2));  //stack me jane ke bad condition check hui if (n==0 ) agr nhi to to jo n hai vo half ho jata hai
    if( n% 2 ==0) return ans * ans;   // agr answer even hai to ye chlega
    return ans * ans * x; // agr eodd hai to ye chlega
}
