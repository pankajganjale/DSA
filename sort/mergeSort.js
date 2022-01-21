let arr = [100, 2, 5, 1, 99, 5];

function merge(leftArr, rightArr) {
    let left = 0;
    let right = 0;
    let output = [];
    while (left < leftArr.length && right < rightArr.length) {
        if (leftArr[left] < rightArr[right]) {
            output.push(leftArr[left++]);
        } else {
            output.push(rightArr[right++]);
        }
    }
    return [...output, ...leftArr.slice(left), ...rightArr.slice(right)];
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

console.log(mergeSort(arr));