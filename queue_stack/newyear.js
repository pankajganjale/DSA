function runProgram(input) {
    var input = input.trim().split("\n");
    let queue = [];
    let stack = [];
    let l = 0;
    let r = 0;
    for (let i = 1; i < input.length; i++) {
        let arr = input[i].trim().split(" ").map(Number);
        if (arr[0] === 1) {
            queue[r] = arr[1];
            r++;
        } else if (arr[0] === 2) {
            stack.push(arr[1]);
        } else if (arr[0] === 3) {
            if (r-l === 0) {
                console.log(-1);
            } else {
                console.log(queue[l]);
            }
        } else if (arr[0] === 4) {
            if (stack.length === 0) {
                console.log(-1);
            } else {
                console.log(stack[stack.length-1]);
            }
        } else {
            let front = queue[l];
            l++;
            stack.push(front);
        }
    }
}

if (process.env.USERNAME === 'panka') {
runProgram(`7
1 4
2 3
1 2
3
4
5
4`);
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


