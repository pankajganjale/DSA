var arr = [100, 2, 5, 1, 99, 5];

function selectionSort(arr, n) {
    for (let i = 0; i < n; i++) {
        let dummy = i;
        for (let j = i+1; j < n; j++) {
            if (arr[dummy] > arr[j]) dummy = j;
        }
        [arr[i], arr[dummy]] = [arr[dummy], arr[i]];
    }
    return arr;
}

console.log(selectionSort(arr, arr.length));