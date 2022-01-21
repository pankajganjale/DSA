let arr = [100, 2, 5, 1, 99, 5];

function bubbleSort(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        let swap = false;
        for (let j = 0; j < arr.length-1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swap = true;
            }
        }
        if (!swap) break;
    }
    return arr;
}

console.log(bubbleSort(arr));