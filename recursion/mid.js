let find = (str, i, j, output) => {
    if (i > j) return output;
    let mid = Math.floor((i + j)/2);
    output = output + str[mid] + find(str, i, mid-1, output) + find(str, mid+1, j, output);
    return output;
};

function runProgram(input) {
    let inp = input.trim().split("\n");
    let n = +inp[0];
    let line = 1;
    for (let i = 0; i < n; i++) {
        let n = +inp[line++];
        let str = inp[line++];
        console.log(find(str, 0, n-1, ""));
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
