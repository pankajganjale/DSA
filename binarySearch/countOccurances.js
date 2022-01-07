const arr = [1, 3, 10, 10, 10, 10, 10];
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

const lastOccurance = (arr, n, k) => {
    let lo = 0;
    let hi = n-1;
    let index = -1;
    while (lo <= hi) {
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

const occurances = (arr, n, k) => {
    const lower = firstOccurance(arr, n, k);
    const higher = lastOccurance(arr, n, k);
    console.log(lower)
    console.log(higher)
    const count = higher - lower + 1;
    return count;
};

console.log(occurances(arr, n, k));

