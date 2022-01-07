const arr = [1, 3, 5, 10, 10, 10, 15];
const n = arr.length;
const k = 10;

const lastOccurance = (arr, n, k) => {
    let lo = 0;
    let hi = n-1;
    let index = -1;
    while (lo < hi) {
        const mid = Math.floor(lo + ((hi - lo)/2));
        if (arr[mid] === k) {
            index = mid;
            lo = mid + 1;
        } else if (arr[mid] < k) {
            li = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return index;
};

console.log(lastOccurance(arr, n, k));