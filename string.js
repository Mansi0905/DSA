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

// let s=prompt("enter")
// let ispalindrome =true
// let i=0, j=s.length -1 ;
// while(i < j){
//     if(s.charAt(i) != s.charAt( j)){
//         ispalindrome =false;
//         break
//     }
//     i++
//     j--
// }
// if(ispalindrome) console.log("paindromne");
// else console.log("not palidnrome");


 

//! toggle each character
// let s= prompt("enter a astring")
// console.log(s);

// let toggle =""
// for(let i = 0;i<s.length-1; i++){
//     let ch= s.charCodeAt(i);

//     if(ch>=65 &&  ch<=90){
//         toggle = toggle + String.fromCharCode(ch+32)
//     }else if(ch >=97 &&  ch<=122){
//         toggle = toggle + String.fromCharCode(ch-32)
//     }

// }
// console.log(toggle);


//! frequnecy of ecah characterke
let s=prompt("enter");
let arr= new Array(128).fill(0);

for(let i =0;i< s.length;i++){
    let index = s.charCodeAt(i);
    arr[index] = arr[index] + 1
}
for(let i=0;i<arr.length;i++){
    if (arr[i] >0){
        console.log(String.fromCharCode(i)+" appears at" +arr[i]+ " times")
    }
}

