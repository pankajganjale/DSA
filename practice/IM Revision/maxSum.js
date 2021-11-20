let arr = [2, 5, 1, 8, 2, 9, 1];
let k = 3;
let n = arr.length;

const maxSum = (arr, k, n) => {
    let max = 0;
    let sum = 0;
    let j = 0;
    let i = 0;
    while (j < n) {
        sum += arr[j];
        if (j-i+1 < k) {
            j++;
        } else if (j-i+1 === k) {
            max = Math.max(max, sum);
            sum -= arr[i];
            i++;
            j++
        }
    }
    return max;
}

console.log(maxSum(arr, k, n));