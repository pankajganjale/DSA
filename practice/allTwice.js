function runProgram(input) {
    input = input.trim().split("\n");
    const test = +input[0];
    let line = 1;
    for (let i = 0; i < test; i++) {
        const n = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        arr.sort((a, b) => a - b);
        let j = 0;
        while (j < n) {
            if (arr[j] === arr[j+1]) {
                j += 2;
            } else {
                console.log(arr[j]);
                break;
            }
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


