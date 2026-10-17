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
 Logic:
1. Create an empty Set called seen.
2. Traverse each element in the array.
3. seen.has(x) checks if the element already exists.
4. If yes → return true (duplicate found).
5. If no → seen.add(x) stores the element.
6. If the loop finishes without finding a duplicate → return false.

 Example: [1, 2, 3, 2] → true

Remember:
- Set stores unique values.
- .has() = check; .add() = store.
- return immediately stops the function.

 Complexity: Time: (O(n)) average | Space: (O(n))
            








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


Logic:
1. Create an empty Map called count.
2. Traverse each element and store it in x.
3. count.has(x) checks if the element already exists as a key.
4. If yes → count.get(x) + 1 increments its frequency.
5. If no → count.set(x, 1) initializes its frequency to 1.
6. Return the Map containing each element and its frequency.
Example: [2, 3, 2, 5, 3, 2]
Output: 2 → 3, 3 → 2, 5 → 1
Remember:
- Map stores key-value pairs.
- .has() = check; .get() = retrieve value; .set() = add/update value.
- New element → count starts at 1.
- Repeated element → count increases by 1.


Complexity: Time: (O(n)) average | Space: (O(k)), where k is the number of unique elements.



 One-line memory trick:
- Set: Have I seen this element before?
- Map: How many times have I seen this element?
