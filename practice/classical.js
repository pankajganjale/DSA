let find = (arr) => {
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
        if ((stack[stack.length-1] === "{" && arr[i] === "}") || (stack[stack.length-1] === "[" && arr[i] === "]") || (stack[stack.length-1] === "(" && arr[i] === ")")) {
            stack.pop();
        } else {
            stack.push(arr[i]);
        }
    }
    if (stack.length === 0) {
        return "balanced";
    } else {
        return "not balanced";
    }
}

function runProgram(input) {
    var input = input.trim().split("\n");
    for (let i = 1; i < input.length; i++) {
        let arr = input[i].trim().split("");
        console.log(find(arr));
    }
}

if (process.env.USERNAME === 'panka') {
runProgram(`3
{([])}
()
([]
`);
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
