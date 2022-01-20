const find = (n) => {
    if (n < 1) return 0;
    if (n === 1) return 1;
    return find(n-1) + find(n-2);
};

function runProgram(input) {
    console.log(find(+input));
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


