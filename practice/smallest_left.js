function runProgram(input) {
    var input = input.trim().split("\n");
    const n = +input[0];
    const arr = input[1].trim().split(" ").map(Number);
    
    let stack = [];
    let output = []

    for (let i = 0; i < n; i++) {
        while (stack[stack.length-1] >= arr[i]) {
            stack.pop();
        }
        if (stack.length === 0) {
            output.push(-1);
        } else {
            output.push(stack[stack.length-1]);
        }
        stack.push(arr[i]);
    }

    console.log(output.join(" "));
}

if (process.env.USERNAME === 'panka') {
runProgram(`8
39 27 11 4 24 32 32 1`);
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


