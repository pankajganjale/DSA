function runProgram(input) {
    var input = input.trim().split(" ").map(Number);

    let stack = [];
    let output = [];

    for (let i = input.length-1; i >= 0; i--) {
        if (stack.length === 0) {
            output.unshift(-1);
        } else if (stack.length > 0 && stack[stack.length-1] > input[i]) {
            output.unshift(stack[stack.length-1]);
        } else if (stack.length > 0 && stack[stack.length-1] <= input[i]) {
            while (stack[stack.length-1] <= input[i] && stack.length > 0) {
                stack.pop();
            }
            if (stack.length === 0) {
                output.unshift(-1);
            } else {
                output.unshift(stack[stack.length-1]);
            }
        }
        stack.push(input[i]);
    }

    console.log(output.join(" "));
}

if (process.env.USERNAME === 'panka') {
  runProgram(`1 3 2 4`);
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


