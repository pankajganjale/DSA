const find = (n, arr) => {
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) {
            if ((arr[i] + arr[j]) % 60 === 0) count++;
        }
    }
    return count;
};

function runProgram(input) {
    input = input.trim().split("\n");
    const test = +input[0];
    let line = 1;
    for (let i = 0; i < test; i++) {
        const n = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        console.log(find(n, arr));
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


