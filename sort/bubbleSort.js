let arr = [100, 2, 5, 1, 99, 5];

function bubbleSort(arr, n) {
    for (let i = 0; i < n-1; i++) {
        let swap = false;
        for (let j = 0; j < n-i+1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swap = true;
            }
        }
        if (!swap) break;
    }
    return arr;
}

console.log(bubbleSort(arr, arr.length));