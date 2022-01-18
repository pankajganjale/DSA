const total = (k, arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum === k;
};

const find = (n, k, j, sub, arr, out) => {
    if (sub.length === k) {
        if (total(n, sub)) out.push([...sub]);
    }
    if (j === 9) return;
    for (let i = j; i < 9; i++) {
        sub.push(arr[i]);
        find(n, k, i+1, sub, arr, out);
        sub.pop();
    }
};

function runProgram(input) {
    input = input.trim().split(" ");
    let n = +input[0];
    let k = +input[1];
    let j = 0;
    let sub = [];
    let arr = [];
    let out = [];
    for (let i = 1; i <= 9; i++) {
        arr.push(i);
    }
    find(n, k, j, sub, arr, out);
    if (out.length === 0) {
        console.log(-1);
    } else {
        for (let i = 0; i < out.length; i++) {
            console.log(out[i].join(" "));
        }
    }
}

if (process.env.USERNAME === 'panka') {
  runProgram();
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


