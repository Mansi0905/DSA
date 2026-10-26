
// Allocate minimun pages (binary search)
//student ko ese book dena hai ki uske pas maximum pages aaye magar load jyda ho jaye ek pr


/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

function isValid(arr,mid,k){
    let numberOfStudent =1;
    let sum = 0;
   
    for(let i = 0 ; i< arr.length;i++){
        if(arr[i] + sum > mid){
            numberOfStudent ++;
            sum =arr[i];
            if(numberOfStudent > k) return false
            
        }else sum += arr[i]
    }
    return true
}
class Solution {

    
    
    findPages(arr, k) {
        
        if(k >arr.length) return -1



        let first = 0;
        let last = 0;
        let ans = -1
        
        
        for(let i =0; i<arr.length;i++){
            
            first =Math.max(arr[i],first);
            
            last +=arr[i];

            
        }  //n
        
        while(first <= last){// nlogn
            let mid = Math.floor((first+last)/2)
            if(isValid(arr,mid,k)){
                ans= mid;
                last = mid-1;
            }else first = mid+1
        }
        return ans;
        
        
        
    }
}

overall timecomplexity = O(nlog(n))
