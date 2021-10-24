let out = (arr) => {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(arr[i]);
    }
    return output;
}

let find = (arr, n, j, newArr, output) => {
    if (newArr.length === 0) output.push([]);
    if (newArr.length > 0) output.push(out(newArr));
    if (n === j) return;
    for (let i = j; i < arr.length; i++) {
        newArr.push(arr[i]);
        find(arr, n, i+1, newArr, output);
        newArr.pop();
    }
}

function runProgram(input) {
    let arr = input.trim().split(" ").map(Number);
    let n = arr.length;
    let j = 0;
    let newArr = [];
    let output = [];
    find(arr, n, j, newArr, output);
    console.log(output);
}

if (process.env.USERNAME === 'panka') {
  runProgram(`1 2 3`);
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


