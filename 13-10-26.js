// HAS DUPLICATES -> CHECKS WHETHER ANY ELEMENT APPEARS MORE THAN ONCE
 function hasDuplicates(arr){
   const seen = new Set();
   for (let i =0; i<arr.length ; i++){
     if(seen.has(arr[i])){
       return true;}
     seen.add(arr[i]);
   }
   return false;
 }

** LOGIC=> create an emmpty set called as seeen.
            
















//FREQUENCY COUNT
 function frequency (arr){
 const count = new Map();
 for(let i=0; i < arr.length ; i++){
  const x = arr[i];
  if(count.has(x)){
   [count.set(x,count.get(x)+1);
  }
  else{
   count.set(x,1);
  }
 }
 return count;
}
