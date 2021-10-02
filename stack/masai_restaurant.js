function runProgram(input) {
    var input = input.trim().split("\n");
    let stack = [];
    for (let i = 1; i < input.length; i++) {
        let arr = input[i].trim().split(" ").map(Number);
        if (arr[0] === 1) {
            if (stack.length === 0) {
                console.log("No Food");
            } else {
                console.log(stack[stack.length-1]);
                stack.pop();
            }
        } else {
            stack.push(arr[1]);
        }
    }
}

if (process.env.USERNAME === 'panka') {
runProgram(`6
1
2 5
2 7
2 9
1
1`);
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
