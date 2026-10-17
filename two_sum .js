//TWO SUM
function twoSum(arr, target) {
  const seen = new Map();

  for (let i = 0; i < arr.length; i++) {
    const need = target - arr[i];

    if (seen.has(need)) {
      return [seen.get(need), i];
    }

    seen.set(arr[i], i);
  }

  return [];
}



Purpose: Do numbers ke indices return karna jinka sum target ho.



Map: Pehle dekhe hue numbers ko unke indices ke saath store karta hai.



need = target - arr[i]: Required partner calculate karta hai.



seen.has(need): Check karta hai ki partner pehle mila tha ya nahi.



seen.get(need): Partner ka index deta hai.



seen.set(arr[i], i): Current number aur uska index store karta hai.



return []: Koi valid pair na mile toh empty array return karta hai.

Time complexity: O(n) average.
Space complexity: O(n).


  Current number dekho, uska partner calculate karo, partner pehle mila ho toh indices return karo; warna current number ko yaad rakh lo.
