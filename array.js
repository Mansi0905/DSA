// let arr=[10,20,30,40,50]
// let i =0
// let j= arr.length -1

// while(i != j){
//     let temp = arr[i]
//     arr[i]=arr[j]
//     arr[j]=temp
//     i++
//     j--
// }
// console.log(arr)

// let arr=[-1,0,5,3,-8,-6,7,-2]
// let i=0
// let j =0

// while(i<arr.length){
//     if(arr[i]<0){
//         let temp= arr[i]
//         arr[i]= arr[j]
//         arr[j]=temp
//         j++
//     }
//     i++
// }
// console.log(arr);


//!  LEFT ROTATION BY 1 ELEMENT

//  let arr=[1,2,3,4,5]
//  let copy = arr[0]
//  for (let i =0;i<arr.length -1;i++){
//     arr[i]= arr[i+1];
//  }
//  arr[arr.length-1]=copy
//  console.log(arr);
 

//! RIGHT ROTATION BY 1
// let arr=[1,2,3,4,5,6]
// let copy=arr[arr.length-1]

// for(let i = arr.length-1;i>0;i--){
//     arr[i]=arr[i-1]
// }
// arr[0]=copy
// console.log(arr);



//!  ROTATION BY k elements
// let prompt =require('prompt-sync')();
//  let arr=[1,2,3,4,5]
//  let k = Number(prompt("enter a number"));
// k = k%arr.length

//  for(let j=0; j<k ;j++){
//      let copy = arr[0]
//     for(let i =0; i< arr.length-1 ;i++){
//         arr[i]= arr[i+1]
//     }
//     arr[arr.length-1]=copy
//  }
//  console.log(arr);

//? optimized solutiion
// let arr=[1,2,3,4,5,6]
// let temp=new Array(arr.length)
// let k = Number(prompt("enter"))
// k=k%arr.length;

// for(let i=0;i<arr.length-1;i++){
//     temp[i]= arr[(i+k)% arr.length]

// }
// console.log(temp);


//! left roation more optimized solution 
// let arr=[1,2,3,4,5]
// let k = Number(prompt("enetr"))
// k=k%arr.length
// reverse(0,k-1)
// reverse(k,arr.length-1)
// reverse(arr.length-1)
// console.log(arr);


// function reverse(i,j){
//     while(i<j){
//         let temp = arr[i]
//         arr[i]=arr[j]
//         arr[j]= temp
//         i++
//         j--
//     }
// }


//! right rotation more optimized solution
// let arr=[1,2,3,4,5]
// let k = Number(prompt("enetr")) 
// k=k%arr.length
// reverse(0,arr.length-1)
// reverse(0,k-1)
// reverse(k,arr.length-1)
// console.log(arr);

// function reverse(i,j){
//     while(i<j){
//         let temp = arr[i]
//         arr[i]=arr[j]
//         arr[j]= temp
//         i++
//         j--
//     }
// }

//! Remover duplicates from sorted array
// let arr=[1,1,2,3,3,4,5]
// let i=0
// for(let j=1;j<arr.length;j++){   
//     if(arr[i] != arr[j]){
//         i++
//         arr[i]=arr[j]
//     }
// }
// console.log(arr.slice(0,i+1));



//!Merge two sorted arrays
// let arr1 = [1,3,5];
// let arr2 = [2,4,6];

// let merge = new Array(arr1.length + arr2.length);

// let i = 0, j = 0, k = 0;

// while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//         merge[k++] = arr1[i++];
//     } else {
//         merge[k++] = arr2[j++];
//     }
// }

// // remaining elements
// while (j < arr2.length) {
//     merge[k++] = arr2[j++];
// }

// while (i < arr1.length) {
//     merge[k++] = arr1[i++];
// }

// console.log(merge);

//!Sort colors
// let arr=[0,1,2,0,1,2]
// let i=0
// let j=0
// let k=arr.length-1

// while(j<=k){
//     if(arr[j]===0){
//         let temp = arr[i]        
//         arr[i]=arr[j]
//         arr[j]=temp
//         i++
//         j++
//     }else if(arr[j]===1){
//         j++
//     }else{   
//         let temp = arr[j]
//         arr[j]=arr[k]
//         arr[k]=temp  
//         k--
//     }
// }
// console.log(arr);

//!Maximum subarray   -  KADANE ALGO
// let nums=[5,-1,-3,4,,1,2,3]
// let max = -Infinity
// let sum=0;
// for(let i=0;i< nums.length;i++){
//     sum += nums[i]
//     max=Math.max(sum,max)
//     if(sum<0) sum=0;
// }
// return max;


//! Majority elements
// var majorityelement=function(nums){
//     let ans= nums[0]
//     let count =1;
//     for(let i=1;i<nums.length;i++){
//         if(count==0){
//             ans=nums[i]
//             count=1;
//         } else if(ans==nums[i])
//             count++;
//             else count--;
//     }
//     return ans;
// }

//! Trapping rainwater
var trap=function(height){
    let left=new Array(height.length)
    let right=new Array(height.length)

    let maxleft=height[0]
    let maxright=height[height.length-1]
    left[0]= maxleft;
    right[height.length-1]= maxright

    for(let i=1;i<height.length;i++){
        maxleft=Math.max(height[i],maxleft)
        left[i]=maxleft;

    }

    for(let i=height.length-2;i>=0;i--){
        maxright=Math.max(height[i],maxright)
        right[i]=maxright;
    }

    let ans=0;
    for(let i=0;i<height.length;i++){
        ans += Math.min(left[i],right[i]) - height[i]
}
return ans;

};

 

