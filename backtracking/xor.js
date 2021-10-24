// Input: nums = [5,1,6]
// Output: 28
// Explanation: The 8 subsets of [5,1,6] are:
// - The empty subset has an XOR total of 0.
// - [5] has an XOR total of 5.
// - [1] has an XOR total of 1.
// - [6] has an XOR total of 6.
// - [5,1] has an XOR total of 5 XOR 1 = 4.
// - [5,6] has an XOR total of 5 XOR 6 = 3.
// - [1,6] has an XOR total of 1 XOR 6 = 7.
// - [5,1,6] has an XOR total of 5 XOR 1 XOR 6 = 2.
// 0 + 5 + 1 + 6 + 4 + 3 + 7 + 2 = 28

let find = (arr, n, j, newArr, output) => {
    if (newArr.length > 0) {
        if (newArr.length === 1) {
            output.push(newArr[0]);
        } else {
            let count = newArr[0];
            for (let k = 1; k < newArr.length; k++) {
                count = count ^ newArr[k];
            }
            output.push(count);
        }
    }
    if (n === j) return;
    for (let i = j; i < n; i++) {
        newArr.push(arr[i]);
        find(arr, n, i+1, newArr, output);
        newArr.pop()
    }
}

function runProgram(input) {
    let arr = input.trim().split(" ").map(Number);
    let n = arr.length;
    let j = 0;
    let newArr = [];
    let output = [];
    find(arr, n, j, newArr, output);
    let sum = 0;
    for (let i = 0; i < output.length; i++) {
        sum += output[i];
    }
    console.log(sum);
}

if (process.env.USERNAME === 'panka') {
  runProgram(`5 1 6`);
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


