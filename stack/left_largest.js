function runProgram(input) {
    let arr = input.trim().split(" ").map(Number);

    let stack = [];
    let output = [];

    for (let i = 0; i < arr.length; i++) {
        if (stack.length === 0) {
            output.push(-1);
        } else if (stack.length > 0 && stack[stack.length-1] > arr[i]) {
            output.push(stack[stack.length-1]);
        } else if (stack.length > 0 && stack[stack.length-1] <= arr[i]) {
            while (stack.length > 0 && stack[stack.length-1] <= arr[i]) {
                stack.pop();
            }
            if (stack.length === 0) {
                output.push(-1);
            } else {
                output.push(stack[stack.length-1]);
            }
        }
        stack.push(arr[i]);
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
