const find = (n, k, j, sub, out, arr) => {
    if (sub.length === k) console.log(sub.join(" "));
    if (j > n) return;
    for (let i = j; i < n; i++) {
        sub.push(arr[i]);
        find(n, k, i+1, sub, out, arr);
        sub.pop();
    }
};

function runProgram(input) {
    const [n, k] = input.trim().split(" ").map(Number);
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    let j = 0;
    let sub = [];
    let out = [];
    find(n, k, j, sub, out, arr);
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


