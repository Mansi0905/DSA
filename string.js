//! Print each character on a new line
//  let s="sheriyans"
//   for(let i=0;i<s.length;i++){
    // console.log(s[i])
//     console.log(s.charAt(i));
    
//   }

//! reverse the order of one one character
// for(let i= s.length-1;i>=0;i--){
//   console.log(s.charAt(i));
// }

//! reversing whole string
// let s='sheriyans';
// let rev=''
// for(let i=s.length-1;i>=0;i--){
//     rev=rev+s.charAt(i)
// }
// console.log(rev);


//!check if the string is palindrome or not
// let s=prompt("enter a string")
// let rev=''
// for(let i=s.length-1;i>=0;i--){
//     rev=rev +s.charAt(i);
// }
// if(rev==s) console.log("plaindrome");
// else console.log("not a paindorme");

let s=prompt("enter")
let ispalindrome =true
let i=0, j=s.length -1 ;
while(i < j){
    if(s.charAt(i) != s.charAt( j)){
        ispalindrome =false;
        break
    }
    i++
    j--
}
if(ispalindrome) console.log("paindromne");
else console.log("not palidnrome");


 

//! 


