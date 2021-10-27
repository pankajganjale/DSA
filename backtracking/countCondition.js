// Given an array of length N and an integer X, the task is to find the number of subsets with a sum equal to X.

let sum = (arr, n) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    if (total === n) return true;
    return false;
}

let find = (n, arr, j, newArr, output, target) => {
    if (newArr.length > 0 && sum(newArr, target)) {
        output.push(1);
    }
    if (j === n) return;
    for (let i = j; i < n; i++) {
        newArr.push(arr[i]);
        find(n, arr, i+1, newArr, output, target);
        newArr.pop();
    }
}

function runProgram(input) {
    let inp = input.trim().split("\n");
    let inp1 = inp[0].trim().split(" ").map(Number);
    let n = inp1[0];
    let target = inp1[1];
    let arr = inp[1].trim().split(" ").map(Number);
    let j = 0;
    let output = [];
    let newArr = [];
    find(n, arr, j, newArr, output, target);
    console.log(output.length);
}

if (process.env.USERNAME === 'panka') {
runProgram(`4 10
1 2 3 4`);
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
