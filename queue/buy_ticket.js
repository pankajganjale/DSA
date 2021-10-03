function runProgram(input) {
    var input = input.trim().split("\n");
    let queue = [];
    let l = 0;
    let r = 0;
    for (let i = 1; i < input.length; i++) {
        let arr = input[i].trim().split(" ");
        if (arr[0] === "E") {
            queue[r] = arr[1];
            r++;
            console.log(r-l);
        } else {
            let output = [];
            if (r-l === 0) {
                output = [-1, 0];
            } else {
                output.push(queue[l++]);
                output.push(r-l);
            }
            console.log(output.join(" "));
        }
    }
}

if (process.env.USERNAME === 'panka') {
runProgram(`5
E 2
D
D
E 3
D`);
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
