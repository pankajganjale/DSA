const arr = [1, 2, 3, 4, 6, 7, 9];
const n = arr.length;
const k = 8;

const findFloor = (arr, n, k) => {
    let lo = 0;
    let hi = n-1;
    let output = -1;
    while (lo <= hi) {
        const mid = Math.floor(lo + ((hi - lo) / 2));
        if (arr[mid] === k) {
            return arr[mid];
        } else if (arr[mid] > k) {
            hi = mid - 1;
        } else if (arr[mid] < k) {
            output = arr[mid];
            lo = mid + 1;
        }
    }
    return output;
}

console.log(findFloor(arr, n, k));