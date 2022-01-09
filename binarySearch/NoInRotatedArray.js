const arr = [11, 12, 13, 22, 52, 7, 9, 10];
const n = arr.length;
const k = 12;

const findNumber = (arr, n) => {
    let lo = 0;
    let hi = n-1
    while (lo <= hi) {
        const mid = Math.floor(lo + ((hi-lo) / 2));
        const prev = (mid + n - 1) % n;
        const next = (mid + 1) % n;
        if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
            return mid;
        } else if (arr[0] <= arr[mid]) {
            lo = mid + 1;
        } else if (arr[arr.length-1] >= arr[mid]) {
            hi = mid - 1;
        }
    }
}

const binarySearch = (arr, k) => {
    let lo = 0;
    let hi = arr.length-1;
    while (lo <= hi) {
        const mid = Math.floor(lo + ((hi-lo) / 2));
        if (arr[mid] === k) {
            return arr[mid];
        } else if (k < arr[mid]) {
            hi = mid - 1;
        } else if (arr[mid] < k) {
            lo = mid + 1;
        }
    }
    return -1;
}

const lowestInArray = findNumber(arr, n);
const arr1Output = binarySearch(arr.slice(0, lowestInArray), k);
const arr2Output = binarySearch(arr.slice(lowestInArray, arr.length), k);

console.log(arr1Output);
console.log(arr2Output);