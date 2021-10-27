// You are given an array of size N, which contains unique numbers. You need to find if there is a subsequence of an array whose sum is equal to the largest element in the array.
// Note:- You cannot include the largest element while counting the sum.


let findEqual = (arr, n) => {
    let sum = 0;
    for (let i = 0; i < arr.length && arr[i] !== n; i++) {
        sum += arr[i];
    }
    if (sum === n) return true;
    return false;
}

let find = (n, arr, j, newArr, output, target) => {
    if (newArr.length > 0) {
        if (findEqual(newArr, target)) output.push(1);
    }
    if (j === n) return;
    for (let i = j; i < n; i++) {
        newArr.push(arr[i]);
        find(n, arr, i+1, newArr, output, target);
        newArr.pop();
    }
}

let largest = (arr) => {
    let large = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (large < arr[i]) {
            large = arr[i];
        }
    }
    return large;
}

function runProgram(input) {
    let inp = input.trim().split("\n");
    let test = +inp[0];
    let line = 1;
    for (let i = 0; i < test; i++) {
        let n = +inp[line++];
        let arr = inp[line++].trim().split(" ").map(Number);
        let j = 0;
        let newArr = [];
        let output = [];
        let target = largest(arr);
        find(n, arr, j, newArr, output, target);
        if (output.length > 0) {
            console.log("Yes");
        } else {
            console.log("No");
        }
    }
}

if (process.env.USERNAME === 'panka') {
runProgram(`3
3
1 2 3
4
0 1 2 3
4
2 3 6 10`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
