let arr = [100, 2, 5, 1, 99, 5];
let lo = 0;
let hi = arr.length-1;

function partition(arr, lo, hi) {
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
        if (lo < hi) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    [arr[i], arr[hi]] = [arr[hi], arr[i]];
    return i;
}

function quickSort(arr, lo, hi) {
    if (lo < hi) {
        let index = partition(arr, lo, hi);
        quickSort(arr, lo, index-1);
        quickSort(arr, index+1, hi);
    }
    return arr;
}

console.log(quickSort(arr, lo, hi));