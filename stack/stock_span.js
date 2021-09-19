function runProgram(input) {

    let output = [];
    let stack = [];

    let arr = input.trim().split(" ").map(Number);

    for (let i = 0; i < arr.length; i++) {
        if (stack.length === 0) {
            output.push(1);
        } else if (stack.length > 0 && stack[stack.length-1][0] > arr[i]) {
            output.push(i - stack[stack.length-1][1]);
        } else if (stack.length > 0 && stack[stack.length-1][0] <= arr[i]) {
            while (stack[stack.length-1][0] <= arr[i] && stack.length > 0) {
                stack.pop()
            }
            if (stack.length === 0) {
                output.push(1);
            } else if (stack.length > 0 && arr[i] < stack[stack.length-1][0]) {
                output.push(i - stack[stack.length-1][1]);
            }
        }
        stack.push([arr[i], i]);
    }

    console.log(output);
}

if (process.env.USERNAME === 'panka') {
  runProgram("100 80 60 70 60 75 85");
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
