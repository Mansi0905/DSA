{
  "name": "kruel",
  "age": 21,
  "skills": ["JS", "DBMS"]
}
function findPivotIdx(arr, first, last) {
    let pivot = arr[first];
    let i = first + 1;
    let j = last;

    while (i <= j) {
        while (i <= last && arr[i] <= pivot) i++;
        while (j >= first && arr[j] > pivot) j--;

        if (i < j) {
            swap(arr, i, j);
        }
    }
    swap(arr, j, first);
    return j;
}
