let arr = [1, 2, 3, 4];
let newArr = [];
let j = 0;
let n = arr.length;

let sub = (arr, n , j, newArr) => {
    console.log(newArr)
    if (n === j) return;
    for (let i = j; i < n; i++) {
        newArr.push(arr[i]);
        sub(arr, n , i+1, newArr);
        newArr.pop();
    }
}

console.log(sub(arr, n , j, newArr))
