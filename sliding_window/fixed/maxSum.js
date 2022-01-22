let arr = [2, 5, 1, 8, 2, 9, 1];
let n = arr.length;
let k = 2;

function maxSum(arr, n, k) {
    let i = 0;
    let j = 0;
    let max = 0;
    let sum = 0;
    while (j < n) {
        sum += arr[j];
        if (j-i+1 < k) {
            j++;
        } else {
            max = Math.max(sum, max);
            sum -= arr[i];
            j++;
            i++;
        }
    }
    return max;
}

console.log(maxSum(arr, n, k));