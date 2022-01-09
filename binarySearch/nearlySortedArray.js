const arr = [5, 10, 20, 30, 40, 45, 65, 55, 70, 80];
const n = arr.length;
const k = 65;

const find = (arr, n, k) => {
    let lo = 0;
    let hi = n-1;
    while (lo <= hi) {
        const mid = Math.floor(lo + ((hi - lo)/2));
        if (arr[mid] === k) {
            return mid;
        } else if (mid >= 0 && arr[mid-1] === k) {
            return mid-1;
        } else if (mid < n && arr[mid+1] === k) {
            return mid+1;
        } else if (arr[mid] > k) {
            hi = mid - 2;
        } else if (arr[mid] < k) {
            lo = mid + 2;
        }
    }
    return -1;
}

console.log(find(arr, n, k));