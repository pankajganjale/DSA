const arr = [12, 11, 12, 22, 52, 7, 9, 10];
const n = arr.length;

const rotation = (arr, n) => {
    let lo = 0;
    let hi = n-1;
    while (lo <= hi) {
        const mid = Math.floor(lo + ((hi - lo) / 2));
        const next = (mid + 1) % n;
        const prev = (mid + n - 1) % n; 
        if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
            return mid;
        } else if (arr[0] <= arr[mid]) {
            lo = mid + 1;
        } else if (arr[mid] <= arr[arr.length-1]) {
            hi = mid - 1;
        }
    }
}

console.log(rotation(arr, n));