var arr = [5, 99, 6, 1, 6, 7, 55, 0];

let bubbleSort = (arr) => {
    for (let i = 0; i < arr.length-1; i++) {
        let dummy = false;
        for (let j = 0; j < arr.length-i+1; j++) {
            if (arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            dummy = true;
        }
        if (dummy === false) break;
    }
    return arr;
}

console.log(bubbleSort(arr));

let selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let dummy = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[dummy] > arr[j]) dummy = j;
        }
        [arr[i], arr[dummy]] = [arr[dummy], arr[i]];
    }
    return arr;
}

console.log(selectionSort(arr));

let merge = (leftArr, rightArr) => {
    let left = 0;
    let right = 0;
    let output = [];
    while (left < leftArr.length && right < rightArr.length) {
        if (leftArr[left] <= rightArr[right]) {
            output.push(leftArr[left++]);
        } else {
            output.push(rightArr[right++]);
        }
    }
    return [...output, ...leftArr.slice(left), ...rightArr.slice(right)]; 
}

let mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

console.log(mergeSort(arr));

let partition = (arr, lo, hi) => {
    let i = lo;
    let j = hi;
    let piv = arr[hi];
    while (i < j) {
        while (arr[j] >= piv && j > 0) {
            j--;
        }
        while (arr[i] < piv && i < hi) {
            i++;
        }
        if (i < j) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    [arr[i], arr[hi]] = [arr[hi], arr[i]];
    return i;
}

let quickSort = (arr, lo, hi) => {
    if (lo < hi) {
        let index = partition(arr, lo, hi);
        quickSort(arr, lo, index-1);
        quickSort(arr, index+1, hi);
    }
    return arr;
}

console.log(quickSort(arr, 0, arr.length-1));