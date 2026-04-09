//! 1bubble sort

// let arr= [10,5,1,12,3];
// let n=arr.length;
// for(let i =0; i<n-1;i++){
// for(j=0;j <n-1-i;j++){ 
//     if( arr[j ] > arr[j+ 1]){
//         let temp=arr[j]
//         arr[j]=arr[j+1]
//         arr[j+1]=temp
//     }

// }

// }
// console.log(arr);

//!selection sort
// let arr= [10,99,5,1,12,3];
// let n=arr.length;

// for(let i =0; i<n-1;i++){
//     let min =i;
// for(j=i+1;j <n;j++){ 
//     if( arr[min ] > arr[j]){
//         min =j;
//         }
//         if (min !=i){
//             let temp=arr[min]
//             arr[min]= arr[i]
//             arr[i]=temp
//         }

// }

// }
// console.log(arr);

//!insertion sory
let arr= [10,99,5,1,12,3];
let n=arr.length;  
for(let i =1; i<n;i++){
    let key =arr[i];
    let j=i-1;  
    while(j>=0 && arr[j]>key){
        arr[j+1]=arr[j];
        j--;
    }
    arr[j+1]=key;
}
console.log(arr);                 

