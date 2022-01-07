const arr = [1, 3, 10, 10, 10, 10, 15];
const n = arr.length;
const k = 10;

const firstOccurance = (arr, n, k) => {
    let lo = 0;
    let hi = n-1;
    let lowest = -1;
    while (lo <= hi) {
        let mid = Math.floor(lo + ((hi - lo)/2));
        if (arr[mid] === k) {
            lowest = mid;
            hi = mid - 1;
        } else if (arr[mid] < k) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return lowest;
};

console.log(firstOccurance(arr, n, k));