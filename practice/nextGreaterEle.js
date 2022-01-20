const find = (n, arr) => {
    let stack = [];
    let output = [];
    for (let i = n-1; i >= 0; i--) {
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
    return output.reverse().join(" ");
};

function runProgram(input) {
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1;
    for (let i = 0; i < test; i++) {
        let n = +input[line++];
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


